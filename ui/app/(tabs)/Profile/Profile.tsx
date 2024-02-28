import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const UserProfile: React.FC<any> = () => {
  const [userProfile, setUserProfile] = useState<any>([]);
  const [loading, setloading] = useState<boolean>(false);
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
      }}
    >
      <View style={styles.container}>
        <Ionicons
          name="person-circle"
          color={Colors.light.primary}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.label}>Username:</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={userProfile?.username}
          />
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={userProfile?.email}
          />
          <Text style={styles.label}>First name:</Text>
          <TextInput
            style={styles.input}
            placeholder="First name"
            value={userProfile?.first_name}
          />
          <Text style={styles.label}>Last name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Last name"
            value={userProfile?.last_name}
          />
        </View>
      </View>
      <Pressable style={styles.saveBtn}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.saveBtnText}>Save</Text>
        )}
      </Pressable>
      <Pressable style={styles.logOutBtn}>
        <Text style={styles.btnText}>Log out</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  avatar: {
    fontSize: 80,
    marginTop: 30,
  },
  userInfo: {
    marginTop: 20,
    width: "100%",
    borderTopWidth: 1,
    borderColor: "#e5e5e5",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 16,
    color: Colors.light.primary,
  },
  input: {
    padding: 15,
    height: 54,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.light.primary,
  },
  saveBtn: {
    height: 55,
    justifyContent: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.light.primary,
    marginTop: 50,
  },
  saveBtnText: {
    textAlign: "center",
    color: Colors.light.primary,
    fontSize: 18,
    fontWeight: "500",
  },
  logOutBtn: {
    backgroundColor: Colors.light.primary,
    height: 55,
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 10,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
  },
});

export default UserProfile;
