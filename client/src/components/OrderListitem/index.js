import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const OrderListItem = ({ order }) => {
  return (
    <View style={{ flexDirection: "row", margin: 10, alignItems: "center" }}>
      <Image
        source={{ uri: order.WasteProvider.image }}
        style={{ width: 100, height: 100, marginRight: 5 }}
      />
      <View>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>
          {order.WasteProvider.name}
        </Text>
        <Text style={{ marginVertical: 5 }}>3 items &#8226; $38.34</Text>
        <Text>4 days ago &#8226; {order.status}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
});
export default OrderListItem;
