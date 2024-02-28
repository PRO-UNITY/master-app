import CustomHeader from "@/components/CustomHeader";
import Colors from "@/constants/Colors";
import { Space } from "@/constants/Space";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

const ChatList = () => {
    const navigation = useNavigation<any>();
    const navigateTo = () => navigation.navigate("Chat/Chat");

    return (
        <View style={styles.container}>
            <CustomHeader title={"Messages"} />
            <View style={styles.content}>
                <ScrollView style={styles.users}>
                    <Pressable onPress={navigateTo} style={styles.item}>
                        <View style={{flexDirection:"row",gap:10, alignItems:'center'}}>
                            <Image
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 30,
                                }}
                                source={{
                                    uri: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1466",
                                }}
                            />
                            <View style={styles.about}>
                                <Text
                                    style={{ fontSize: 18, fontWeight: "500" }}
                                >
                                    John Doe
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        fontWeight: "300",
                                        color: "gray",
                                    }}
                                >
                                    Hi can you help me?
                                </Text>
                            </View>
                        </View>
                        <Text>09:08</Text>
                    </Pressable>
                </ScrollView>
            </View>
        </View>
    );
};

export default ChatList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.primary,
    },
    users: {
        flexDirection: "column",
        gap: 10,
    },
    content: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        paddingHorizontal: 16,
        paddingVertical: 30,
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 20,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        paddingVertical: 5,
    },
    about: {
        flexDirection: "column",
        gap: 10,
    },
});
