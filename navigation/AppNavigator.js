import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from '../screens/ChatScreen';
import ShoppingListScreen from '../screens/ShoppingListScreen';
import ThirdScreen from '../screens/ThirdScreen';
import ForthScreen from '../screens/ForthScreen';
import LoginScreen from '../screens/LoginScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function AppTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="List" component={ShoppingListScreen} />
      <Tab.Screen name="Third" component={ThirdScreen} />
      <Tab.Screen name="Settings" component={ForthScreen} />
    </Tab.Navigator>    
  );
}


function LoginStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainApp" component={AppTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

// ================= under construction =================
// function ChatStack() {}
// function ListStack() {}
// function ThirdStack() {}
// function Forthtack() {}



export default LoginStack;