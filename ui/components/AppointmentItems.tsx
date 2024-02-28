import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const AppointmentItems = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.title}>Master</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Ionicons
            name="mail-unread-outline"
            size={22}
            color={Colors.light.primary}
          />
          <Ionicons
            name="refresh-outline"
            size={22}
            color={Colors.light.primary}
          />
          <Ionicons
            name="close-outline"
            size={25}
            color={Colors.light.primary}
          />
        </View>
      </View>
      <View style={styles.cardContent}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0PDKrErulLlbJkbv5KtsCeICczdgJSyurA&usqp=CAU",
            }}
          />
          <View>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.time}>05/10/2023 -18:00 </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AppointmentItems;
const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.light.primary,
    padding: 15,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#eaeaea",
    paddingBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
    color: Colors.light.primary,
  },
  cardContent: {
    marginVertical: 10,
  },
  avatar: {
    width: 75,
    height: 75,
    objectFit: "cover",
    borderRadius: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
    color: "#606060",
  },
  time: {
    color: "#999999",
  },
});
