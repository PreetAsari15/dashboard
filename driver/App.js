import { StatusBar } from "expo-status-bar";
import { StyleSheet, FlatList, View } from "react-native";
import orders from "./assets/data/orders.json";
import OrderItem from "./src/component/OrderItem";
// import OrdersScreen from "./src/screens/OrdersScreen";
import OrdersDeliver from "./src/screens/OrderDelivery";

export default function App() {
  return (
    <View style={styles.container}>
      <OrdersDeliver />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingTop: 50,
  },
});
