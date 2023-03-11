import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
import orders from "../../../assets/data/orders.json";
import wasteproviders from "../../../assets/data/restaurants.json";
import BasketWasteItem from "../../components/BasketWasteItem";
import styles from "./styles";
import React from "react";
import { DataStore } from "aws-amplify";
import { useOrderContext } from "../../contexts/OrderContext";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

const order = orders[0];

const OrderDetailsHeader = ({ order }) => {
  return (
    <View>
      <View style={styles.page}>
        <Image
          source={{ uri: order.WasteProvider.image }}
          style={styles.image}
        />

        <View style={styles.container}>
          <Text style={styles.title}>{order.WasteProvider.name}</Text>
          <Text style={styles.subtitle}>{order.status} ​&#8226; 100 days</Text>

          <Text style={styles.menuTitle}>Your Orders</Text>
        </View>
      </View>
    </View>
  );
};

const OrderDetails = () => {
  const [order, setOrder] = useState();
  const { getOrder } = useOrderContext();
  const route = useRoute();
  const id = route.params?.id;

  useEffect(() => {
    getOrder(id).then(setOrder);
  }, []);

  if (!order) {
    return <ActivityIndicator size={"large"} color="gray" />;
  }

  return (
    <FlatList
      ListHeaderComponent={() => <OrderDetailsHeader order={order} />}
      data={order.services}
      renderItem={({ item }) => <BasketWasteItem basketService={item} />}
    />
  );
};

export default OrderDetails;
