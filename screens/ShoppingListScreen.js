import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


const ShoppingListScreen = props =>{

  return (
    <View style={styles.screen}>
      <Text> ~~ This is a ShoppingListScreen ~~ </Text>
    </View>)
}


const styles = StyleSheet.create({
  screen: {
    flex:1,
    margin:10,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default ShoppingListScreen;