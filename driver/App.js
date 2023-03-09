import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import orders from "./assets/data/orders.json";

const order = orders[0];

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri: order.WasteProvider.image }}
          style={{ width: 50, height: 50 }}
        />
        <Text>{order.WasteProvider.name}</Text>
        <Text>{order.WasteProvider.address}</Text>
        <Text>Delivery Details</Text>

        <Text>{order.User.name}</Text>
        <Text>{order.User.address}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
