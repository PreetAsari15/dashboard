import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import wasteproviders from "../../../assets/data/restaurants.json";
import WasteItem from "../../components/WasteListItem";
import { Ionicons } from "@expo/vector-icons";

const wasteprovider = wasteproviders[0];
const WasteProviderDetailsPage = () => {
  return (
    <View style={styles.page}>
      <Image
        source={{ uri: wasteprovider.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <Ionicons
        name="arrow-back-circle"
        size={40}
        color="black"
        style={styles.iconContainer}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{wasteprovider.name}</Text>
        <Text style={styles.subtitle}>
          $ {wasteprovider.deliveryFee} ​&#8226; {wasteprovider.minDeliveryTime}
          -{wasteprovider.maxDeliveryTime} minutes
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 35,
    fontWeight: 650,
    marginVertical: 10,
  },
  subtitle: {
    color: "#525252",
    fontSize: 15,
    // margin: 10,
    // fontWeight: 650,
  },
  container: {
    margin: 10,
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 10,
  },
});

export default WasteProviderDetailsPage;
