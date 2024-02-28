import Colors from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
interface HeaderProp {
  title: string;
  backBtn?: boolean;
}
const CustomHeader: React.FC<HeaderProp> = ({ title, backBtn }) => {
  const naviagtion = useNavigation();

  const goBack = () => naviagtion.goBack();
  return (
    <View style={styles.header}>
      <Text style={{ fontSize: 24, color: "white" }}>{title}</Text>
      {backBtn && (
        <Pressable style={styles.back} onPress={goBack}>
          <Ionicons name="chevron-back-outline" size={26} color={"white"} />
        </Pressable>
      )}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    position: "relative",
    height: 120,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  back: {
    position: "absolute",
    top: 65,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
