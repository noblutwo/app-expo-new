import { Tabs, usePathname, useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import {
  BackHandler,
  StyleSheet,
  Text,
  View
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
  const router = useRouter();
  const pathname = usePathname();
  const tabHistory = useRef<string[]>([]);

  useEffect(() => {
    if (pathname.startsWith('/')) {
      tabHistory.current.push(pathname);
    }

    const handleBackPress = () => {
      if (tabHistory.current.length > 1) {
        tabHistory.current.pop();
        const previousTab = tabHistory.current[tabHistory.current.length - 1];
        router.replace(previousTab);
        return true;
      } else {
        BackHandler.exitApp()
      }
      return false;
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [pathname]);
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {  height: scale(70), position: "absolute"},
        tabBarIcon: ({ focused }) => {
          const tabName = route.name as TabName;
          return (
            <AppImage
              source={tabConfig[tabName]?.icon[focused ? "active" : "inactive"]}
              style={[ tabConfig[tabName]?.label === "" ? { width: scale(50), height: scale(50), marginTop:verticalScale(15),backgroundColor:'#D81C24', borderRadius: 20 } : styles.image]}
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
    marginTop: verticalScale(10),
    width: scale(25),
    height: scale(25),
  },
  tabLabel: {
    fontSize: moderateScale(14),
    fontFamily: FontSize.fontFamilyRegular,
    marginBottom: verticalScale(10),
  },
  tabLabelTitle: {
    color: "#8c8c8c",
    fontSize: 12,
    fontFamily: FontSize.fontFamilyRegular,
  },
  item: {
    marginLeft: scale(20),
    marginTop: verticalScale(5),
    width: scale(20),
    height: scale(20),
    marginBottom: verticalScale(10),
  },
  headerBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});