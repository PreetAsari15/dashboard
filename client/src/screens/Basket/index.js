import { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import wasteproviders from "../../../assets/data/restaurants.json";
import { AntDesign } from "@expo/vector-icons";

const wasteprovider = wasteproviders[0];
const quantity = 0;
const BasketWasteMateialItem = ({ basketWasteMaterial }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>

      <Text style={{ fontWeight: "600" }}>{basketWasteMaterial.name}</Text>
      <Text style={styles.price}>${basketWasteMaterial.price}</Text>
    </View>
  );
};
const Basket = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{wasteprovider.name}</Text>
      <Text style={{ fontWeight: "bold", fontSize: 19 }}> Your items </Text>
      <View style={styles.separator} />

      <FlatList
        data={wasteprovider.wasteMaterials}
        renderItem={({ item }) => (
          <BasketWasteMateialItem basketWasteMaterial={item} />
        )}
      />

      <View style={styles.separator} />

      <View style={styles.button}>
        <Text style={styles.buttonText}>Create Order</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40, //temp
    padding: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    color: "#696969",
  },
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
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  quantity: {
    fontSize: 25,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
});

export default Basket;
