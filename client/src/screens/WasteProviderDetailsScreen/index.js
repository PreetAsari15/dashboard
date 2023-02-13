import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import wasteproviders from "../../../assets/data/restaurants.json";
import WasteListItem from "../../components/WasteListItem";
import Header from "./Header";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const wasteprovider = wasteproviders[0];
const WasteProviderDetailsPage = () => {
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header wasteprovider={wasteprovider} />}
        data={wasteprovider.wasteMaterials}
        renderItem={({ item }) => <WasteListItem wasteprovider={item} />}
      />
      <Ionicons
        name="arrow-back-circle"
        size={40}
        color="black"
        style={styles.iconContainer}
      />
    </View>
  );
};

export default WasteProviderDetailsPage;
