import { StyleSheet, Text, View, Image } from "react-native";

const WasteProviderItem = () => {
  return (
    <View style={styles.wasteproviderContainer}>
      <Image
        source={{
          uri: "https://www.quantumbooks.com/wp-content/uploads/2018/08/Waste-management.jpeg",
        }}
        style={styles.image}
      />
      <Text style={styles.title}> Think Clean Think Clean </Text>
      <Text style={styles.subtitle}> $25.99 15-30 minutes </Text>
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
