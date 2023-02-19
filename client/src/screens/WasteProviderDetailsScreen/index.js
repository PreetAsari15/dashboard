import { View, FlatList } from "react-native";
import wasteproviders from "../../../assets/data/restaurants.json";
import WasteListItem from "../../components/WasteListItem";
import Header from "./Header";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { useRoute } from "@react-navigation/native";

const wasteprovider = wasteproviders[0];
const WasteProviderDetailsPage = () => {
  const route = useRoute();
  const id = route.params?.id;
  console.warn(id);

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header wasteprovider={wasteprovider} />}
        data={wasteprovider.wasteMaterials}
        renderItem={({ item }) => (
          <WasteListItem
            wasteprovider={item}
            keyExtractor={(item) => item.name}
          />
        )}
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
