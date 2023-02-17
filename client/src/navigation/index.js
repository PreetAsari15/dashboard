import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WasteProviderDetailsPage from "../screens/WasteProviderDetailsScreen";
import WasteDetailsScreen from "../screens/WasteDetailsScreen";
import Basket from "../screens/Basket";
import OrderScreen from "../screens/OrdersScreen";
import OrderDetails from "../screens/OrderDetails";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WasteProviderDetailsScreen"
        component={WasteDetailsScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
    </Stack.Navigator>
  );
};

export default RootNavigator;
