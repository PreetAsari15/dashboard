import { View, Text, Image, FlatList } from "react-native";
import BasketWasteItem from "../../components/BasketWasteItem";
import wasteproviders from "../../../assets/data/restaurants.json";
import orders from "../../../assets/data/orders.json";
import styles from "./styles";
import React from "react";

const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={styles.page}>
        <Image
          source={{ uri: order.WasteProvider.image }}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.container}>
          <Text style={styles.title}>{order.WasteProvider.name}</Text>
          <Text style={styles.subtitle}>
            {order.status} ​&#8226; 3 days ago
          </Text>

          <Text style={styles.menuTitle}>Your Orders</Text>
        </View>
      </View>
    </View>
  );
};

const OrderDetails = () => {
  return (
    <FlatList
      ListHeaderComponent={OrderDetailsHeader}
      data={wasteproviders[0].wasteMaterials}
      renderItem={({ item }) => <BasketWasteItem basketWaste={item} />}
    />
  );
};

export default OrderDetails;
