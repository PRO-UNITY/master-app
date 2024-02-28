import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { useNavigation } from "expo-router";

const Welcome = () => {
  const navigation = useNavigation<any>();
  setTimeout(() => {
    navigation.navigate("auth/Register");
  }, 5000);
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/2560px-Meta-Logo.png",
        }}
      />
    </View>
  );
};

export default Welcome;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 350,
    height: 150,
    objectFit: "contain",
  },
});
