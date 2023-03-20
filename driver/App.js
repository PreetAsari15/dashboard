import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
import AuthContextProvider from "./src/contexts/AuthContext";
import orders from "./assets/data/orders.json";
import OrderItem from "./src/component/OrderItem";
import OrdersScreen from "./src/screens/OrdersScreen";
import OrderDelivery from "./src/screens/OrderDelivery";

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});

function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </GestureHandlerRootView>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default withAuthenticator(App);
