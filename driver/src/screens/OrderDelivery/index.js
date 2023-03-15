import { View, Text, useWindowDimensions } from "react-native";
import { useRef, useMemo } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { FontAwesome5, Fontisto } from "@expo/vector-icons";
import orders from "../../../assets/data/orders.json";
import MapView, { Marker } from "react-native-maps";
// import * as Location from "expo-location";
import styles from "./styles";

const order = orders[0];

const OrderDelivery = () => {
  const [driverLocation, setDriverLocation] = useState(null);

  const bottomSheetRef = useRef(null);
  const { width, height } = useWindowDimensions();
  const snapPoints = useMemo(() => ["12%", "95%"], []);
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <MapView
        style={{ height, width }}
        showsUserLocation
        followsUserLocation
        // initialRegion={{
        //   latitude: "",
        // }}
      />
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        handleIndicatorStyle={styles.handleIndicator}
      >
        <View style={styles.handleIndicatorContainer}>
          <Text style={styles.routeDetailsText}>14 min</Text>
          <FontAwesome5
            name="shopping-bag"
            size={30}
            color="#3FC060"
            style={{ marginHorizontal: 10 }}
          />
          <Text style={{ fontSize: 25, letterSpacing: 1 }}>5 Kms</Text>
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
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Accept Order</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

export default OrderDelivery;
