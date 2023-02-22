import { StyleSheet, FlatList, View } from "react-native";
import WasteProviderItem from "../../components/WasteProviderItem";
import { useState, useEffect } from "react";
import { DataStore } from "aws-amplify";
import { WasteProvider } from "../../models";

const HomeScreen = () => {
  // Fetch WasteProviders using state var
  const [wasteproviders, setWasteProviders] = useState([]);

  useEffect(() => {
    // const results = await DataStore.query(WasteProvider);
    // setWasteProviders(results);

    // using .then function instead of await as await cannot be used in the useEffect hook
    DataStore.query(WasteProvider).then((results) =>
      setWasteProviders(results)
    );
  }, []);

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
