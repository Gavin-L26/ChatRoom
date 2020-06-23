import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal,FlatList, TouchableOpacity} from 'react-native';


const ShoppingListScreen = props =>{
  const [isAddMode, setIsAddMode] = useState(false);
  // const [groceryList, setGroceryList] = useState([]);
  const groceryList = [  
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
    ]
    

  const addGroceryHandler = item => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Grocery Item" onPress={() => setIsAddMode(true)}/>
      <NewItemModal 
        IsAddMode={isAddMode}
        addGroceryHandler={addGroceryHandler}/>
      <FlatList
        keyExtractor={item => item.id}
        data={groceryList} 
        renderItem={ itemData => (
          <GroceryItem title={itemData.item.title} 
          // onDelete={removeGoalHandler.bind(this,itemData.item.id)}
          />
        )}
      />      
    </View>)
}


const GroceryItem = props => {
  return (
    <TouchableOpacity>
      <View style={styles.groceryItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>


  )
}

const NewItemModal = props => {

  return(
    <Modal visible={props.IsAddMode} animationType={"slide"} presentationStyle={"pageSheet"} >
      <View style={styles.screen}>
        <Text>This is a add screen</Text>
        <Button title="ok" onPress={props.addGroceryHandler}/>
      </View>
    </Modal>
  )
}



const styles = StyleSheet.create({
  screen: {
    flex:1,
    margin:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  groceryItem: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },


});

export default ShoppingListScreen;