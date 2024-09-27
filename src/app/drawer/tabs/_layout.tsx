import { Tabs } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
} from "react-native";
import { Colors, FontSize } from "@/constants/Colors";
import AppImage from "@/components/Images/ImgReq";

type TabName = "index" | "usewallet" | "camera" | "notification" | "settings";

type TabConfig = {
  [key in TabName]: {
    label: string;
    icon: {
      active: string;
      inactive: string;
    };
  };
};

const tabConfig: TabConfig = {
  index: {
    label: "Trang chủ",
    icon: { active: "iconHomeActive", inactive: "iconHomeInActive" },
  },
  usewallet: {
    label: "Ví giấy tờ",
    icon: { active: "iconWalletActive", inactive: "iconWalletInActive" },
  },
  camera: { label: "", icon: { active: "iconCamera", inactive: "iconCamera" } },
  notification: {
    label: "Thông báo",
    icon: { active: "noti_unread_active", inactive: "noti_unread_inactive" },
  },
  settings: {
    label: "Cài đặt",
    icon: { active: "setting_active", inactive: "setting_inactive" },
  },
};

export default function TabPage() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {  height: 70, position: "absolute" },
        tabBarIcon: ({ focused }) => {
          const tabName = route.name as TabName;
          return (
            <AppImage
              source={tabConfig[tabName]?.icon[focused ? "active" : "inactive"]}
              style={[ tabConfig[tabName].label === "" ? { width: 50, padding:4, height: 50, marginTop:20,backgroundColor:'#D81C24', borderRadius: 20 } : styles.image]}
              resizeMode="contain"
            />
          );
        },
        tabBarLabel: ({ focused }) => {
          const tabName = route.name as TabName;
          return (
            <Text
              style={[
                tabConfig[tabName]?.label === ""
                  ? styles.tabLabelTitle
                  : styles.tabLabel,
                focused
                  ? { color: Colors.colorTextLogin }
                  : { color: Colors.colorSilver },
              ]}
            >
              {tabConfig[tabName]?.label}
            </Text>
          );
        },
      })}
    >
      {(Object.keys(tabConfig) as TabName[]).map((name) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title: tabConfig[name].label,
          }}
        />
      ))}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: 10,
    width: 25,
    height: 25,
  },
  tabLabel: {
    fontSize: 14,
    // marginTop: 5,
    fontFamily: FontSize.fontFamilyRegular,
  },
  tabLabelTitle: {
    color: "#8c8c8c",
    fontSize: 12,
    fontFamily: FontSize.fontFamilyRegular,
  },
  item: {
    marginLeft: 20,
    marginTop: 5,
    width: 20,
    height: 20,
    marginBottom: 10,
  },
  headerBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
