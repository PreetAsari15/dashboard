import { StyleSheet, FlatList } from "react-native";
import WasteProviderItem from "../../components/WasteProviderItem";
import restaurants from "../../../assets/data/restaurants.json";

export default function HomeScreen() {
  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <WasteProviderItem wasteprovider={item} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({});
