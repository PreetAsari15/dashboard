import { View, Text, StyleSheet, FlatList } from "react-native";

const BasketWasteItem = ({ basketWaste }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>

      <Text style={{ fontWeight: "600" }}>{basketWaste.name}</Text>
      <Text style={styles.price}>${basketWaste.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  price: {
    marginLeft: "auto",
  },
  quantityContainer: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
});

export default BasketWasteItem;
