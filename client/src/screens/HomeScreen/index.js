import { StyleSheet, FlatList, View } from "react-native";
import WasteProviderItem from "../../components/WasteProviderItem";
import wasteproviders from "../../../assets/data/restaurants.json";

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={wasteproviders}
        renderItem={({ item }) => <WasteProviderItem wasteprovider={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default HomeScreen;
