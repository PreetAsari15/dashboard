import { View, Text, Image } from "react-native";
import styles from "./styles";

const WasteProviderHeader = ({ wasteprovider }) => {
  return (
    <View style={styles.page}>
      <Image
        source={{ uri: wasteprovider.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.container}>
        <Text style={styles.title}>{wasteprovider.name}</Text>
        <Text style={styles.subtitle}>
          $ {wasteprovider.deliveryFee} ​&#8226; {wasteprovider.minDeliveryTime}
          -{wasteprovider.maxDeliveryTime} minutes
        </Text>

        <Text style={styles.menuTitle}>Waste-Menu</Text>
      </View>
    </View>
  );
};

export default WasteProviderHeader;
