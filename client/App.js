import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import WasteProviderItem from "./src/components/WasteProviderItem";

export default function App() {
  return (
    <View style={styles.container}>
      {/* WasteProvider item */}
      <WasteProviderItem />
      <WasteProviderItem />
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
});
