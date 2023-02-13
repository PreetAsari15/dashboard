import { View, Text, StyleSheet, Image } from "react-native";

const WasteItem = ({ wasteprovider }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{wasteprovider.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {wasteprovider.description}
        </Text>
        <Text style={styles.price}>${wasteprovider.price}</Text>
      </View>
      {wasteprovider.image && (
        <Image source={{ uri: wasteprovider.image }} style={styles.image} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 10,
    paddingBottom: 10,
    borderBottomColor: "lightgray",
    borderBottomWidth: "1",
    flexDirection: "row",
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  description: {
    color: "grey",
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
  },
  image: {
    height: 100,
    aspectRatio: 1,
  },
});

export default WasteItem;
