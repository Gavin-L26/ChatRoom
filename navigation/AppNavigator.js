import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from '../screens/ChatScreen';
import ShoppingListScreen from '../screens/ShoppingListScreen';
import ThirdScreen from '../screens/ThirdScreen';
import ForthScreen from '../screens/ForthScreen';



const Tab = createBottomTabNavigator();


function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="List" component={ShoppingListScreen} />
        <Tab.Screen name="Third" component={ThirdScreen} />
        <Tab.Screen name="Settings" component={ForthScreen} />
      </Tab.Navigator>    
  </NavigationContainer>
  );
}

// const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Notifications" component={Notifications} />
//         <Stack.Screen name="Profile" component={Profile} />
//         <Stack.Screen name="Settings" component={Settings} />
//       </Stack.Navigator>
//     </NavigationContainer>

//   );
// }

export default TabNavigator;