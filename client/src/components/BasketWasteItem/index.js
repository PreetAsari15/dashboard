import { View, Text, StyleSheet, FlatList } from "react-native";

const BasketWasteItem = ({ basketService }) => {
  console.log(basketService);
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>{basketService.quantity}</Text>
      </View>

      <Text style={{ fontWeight: "600" }}>{basketService.Service?.name}</Text>
      <Text style={styles.price}>${basketService.Service?.price}</Text>
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
