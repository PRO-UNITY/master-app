import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const CategoryItem = () => {
  const navigation = useNavigation<any>();
  const navigateTo = () =>
    navigation.navigate("CategoryDetails/CategoryDetails");

  return (
    <Pressable onPress={navigateTo} style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://mremo.moscow/site/images/man_first.png",
        }}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Master Repair</Text>
        <Text style={styles.subtitle}>71 0000 specialist</Text>
      </View>
      <Pressable style={styles.button}>
        <Ionicons name="chevron-forward-outline" color={"#fff"} size={20} />
      </Pressable>
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
    fontSize: 20,
    color: Colors.light.primary,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 15,
    color: "#b5b5b5",
  },
  button: {
    padding: 8,
    backgroundColor: Colors.light.primary,
    borderRadius: 10,
  },
});
