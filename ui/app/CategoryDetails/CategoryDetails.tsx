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

const CategoryDetails = () => {
  const navigation = useNavigation<any>();
  const navigateTo = () => {
    navigation.navigate("CategoryDetails/UserDetail");
  };

  return (
    <View style={styles.container}>
      <CustomHeader title={"Users by category"} backBtn />
      <View style={styles.content}>
        <ScrollView style={styles.users}>
          <Pressable onPress={navigateTo} style={styles.item}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
              }}
              source={{
                uri: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1466",
              }}
            />
            <View
              style={{
                flexDirection: "column",
                gap: 10,
                justifyContent: "space-between",
              }}
            >
              <Text>John Doe</Text>
              <Text style={{ fontSize: 20 }}>Evro Remont usto</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Ionicons name="star-outline" color={"orange"} size={16} />
                  <Text>4.5</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Ionicons
                    name="chatbox-ellipses-outline"
                    color={"gray"}
                    size={16}
                  />
                  <Text>Comments</Text>
                </View>
              </View>
            </View>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
};

export default CategoryDetails;

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
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingVertical: 10,
  },
});
