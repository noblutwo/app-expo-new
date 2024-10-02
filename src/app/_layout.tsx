import { useEffect } from "react";
import { Slot, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar, View, Platform } from "react-native";
import * as Updates from "expo-updates";
import { fontConfig } from "@/assets/fonts/font";
import { useStyles } from "@/styles/styles";
import { imageSources } from "@/components/Images/ImgReq";
import BackgroundImage from "@/components/Images/BackgroundImage";
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout() {
  const [loaded] = useFonts(fontConfig);
  const styles = useStyles();

  async function checkForUpdates() {
    if (!__DEV__) {
      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
        }
      } catch (error) {
        console.error("Lỗi khi kiểm tra cập nhật:", error);
      }
    }
  }

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      checkForUpdates();
    }
  }, [loaded]);

  // Cấu hình StatusBar
  const statusBarConfig = {
    translucent: true,
    backgroundColor: "transparent",
    barStyle: "light-content" as "light-content" | "dark-content" | "default",
  };

  if (!loaded) {
    return (
      <View style={[styles.containerLyout, { backgroundColor: "#79797e" }]}>
        <StatusBar {...statusBarConfig} />
        <BackgroundImage source={imageSources["bg_pick"]} />
      </View>
    );
  }

  return (
    <AuthProvider>
      <SafeAreaProvider>
        <View style={styles.containerLyout}>
          <StatusBar {...statusBarConfig} />
          <View style={styles.contentLayout}>
            <Slot />
          </View>
        </View>
      </SafeAreaProvider>
    </AuthProvider>
  );
}