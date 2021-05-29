import React from "react";
import { StyleSheet, Text, TouchableHighlight} from "react-native";

export default function TodoList({ el, deleteTodo }) {
  return (
    <TouchableHighlight onPress={() => deleteTodo(el.key)}>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: "#eeee",
    padding: 8,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: "10%",
    width: "80%",
    shadowColor: "blue",
    shadowOffset: { width: -4.0, height: 6.0 },
    shadowRadius: 10,
    shadowOpacity: 0.4,
  },
});
