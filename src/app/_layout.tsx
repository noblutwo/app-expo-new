import {useEffect} from "react";
import * as SplashScreen from 'expo-splash-screen';
import { Slot } from 'expo-router/slot';
import {useFonts} from "expo-font";
import React from "react";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {StatusBar, View, StyleSheet} from "react-native";
import * as Updates from "expo-updates";
import {fontConfig} from "@/assets/fonts/font";
import {imageSources} from "@/components/Images/ImgReq";
import BackgroundImage from "@/components/Images/BackgroundImage";
import {AuthProvider} from "@/context/AuthContext";

export default function RootLayout() {
    const [loaded] = useFonts(fontConfig);

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
                <StatusBar backgroundColor="#757575" barStyle="light-content"/>
                <View style={styles.contentLayout}>
                    <Slot/>
                </View>
            </SafeAreaProvider>
        </AuthProvider>
    );
}
const styles = StyleSheet.create({
    containerLyout: {
        flex: 1,
        // backgroundColor: 'transparent',
    },
    contentLayout: {
        flex: 1,
        backgroundColor: '#FFFFFF', // Màu nền của nội dung bên trong
    },
});
