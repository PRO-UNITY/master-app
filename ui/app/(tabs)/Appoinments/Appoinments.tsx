import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const Appoinments = () => {
  return (
    <View style={styles.container}>
      <Text>Appoinments</Text>
      <View style={styles.content}></View>
    </View>
  );
};

export default Appoinments;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.primary,
  },
  content: {
    padding: 20,
    borderTopEndRadius: 28,
    borderTopStartRadius: 28,
    backgroundColor: "#fff",
    flex: 1,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 40,
  },
});
