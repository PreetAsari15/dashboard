import { useRef, useMemo, useState, useEffect } from "react";
import { View, Text, FlatList, useWindowDimensions } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import orders from "../../../assets/data/orders.json";
import OrderItem from "../../component/OrderItem";
import MapView, { Marker } from "react-native-maps";
import { Entypo, Ionicons } from "@expo/vector-icons";
// import { DataStore } from "aws-amplify";
// import { Order } from "../../models";

const order = orders[0];

const OrdersScreen = () => {
  // const [orders, setOrders] = useState([]);
  const bottomSheetRef = useRef(null);
  const { width, height } = useWindowDimensions();

  const snapPoints = useMemo(() => ["12%", "95%"], []);

  // useEffect(() => {
  //   DataStore.query(Order).then(setOrders);
  // }, []);

  console.log(orders);

  return (
    <View style={{ backgroundColor: "lightblue", flex: 1 }}>
      <MapView
        style={{
          height,
          width,
        }}
        showsUserLocation
        followsUserLocation
      >
        {orders.map((order) => (
          <Marker
            key={order.id}
            title={order.WasteProvider.name}
            description={order.WasteProvider.address}
            coordinate={{
              latitude: order.WasteProvider.lat,
              longitude: order.WasteProvider.lng,
            }}
          >
            <View
              style={{ backgroundColor: "green", padding: 5, borderRadius: 15 }}
            >
              <Ionicons name="trash-bin" size={24} color="white" />
            </View>
          </Marker>
        ))}
      </MapView>
      <BottomSheet index={1} ref={bottomSheetRef} snapPoints={snapPoints}>
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              letterSpacing: 0.5,
              paddingBottom: 5,
            }}
          >
            You're Online
          </Text>
          <Text
            style={{
              letterSpacing: 0.5,
            }}
          >
            Available Orders: {orders.length}
          </Text>
        </View>
        <FlatList
          data={orders}
          renderItem={({ item }) => <OrderItem order={item} />}
        />
      </BottomSheet>
    </View>
  );
};

export default OrdersScreen;
