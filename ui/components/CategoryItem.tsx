import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

const CategoryItem = () => {
  const navigation = useNavigation();
  const navigateTo = () => navigation.navigate("CategoryDetails/CategoryDetails");
  
  return (
    <Pressable onPress={navigateTo} style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://mremo.moscow/site/images/man_first.png",
        }}
      />
      <View>
        <Text style={styles.title}>Master Repair</Text>
        <Text style={styles.subtitle}>71 0000 specialist</Text>
      </View>
    </Pressable>
  );
};

export default CategoryItem;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#e8e8e8",
    paddingVertical: 8,
  },
  logo: {
    width: 100,
    height: 80,
    objectFit: "contain",
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 16,
    color: "#b5b5b5",
  },
});
