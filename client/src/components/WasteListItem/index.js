import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

// WasteItem == WasteListItem
const WasteItem = ({ wasteMaterial }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("WasteMaterial", { id: wasteMaterial.id })
      }
      style={styles.container}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{wasteMaterial.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {wasteMaterial.description}
        </Text>
        <Text style={styles.price}>${wasteMaterial.price}</Text>
      </View>
      {wasteMaterial.image && (
        <Image source={{ uri: wasteMaterial.image }} style={styles.image} />
      )}
    </Pressable>
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
