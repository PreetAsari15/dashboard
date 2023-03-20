import {
  View,
  Text,
  useWindowDimensions,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { useRef, useMemo, useEffect, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import {
  MaterialCommunityIcons,
  Entypo,
  FontAwesome5,
  Fontisto,
  Ionicons,
} from "@expo/vector-icons";
import orders from "../../../assets/data/orders.json";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

import styles from "./styles";
const order = orders[0];

const deliveryLocation = {
  latitude: order.WasteProvider.lat,
  longitude: order.WasteProvider.lng,
};
const userLocation = {
  latitude: order.User.lat,
  longitude: order.User.lng,
};

// ENUM for rendering orders
// Drivers can only see the order if the status is "READY_FOR_PICKUP"
// Once the pickup is completed or the lorry leaves the pickup place, the order is completed
const ORDER_STATUSES = {
  READY_FOR_PICKUP: "READY_FOR_PICKUP",
  ACCEPTED: "ACCEPTED",
  PICKED_UP: "PICKED_UP",
};

const OrderDelivery = () => {
  const [driverLocation, setDriverLocation] = useState(null);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [totalKm, setTotalKm] = useState(0);
  const [deliveryStatus, setDeliveryStatus] = useState(
    ORDER_STATUSES.READY_FOR_PICKUP
  );
  const [isDriverClose, setIsDriverClose] = useState(false);

  const bottomSheetRef = useRef(null);
  const mapRef = useRef(null);
  const { width, height } = useWindowDimensions();
  const snapPoints = useMemo(() => ["12%", "95%"], []);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (!status === "granted") {
        console.log("Nonono");
        return;
      }

      let location = await Location.getCurrentPositionAsync();
      setDriverLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();

    const foregroundSubscription = Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.Balanced,
        distanceInterval: 100,
      },
      (updatedLocation) => {
        // We are only updating the setDriverLocation because everytime the driverLocation is updated it will re-render the remaning time and kms
        setDriverLocation({
          latitude: updatedLocation.coords.latitude,
          longitude: updatedLocation.coords.longitude,
        });
      }
    );
    return foregroundSubscription;
  }, []);

  if (!driverLocation) {
    return <ActivityIndicator size={"large"} />;
  }

  const onButtonpressed = () => {
    if (deliveryStatus === ORDER_STATUSES.READY_FOR_PICKUP) {
      bottomSheetRef.current?.collapse();
      mapRef.current.animateToRegion({
        latitude: driverLocation.latitude,
        longitude: driverLocation.longitude,
        latitudeDelta: 3.0,
        longitudeDelta: 3.0,
      });
      setDeliveryStatus(ORDER_STATUSES.ACCEPTED);
    }
    if (deliveryStatus === ORDER_STATUSES.ACCEPTED) {
      bottomSheetRef.current?.collapse();
      setDeliveryStatus(ORDER_STATUSES.PICKED_UP);
    }
    if (deliveryStatus === ORDER_STATUSES.PICKED_UP) {
      bottomSheetRef.current?.collapse();
      navigation.goBack();
      console.warn("Waste Delivery Finished");
    }
  };

  const renderButtonTitle = () => {
    if (deliveryStatus === ORDER_STATUSES.READY_FOR_PICKUP) {
      return "Accept Waste Pickup";
    }
    if (deliveryStatus === ORDER_STATUSES.ACCEPTED) {
      return "Pick-Up Waste";
    }
    if (deliveryStatus === ORDER_STATUSES.PICKED_UP) {
      return "Delivery Completed";
    }
  };

  // only allow pickup if the driver is in proximity of the pickup
  const isButtonDisabled = () => {
    if (deliveryStatus === ORDER_STATUSES.READY_FOR_PICKUP) {
      return false;
    }
    if (deliveryStatus === ORDER_STATUSES.ACCEPTED && isDriverClose) {
      return false;
    }
    if (deliveryStatus === ORDER_STATUSES.PICKED_UP && isDriverClose) {
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={{ height, width }}
        showsUserLocation
        followsUserLocation
        initialRegion={{
          latitude: driverLocation.latitude,
          longitude: driverLocation.longitude,
          longitudeDelta: 3.0,
          latitudeDelta: 3.0,
        }}
      >
        <MapViewDirections
          origin={driverLocation}
          destination={
            deliveryStatus === ORDER_STATUSES.ACCEPTED
              ? userLocation
              : deliveryLocation
          }
          strokeWidth={10}
          waypoints={
            deliveryStatus === ORDER_STATUSES.READY_FOR_PICKUP
              ? [userLocation]
              : []
          }
          strokeColor="#3FC060"
          // DONOT PUSH API KEY TO REPO
          // apikey="Paste API Key Here"
          apikey="AIzaSyCxvk-h_L37Tsk0bupRpRU5AjuqEuOwLx0"
          onReady={(result) => {
            if (result <= 0.1) {
              setIsDriverClose(true);
            }
            setTotalMinutes(result.duration);
            setTotalKm(result.distance);
          }}
        />
        {/* One marker for wasteprovider and one for user */}
        <Marker
          coordinate={{
            latitude: order.WasteProvider.lat,
            longitude: order.WasteProvider.lng,
          }}
          title={order.WasteProvider.name}
          description={order.WasteProvider.address}
        >
          <View
            style={{ backgroundColor: "green", padding: 5, borderRadius: 15 }}
          >
            <MaterialCommunityIcons name="dump-truck" size={30} color="white" />
          </View>
        </Marker>

        <Marker
          coordinate={{ latitude: order.User.lat, longitude: order.User.lng }}
          title={order.User.name}
          description={order.User.address}
        >
          <View
            style={{ backgroundColor: "green", padding: 5, borderRadius: 15 }}
          >
            <Entypo name="home" size={24} color="white" />
          </View>
        </Marker>
      </MapView>
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="black"
        style={{ top: 40, left: 15, position: "absolute" }}
      />
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        handleIndicatorStyle={styles.handleIndicator}
      >
        <View style={styles.handleIndicatorContainer}>
          <Text style={styles.routeDetailsText}>
            {totalMinutes.toFixed(0)} min
          </Text>
          <FontAwesome5
            name="shopping-bag"
            size={30}
            color="#3FC060"
            style={{ marginHorizontal: 10 }}
          />
          <Text style={{ fontSize: 25, letterSpacing: 1 }}>
            {totalKm.toFixed(2)} Kms
          </Text>
        </View>
        <View style={styles.deliveryDetailsContainer}>
          <Text style={styles.wasteProviderName}>
            {order.WasteProvider.name}
          </Text>
          <View style={styles.addressContainer}>
            <Fontisto name="shopping-store" size={20} color="grey" />
            <Text
              style={{
                fontSize: 20,
                color: "grey",
                fontWeight: "600",
                letterSpacing: 0.5,
                marginLeft: 15,
                textAlign: "center",
              }}
            >
              {order.WasteProvider.address}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 20,
              alignItems: "center",
            }}
          >
            <FontAwesome5 name="map-marker-alt" size={30} color="grey" />
            <Text
              style={{
                fontSize: 20,
                color: "grey",
                fontWeight: "500",
                letterSpacing: 0.5,
                marginLeft: 15,
                textAlign: "center",
              }}
            >
              {order.User.address}
            </Text>
          </View>

          <View style={styles.orderDetailsContainer}>
            <Text style={styles.orderItemText}>Retallack to Robinson</Text>
            <Text style={styles.orderItemText}>Plastic Services x3</Text>
            <Text style={styles.orderItemText}>Hazardous Services x3</Text>
          </View>
        </View>
        <Pressable
          style={styles.buttonContainer}
          onPress={onButtonpressed}
          disabled={isButtonDisabled()}
        >
          <Text
            style={{
              ...styles.buttonText,
              backgroundColor: isButtonDisabled() ? "grey" : "#3FC060",
            }}
          >
            {renderButtonTitle()}
          </Text>
        </Pressable>
      </BottomSheet>
    </View>
  );
};

export default OrderDelivery;
