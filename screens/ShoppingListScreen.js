import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal,FlatList, TouchableOpacity, TextInput} from 'react-native';



const ShoppingListScreen = props =>{
  const data = [  
    {
      id: 'G1',
      title: 'Apple',
    },
    {
      id: 'G2',
      title: 'Banana',
    },
    {
      id: 'G3',
      title: 'Candy',
    },
  ]
  const [isAddMode, setIsAddMode] = useState(false);
  const [groceryList, setGroceryList] = useState(data); 
    

  const addGroceryHandler = item => {

    setGroceryList(currentList => [...currentList,{ 
      id: Math.random().toString(), title: item 
    }]);

    setIsAddMode(false);
  }
  const cancelGroceryHandler = () => {
    setIsAddMode(false);
  }

  const deleteGroceryHandler = targetId => {
    const updatedList = groceryList.filter(item => item.id != targetId );
    setGroceryList(updatedList);
  }


  return (
    <View style={styles.screen}>
      <Button title="Add New Grocery Item" onPress={() => setIsAddMode(true)}/>
      <NewItemModal 
        IsAddMode={isAddMode}
        addGroceryHandler={addGroceryHandler}
        cancelGroceryHandler={cancelGroceryHandler}/>
      <FlatList
        keyExtractor={item => item.id}
        data={groceryList} 
        renderItem={ itemData => (
          <GroceryItem info={itemData.item} 
            onDelete={deleteGroceryHandler.bind(this,itemData.item.id)}
          />
        )}
      />      
    </View>)
}


const GroceryItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete }>
      <View style={styles.groceryItem}>
        <Text>{props.info.title}</Text>
      </View>
    </TouchableOpacity>


  )
}

const NewItemModal = props => {
  const [enteredGrocery, setEnteredGrocery] = React.useState('');
  const addGrocery = groceryName => {
    // check null
    if (groceryName.length === 0) {return;};
    // pass to handler
    props.addGroceryHandler(groceryName);
    // reset textinput placeholder
    setEnteredGrocery('');
  }

  return(
    <Modal visible={props.IsAddMode} animationType={"slide"} presentationStyle={"pageSheet"} >
      <View style={styles.screen}>
        <Text>Add a new grocery item</Text>
        
        <TextInput
          style={styles.modalInput} 
          onChangeText={text => setEnteredGrocery(text)} 
          value={enteredGrocery}/>
        <View style={styles.modalButtonContainer}>
          <Button title="OK" onPress={() => addGrocery(enteredGrocery)}/>
          <Button title="Cancel" color="red" onPress={props.cancelGroceryHandler}/>
        </View>
      </View>
    </Modal>
  )
}



const styles = StyleSheet.create({

  screen: {
    flex:1,
    backgroundColor:'#FFF0F5',
    justifyContent:"center",
    alignItems:"center"
  },
  groceryItem: {
    flexDirection:'row',
    backgroundColor: '#FFB6C1',
    borderColor: 'black',
    borderWidth: 1,
    padding: 15,
    alignSelf: "center",
    marginVertical: 8,
    width:300,
  },
  modalButtonContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    width: '60%'
  },
  modalInputContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalInput:{
    fontSize:18,
    marginVertical:20,
    width: '70%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },



});

export default ShoppingListScreen;