import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import WasteProviderItem from "./src/components/WasteProviderItem";
import restaurants from "./assets/data/restaurants.json";
import HomeScreen from "./src/screens/HomeScreen";
import WasteProviderDetailsPage from "./src/screens/WasteProviderDetailsScreen";
import WasteDetailsScreen from "./src/screens/WasteDetailsScreen";
import Basket from "./src/screens/Basket";
import OrderScreen from "./src/screens/OrdersScreen";
import OrderDetails from "./src/screens/OrderDetails";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
