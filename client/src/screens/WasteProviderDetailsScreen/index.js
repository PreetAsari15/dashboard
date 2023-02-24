import {
  View,
  FlatList,
  ActivityIndicator,
  Pressable,
  Text,
} from "react-native";
import WasteListItem from "../../components/WasteListItem";
import Header from "./Header";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import { WasteProvider, Service } from "../../models";
import { useBasketContext } from "../../contexts/BasketContext";

const WasteProviderDetailsPage = () => {
  const [wasteprovider, setWasteProvider] = useState(null);
  const [services, setServices] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  const id = route.params?.id;

  const {
    setWasteProvider: setBasketWasteProvider,
    basket,
    basketServices,
  } = useBasketContext();

  useEffect(() => {
    if (!id) {
      return;
    }
    setBasketWasteProvider(null);

    DataStore.query(WasteProvider, id).then(setWasteProvider);

    DataStore.query(Service, (service) => service.wasteproviderID.eq(id)).then(
      setServices
    );
  }, [id]);

  useEffect(() => {
    setBasketWasteProvider(wasteprovider);
  }, [wasteprovider]);

  if (!wasteprovider) {
    return (
      <ActivityIndicator
        size={"large"}
        style={{ marginTop: 90, padding: 50, color: "grey" }}
      />
    );
  }

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header wasteprovider={wasteprovider} />}
        data={services}
        renderItem={({ item }) => (
          <WasteListItem
            wasteMaterial={item}
            keyExtractor={(item) => item.name}
          />
        )}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={40}
        color="black"
        style={styles.iconContainer}
      />
      {basket && (
        <Pressable
          onPress={() => navigation.navigate("Basket")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Open basket({basketServices.length})
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default WasteProviderDetailsPage;
