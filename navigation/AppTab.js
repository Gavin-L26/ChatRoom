import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import ShoppingListScreen from "../screens/ShoppingListScreen";
import ThirdScreen from "../screens/ThirdScreen";
import ForthScreen from "../screens/ForthScreen";

const Tab = createBottomTabNavigator();

export default function AppTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="List" component={ShoppingListScreen} />
      <Tab.Screen name="Third" component={ThirdScreen} />
      <Tab.Screen name="Settings" component={ForthScreen} />
    </Tab.Navigator>
  );
}
