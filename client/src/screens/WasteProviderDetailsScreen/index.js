import { View, FlatList, ActivityIndicator } from "react-native";
import WasteListItem from "../../components/WasteListItem";
import Header from "./Header";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import { WasteProvider, Service } from "../../models";

const WasteProviderDetailsPage = () => {
  const [wasteprovider, setWasteProvider] = useState(null);
  const [services, setServices] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  const id = route.params?.id;

  useEffect(() => {
    DataStore.query(WasteProvider, id).then(setWasteProvider);

    DataStore.query(Service, (service) => service.wasteproviderID.eq(id)).then(
      setServices
    );
  }, []);

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
    </View>
  );
};

export default WasteProviderDetailsPage;
