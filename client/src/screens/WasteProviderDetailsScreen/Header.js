import { View, Text, Image } from "react-native";
import styles from "./styles";

const DEFAULT_IMAGE =
  "https://transpower.ca/wp-content/themes/consultix/images/no-image-found-360x250.png";

const WasteProviderHeader = ({ wasteprovider }) => {
  return (
    <View style={styles.page}>
      <Image
        source={{
          uri: wasteprovider.image.startsWith("http")
            ? wasteprovider.image
            : DEFAULT_IMAGE,
        }}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{wasteprovider.name}</Text>
        <Text style={styles.subtitle}>
          $ {wasteprovider.deliveryFee.toFixed(1)} ​&#8226;
          {wasteprovider.minDeliveryTime}-{wasteprovider.maxDeliveryTime}
          minutes
        </Text>

        <Text style={styles.menuTitle}>Waste Services</Text>
      </View>
    </View>
  );
};

export default WasteProviderHeader;
