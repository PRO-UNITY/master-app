import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { AppointmentItems, CustomHeader } from "@/components";

const Appoinments = () => {
  return (
    <View style={styles.container}>
      <CustomHeader title="Appoinments" />
      <View style={styles.content}>
        <FlatList data={[0]} renderItem={(item) => <AppointmentItems />} />
      </View>
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
