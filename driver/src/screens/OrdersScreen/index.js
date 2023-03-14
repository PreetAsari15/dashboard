import { useRef, useMemo } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import orders from "../../../assets/data/orders.json";
import OrderItem from "../../component/OrderItem";
import MapView from "react-native-maps";
const OrdersScreen = () => {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["12%", "95%"], []);
  return (
    <View style={{ backgroundColor: "lightblue", flex: 1 }}>
      <MapView
        style={{
          height: Dimensions.get("window").height,
          width: Dimensions.get("window").width,
        }}
      />
      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
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
