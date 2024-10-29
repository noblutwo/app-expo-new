import {useEffect} from "react";
import {router, Slot, SplashScreen, usePathname} from "expo-router";
import {useFonts} from "expo-font";
import React from "react";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {AppState, StatusBar, View, StyleSheet} from "react-native";
import * as Updates from "expo-updates";
import {fontConfig} from "@/assets/fonts/font";
import {useStyles} from "@/styles/styles";
import {imageSources} from "@/components/Images/ImgReq";
import BackgroundImage from "@/components/Images/BackgroundImage";
import {AuthProvider} from "@/context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootLayout() {
    const [loaded] = useFonts(fontConfig);
    // const styles = useStyles();


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
                <BackgroundImage source={imageSources["bg_pick"]}/>
            </View>
        );
    }

    return (
        <AuthProvider>
      <SafeAreaProvider>
        <SafeAreaView style={styles.containerLyout} edges={['top', 'left', 'right']}>
          <StatusBar backgroundColor="#757575" barStyle="light-content" />
          <View style={styles.contentLayout}>
            <Slot />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </AuthProvider>
    );
}
const styles = StyleSheet.create({
    containerLyout: {
      flex: 1,
      backgroundColor: '#757575', // Áp dụng màu nền theo StatusBar
    },
    contentLayout: {
      flex: 1,
      backgroundColor: '#FFFFFF', // Màu nền của nội dung bên trong
    },
  });