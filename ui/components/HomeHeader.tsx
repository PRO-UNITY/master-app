import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

const HomeHeader = () => {
  const navigation = useNavigation()
  const navigateTo=()=>navigation.navigate('Chat/ChatList')
  return (
    <View style={styles.container}>
      <Ionicons name="person" size={24} color="#fff" />
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={22} color="#fff" />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#ffffff"
        />
      </View>
      <Ionicons onPress={navigateTo} name="chatbubble-ellipses" size={24} color="#fff" />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 35,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  searchContainer: {
    flex: 1,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    paddingLeft: 10,
  },
});
