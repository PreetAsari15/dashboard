import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import WasteProviderDetailsPage from "../screens/WasteProviderDetailsScreen";
import WasteDetailsScreen from "../screens/WasteDetailsScreen";
import Basket from "../screens/Basket";
import OrderScreen from "../screens/OrdersScreen";
import OrderDetails from "../screens/OrderDetails";
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeTabs} />
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "white" }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="list-alt" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={OrderScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="WasteProviders" component={HomeScreen} />
      <HomeStack.Screen
        name="WasteProvider"
        component={WasteProviderDetailsPage}
      />
      <HomeStack.Screen name="WasteMaterial" component={WasteDetailsScreen} />
      <HomeStack.Screen name="Basket" component={Basket} />
    </HomeStack.Navigator>
  );
};

// export default HomeTabs;
export default RootNavigator;
