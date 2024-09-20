import { router, Tabs } from "expo-router";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Colors, FontSize } from "@/constants/Colors";
import AppImage, { imageSources } from "@/components/Images/ImgReq";

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
        tabBarStyle: { position: "absolute" },
        tabBarIcon: ({ focused }) => {
          const tabName = route.name as TabName;
          return (
            <AppImage
              source={tabConfig[tabName]?.icon[focused ? "active" : "inactive"]}
              style={styles.image}
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
      {/*<Tabs.Screen*/}
      {/*    name="information/residence"*/}
      {/*    options={{*/}
      {/*        href: null,*/}
      {/*        headerTitle: () => <HeaderTitle title="CÂU HỎI THƯỜNG GẶP"/>,*/}

      {/*        // headerTitleAlign: "center",*/}
      {/*        headerTintColor: "#fff",*/}
      {/*        headerLeft: () => (*/}
      {/*            <TouchableOpacity onPress={() => router.push("/drawer/(tabs)/tabHelp/question")}>*/}
      {/*                <AppImage source="setting1" style={styles.item}/>*/}
      {/*            </TouchableOpacity>*/}
      {/*        ),*/}
      {/*        headerBackground: () => (*/}
      {/*            <ImageBackground*/}
      {/*                source={imageSources["setting1"]}*/}
      {/*                style={styles.headerBackground}*/}
      {/*            />*/}
      {/*        ),*/}
      {/*    }}*/}
      {/*/>*/}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: 10,
    width: "100%",
    height: "100%",
  },
  tabLabel: {
    // color: "#8c8c8c",
    fontSize: 10,
    marginTop: 5,
    fontFamily: FontSize.fontFamilyRegular,
  },
  tabLabelTitle: {
    color: "#8c8c8c",
    fontSize: 12,
    // marginTop: 5,
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
