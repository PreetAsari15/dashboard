import { StyleSheet, FlatList, View } from "react-native";
import WasteProviderItem from "../../components/WasteProviderItem";
import { useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import { WasteProvider } from "../../models";

const HomeScreen = () => {
  // Fetch WasteProviders using state var
  const [wasteproviders, setWasteProviders] = useState([]);

  const fetchWasteProviders = async () => {
    const results = await DataStore.query(WasteProvider);
    console.log(results);
  };

  useEffect(() => {}, []);

  return (
    <View style={styles.page}>
      <FlatList
        data={wasteproviders}
        renderItem={({ item }) => <WasteProviderItem wasteprovider={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default HomeScreen;
