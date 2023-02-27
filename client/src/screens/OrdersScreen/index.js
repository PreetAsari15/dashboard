import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import OrderListItem from "../../components/OrderListItem";
import { useOrderContext } from "../../contexts/OrderContext";

const OrderScreen = () => {
  const { orders } = useOrderContext();

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
      <View>
        <View style={styles.separator} />
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

export default OrderScreen;
