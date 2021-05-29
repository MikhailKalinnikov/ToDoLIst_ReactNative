import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

export default function FormInput({  handleAddNewTodo, inputRef }) {
  const [text, setText] = useState("");

  const handleChange = (text) => {
    setText(text);
  };
  return (
    <View>
      <TextInput
        multiline
        ref={inputRef}
        style={styles.input}
        placeholder="если есть задачи, заполните поле......"
        onChangeText={handleChange}
      />
      <Button
        color="blue"
        onPress={() => handleAddNewTodo(text)}
        title="сохранить задачу"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    padding: 10,
    width: "80%",
    marginHorizontal: "10%",
    marginVertical: 20,
  },
});
