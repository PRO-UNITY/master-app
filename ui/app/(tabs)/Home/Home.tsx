import React from "react";
import { View, Text, StyleSheet, FlatList, Platform } from "react-native";
import { CategoryItem, HomeHeader } from "@/components";
import { StatusBar } from "expo-status-bar";
import Colors from "@/constants/Colors";

const Home = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
      <View style={styles.content}>
        <Text style={styles.subtitle}>Categories</Text>
        <FlatList data={[0]} renderItem={(item) => <CategoryItem />} />
      </View>
      <StatusBar style={Platform.OS === "ios" ? "light" : "light"} />
    </View>
  );
};

export default Home;
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
