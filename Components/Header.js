import React from "react";
import { StyleSheet, Text,  View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    
    backgroundColor: "silver",
    height: 90,
  },
  text: {
    top: 40,
    fontSize: 32,
    color: "red",
    textAlign: 'center'
  },
});
