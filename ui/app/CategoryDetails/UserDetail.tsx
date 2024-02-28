import CustomHeader from "@/components/CustomHeader";
import Colors from "@/constants/Colors";
import { Space } from "@/constants/Space";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

const CategoryDetails = () => {
    const navigation = useNavigation<any>();

    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 20,
                    marginBottom: 20,
                }}
            >
                <View style={{ width: "35%" }}>
                    <Image
                        style={{ width: 120, height: 120, borderRadius: 60 }}
                        source={{
                            uri: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1466",
                        }}
                    />
                </View>
                <View style={styles.about}>
                    <Text style={{ color: "white" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, iusto?
                    </Text>
                </View>
            </View>
            <Text style={{ fontSize: 30, fontWeight: "600", marginBottom: 10 }}>
                John Doe
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 20 }}>
                Evro remont Usto
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignContent: "center",
                    marginBottom: 20,
                }}
            >
                <View
                    style={{
                        flexDirection: "column",
                        gap: 10,
                        alignItems: "flex-end",
                        borderRightWidth: 1,
                        borderColor: "gray",
                        paddingHorizontal: 20,
                    }}
                >
                    <Ionicons name="star" color={"orange"} size={25} />
                    <Text>Rating 4.5</Text>
                </View>
                <View
                    style={{
                        flexDirection: "column",
                        gap: 10,
                        alignItems: "flex-start",
                        paddingHorizontal: 20,
                    }}
                >
                    <Ionicons
                        name="chatbox-ellipses-outline"
                        color={"gray"}
                        size={25}
                    />
                    <Text>Comments 12</Text>
                </View>
            </View>
            <Text style={{ fontSize: 20, fontWeight: "500", marginBottom: 20 }}>
                Services and Prices
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "500", marginBottom: 20 }}>
                About Me
            </Text>

            <Text style={{ color: "gray" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                consequatur officiis veritatis laudantium. Natus assumenda vel
                labore cumque ex iusto consectetur.
            </Text>
        </View>
    );
};

export default CategoryDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    about: {
        backgroundColor: Colors.light.primary,
        height: 100,
        width: "60%",
        borderRadius: 50,
        borderBottomLeftRadius: 0,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});
