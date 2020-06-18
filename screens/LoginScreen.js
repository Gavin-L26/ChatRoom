import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


const LoginScreen = props =>{

  return (
    <View style={styles.screen}>
      <Text> ~~ This is a Login Screen ~~ </Text>
      <Button 
        title="Tap here to enter the app" 
        onPress={() => props.navigation.navigate('MainApp')}/> 

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

export default LoginScreen;