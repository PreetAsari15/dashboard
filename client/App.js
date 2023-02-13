import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import WasteProviderItem from "./src/components/WasteProviderItem";
import restaurants from "./assets/data/restaurants.json";
import HomeScreen from "./src/screens/HomeScreen";
import WasteProviderDetailsPage from "./src/screens/WasteProviderDetailsScreen";
import WasteDetailsScreen from "./src/screens/WasteDetailsScreen";
import Basket from "./src/screens/Basket";

export default function App() {
  return (
    <View style={styles.container}>
      {/* WasteProvider item */}

      {/* <HomeScreen /> */}
      {/* <WasteProviderDetailsPage /> */}
      {/* <WasteDetailsScreen /> */}
      <Basket />

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
    // padding: 10,
    // paddingVertical: 30, //temp fix for ios screen display
  },
});
