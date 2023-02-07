import { StyleSheet, Text, View, Image } from "react-native";

const WasteProviderItem = ({ wasteprovider }) => {
  return (
    <View style={styles.wasteproviderContainer}>
      <Image
        source={{
          uri: wasteprovider.image,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{wasteprovider.name}</Text>
      <Text style={styles.subtitle}>
        $ ${wasteprovider.deliveryFee} ​&#8226; {wasteprovider.minDeliveryTime}-
        {wasteprovider.maxDeliveryTime} minutes
      </Text>
    </View>
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
});