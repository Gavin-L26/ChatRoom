import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


const ForthScreen = props =>{

  return (
    <View style={styles.screen}>
      <Text> ~~ This is the ForthScreen ~~ </Text>
      <Text> I am under construction </Text>
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

export default ForthScreen;