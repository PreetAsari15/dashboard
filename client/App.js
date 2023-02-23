import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation";
import AuthContextProvider from "./src/contexts/AuthContext";
import BasketContextProvider from "./src/contexts/BasketContext";
// higher order component "withAuthenticator"
import { withAuthenticator } from "aws-amplify-react-native";
import { Amplify } from "aws-amplify";
import config from "./src/aws-exports";

Amplify.configure({ ...config, Analytics: { disabled: true } });

function App() {
  LogBox.ignoreLogs(["Remote debugger"]);
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <BasketContextProvider>
          <RootNavigator />
        </BasketContextProvider>
      </AuthContextProvider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default withAuthenticator(App);
