import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DEFAULT_IMAGE =
  "https://transpower.ca/wp-content/themes/consultix/images/no-image-found-360x250.png";

const WasteProviderItem = ({ wasteprovider }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("WasteProvider", { id: wasteprovider.id });
  };

  return (
    <Pressable onPress={onPress} style={styles.wasteproviderContainer}>
      <Image
        source={{
          uri: wasteprovider.image.startsWith("http")
            ? wasteprovider.image
            : DEFAULT_IMAGE,
        }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{wasteprovider.name}</Text>
          <Text style={styles.subtitle}>
            $ {wasteprovider.deliveryFee.toFixed(1)} ​&#8226;{" "}
            {wasteprovider.minDeliveryTime}-{wasteprovider.maxDeliveryTime}{" "}
            minutes
          </Text>
        </View>
        <View style={styles.rating}>
          <Text style={styles.title}>{wasteprovider.rating.toFixed(1)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default WasteProviderItem;

const styles = StyleSheet.create({
  wasteproviderContainer: {
    width: "100%",
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
    marginTop: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 5,
  },
  subtitle: {
    color: "grey",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    marginLeft: "auto",
    backgroundColor: "lightgray",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
