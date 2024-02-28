import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { TabItems } from "@/mocks/data";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
  size?: number;
}) {
  return (
    <Ionicons size={props.size || 28} style={{ marginBottom: -3 }} {...props} />
  );
}
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.primary,
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      {TabItems.map((item, i) => (
        <Tabs.Screen
          key={i}
          name={item.name}
          options={{
            title: item.title,
            tabBarIcon: ({ color }) => (
              <TabBarIcon name={item.icon} color={color} />
            ),
            headerShown: item.headerShown,
          }}
        />
      ))}
    </Tabs>
  );
}
