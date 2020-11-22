import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList} from "react-native";
import Header from "./Components/header";
import TodoItem from "./Components/todoitem";
import AddTodo from "./Components/addTodo"

export default function App() {
  const [todos, setTodos] = useState([
  { text: 'make coffee', key: '1'},
  { text: 'create an app', key: '2'},
  { text: 'listen to music', key: '3'}
  ]);

const pressHandler = (key) => {
  setTodos((prevTodos) => {
    return prevTodos.filter(todo => todo.key != key);
  })
}

const submitHandler = (text) => {
  setTodos((prevTodos) => {
return [
  {text: text, key: Math.random().toString() },
  ...prevTodos
]
  })
}
    return (

        <View style={styles.container}>
        <Header />
           <View style={styles.content}>
            <AddTodo submitHandler={submitHandler}/>
            <View style={styles.list}>
              <FlatList 
              data={todos}
              renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
              )}
              />
            </View>
               </View>
              </View>
    );
  }

 
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  content: {
    padding: 40,
  },
  list : {
    marginTop: 20,
  } 
});
 