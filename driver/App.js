import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import orders from "./assets/data/orders.json";
import { Entypo } from "@expo/vector-icons";

const order = orders[0];

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          borderColor: "#3FC060",
          borderWidth: 2,
          borderRadius: 10,
          margin: 10,
        }}
      >
        <Image
          source={{ uri: order.WasteProvider.image }}
          style={{
            width: "25%",
            height: "100%",
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
          }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>
            {order.WasteProvider.name}
          </Text>
          <Text style={{ color: "grey" }}>{order.WasteProvider.address}</Text>
          <Text style={{ marginTop: 10 }}>Delivery Details</Text>

          <Text style={{ color: "grey" }}>{order.User.name}</Text>
          <Text style={{ color: "grey" }}>{order.User.address}</Text>
        </View>
        <View
          style={{
            backgroundColor: "#3FC060",
            borderBottomRightRadius: 10,
            borderTopRightRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Entypo
            name="check"
            size={30}
            color="white"
            style={{ marginLeft: "auto" }}
          />
        </View>
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
