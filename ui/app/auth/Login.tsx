import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { Link, useNavigation } from "expo-router";
import Colors from "@/constants/Colors";

const Login = () => {
    const navigation = useNavigation();
    const navigate = () => {
        navigation.navigate("(tabs)");
    };
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: "#ffffff" }}>
                <View
                    style={{
                        backgroundColor: Colors.light.primary,
                        paddingHorizontal: 50,
                        paddingVertical: 100,
                        borderBottomLeftRadius: 60,
                    }}
                >
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    ></View>

                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: "500",
                                fontSize: 38,
                                color: "white",
                            }}
                        >
                            Register
                        </Text>
                    </View>
                </View>
            </View>

            <View style={{ backgroundColor: Colors.light.primary }}>
                <View
                    style={{
                        justifyContent: "center",
                        backgroundColor: "#fff",
                        paddingHorizontal: 30,
                        borderTopRightRadius: 60,
                    }}
                >
                    <View style={styles.spacing_big}></View>

                    <View style={styles.label}>
                        <Text style={styles.label}>Username</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <View style={styles.spacing}></View>

                    <View style={styles.label}>
                        <Text style={styles.label}>Password</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                    />

                    <View style={styles.spacing}></View>

                    <Link
                        href={"/auth/Register"}
                        style={{
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginBottom: 10,
                        }}
                    >
                        <Text style={{ color: Colors.light.primary }}>
                            I have not account! Sign Up
                        </Text>
                    </Link>

                    <TouchableOpacity onPress={navigate}>
                        <View style={styles.saveBtn}>
                            <Text style={styles.saveBtnText}>Login</Text>
                        </View>
                    </TouchableOpacity>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            marginVertical: 40,
                        }}
                    ></View>
                </View>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    spacing: {
        margin: 10,
    },
    spacing_big: {
        margin: 30,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
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
        backgroundColor: Colors.light.primary,
        height: 55,
        justifyContent: "center",
        borderRadius: 15,
        marginTop: 10,
    },
    saveBtnText: {
        textAlign: "center",
        color: "#fff",
        fontSize: 18,
    },
});
