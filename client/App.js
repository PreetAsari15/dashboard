import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* WasteProvider item */}
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
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  wasteproviderContainer: {
    width: "100%",
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  subtitle: {
    color: "grey",
  },
});
