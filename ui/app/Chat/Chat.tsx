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
    TextInput,
    View,
} from "react-native";

const Chat = () => {
    const navigation = useNavigation<any>();
    const navigateTo = () => navigation.navigate("Chat/Chat");

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons
                    name="chevron-back-outline"
                    size={25}
                    color={"white"}
                />
                <Text
                    style={{ color: "white", fontSize: 24, fontWeight: "500" }}
                >
                    John
                </Text>
                <Image
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                    }}
                    source={{
                        uri: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1466",
                    }}
                />
            </View>
            <View style={styles.content}>
                <ScrollView>
                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                    <View style={styles.myMessage}><Text>salom</Text></View>
                    </View>
                    <View style={styles.incomingMessage}><Text>salom</Text></View>
                </ScrollView>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap:10,

                    }}
                >
                    <TextInput style={styles.input} />
                    <Pressable style={styles.sendBtn}>
                        <Ionicons name="send-outline" color={'white'} size={20}/>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default Chat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light.primary,
    },
    content: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        paddingHorizontal: 16,
        paddingVertical: 30,
    },
    header: {
        height: 120,
        backgroundColor: Colors.light.primary,
        paddingTop: 40,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        width: "80%",
        height: 40,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
        paddingHorizontal:10
    },
    sendBtn: {
        backgroundColor: Colors.light.primary,
        height:40,
        paddingHorizontal:20,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    myMessage:{
        backgroundColor:Colors.light.primary
    }
});
