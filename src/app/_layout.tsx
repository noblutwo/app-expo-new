import { useEffect } from "react";
import { Slot, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar, View} from "react-native";
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

  if (!loaded) {
    return (
      <View style={[styles.containerLyout]}>
        <BackgroundImage source={imageSources["bg_pick"]} />
      </View>
    );
  }

  return (
    <AuthProvider>
      <SafeAreaProvider>
        <View style={styles.containerLyout}>
        <StatusBar backgroundColor="#757575" barStyle="light-content"/>
          <View style={styles.contentLayout}>
            <Slot />
          </View>
        </View>
      </SafeAreaProvider>
    </AuthProvider>
  );
}