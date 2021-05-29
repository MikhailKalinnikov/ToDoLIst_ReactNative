import React, { useCallback, useRef, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import FormInput from "./Components/FormInput";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";

export default function App() {
  const [todoList, setTodoList] = useState([
    { text: "Купить", key: "1" },
    { text: "Продать", key: "2" },
    { text: "Помыть", key: "3" },
    { text: "Поменять", key: "4" },
    { text: "Отдать", key: "5" },
  ]);
  const inputRef = useRef();

  const clearText = useCallback(() => {
    inputRef.current.setNativeProps({ text: "" });
  }, []);

  const handleAddNewTodo = (text) => {
    clearText();
    setTodoList((list) => {
      if (text !== "") {
        return [
          { text: text, key: Math.random().toString(36).substring(5) },
          ...list,
        ];
      }
      return [...list];
    });
  };
  const deleteTodo = (key) => {
    setTodoList((list) => {
      return list.filter((listItem) => listItem.key !== key);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <FormInput handleAddNewTodo={handleAddNewTodo} inputRef={inputRef} />
      <View>
        <FlatList
          data={todoList}
          renderItem={({ item }) => (
            <TodoList el={item} deleteTodo={deleteTodo} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
