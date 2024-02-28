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


const Register = () => {
    const navigation = useNavigation();
    const navigate = () => {
        navigation.navigate("auth/Login");
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
                        <Text style={styles.label}>Email</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
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
                    <View style={styles.label}>
                        <Text style={styles.label}>Confirm password</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                    />

                    <View style={styles.spacing}></View>
                    <Link
                        href={"auth/Login"}
                        style={{
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginBottom: 10,
                        }}
                    >
                        <Text style={{ color: Colors.light.primary }}>
                            I have account! Sign in
                        </Text>
                    </Link>

                    <TouchableOpacity onPress={navigate}>
                        <View
                            style={{
                                margin: 10,
                                backgroundColor: Colors.light.primary,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 100,
                                paddingVertical: 10,
                            }}
                            href={"auth/Login"}
                        >
                            <Text
                                style={{
                                    color: "white",
                                    fontSize: 20,
                                }}
                            >
                                Register
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            marginVertical: 40,
                        }}
                    >
                        <View style={styles.imagecontainer}></View>

                        <View style={styles.imagecontainer}></View>

                        <View style={styles.imagecontainer}></View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Register;

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
        fontWeight: "300",
        paddingLeft: 5,
        fontSize: 17,
        color: "#999",
    },
    input: {
        height: 40,
        margin: 5,
        borderRadius: 100,
        backgroundColor: "#e7e7e7",
        padding: 10,
    },
    imagecontainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    image_logo: {
        width: 200,
        height: 200,
        resizeMode: "contain",
    },
    card: {
        backgroundColor: "red",
        padding: 10,
        margin: 10,
        borderRadius: 7,
        elevation: 5,
        marginTop: 100,
        flex: 1,
    },
});
