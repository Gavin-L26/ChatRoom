import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';


const ChatScreen = props =>{

  return (
    <View style={styles.screen}>
      <Text> ~~ This is a ChatScreen ~~ </Text>
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

export default ChatScreen;