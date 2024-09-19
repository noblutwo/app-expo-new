import React from "react";
import {router, Stack} from "expo-router";
import {StyleSheet, TouchableOpacity, ImageBackground} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import {HeaderTitle} from "@/components/HeaderTitle/HeaderTitle";
import {useAuth} from "@/context/AuthContext";
import AppImage, {imageSources} from "@components/Images/ImgReq";
import BackgroundImage from "@components/Images/BackgroundImage";
import {hResponsive, wResponsive} from "@/constants/Colors";

export default function AuthLayout() {
    const {isLoggedIn} = useAuth();
    const handler = () => {
        if (isLoggedIn != null) {
            router.back()
        } else {
            router.push('/')
        }
    }
    return (
        <Stack screenOptions={{
            // headerLeft: () => null
        }}>
            <Stack.Screen
                name="residence"
                options={{
                    headerBackVisible: false,
                    headerTitle: () => <HeaderTitle title="Thông tin cư trú"/>,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => handler()}>
                            <Ionicons name="arrow-back" size={20} color="#424242" style={{color: '#424242'}}/>
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity>
                            <AppImage source="qrCodeHeader" style={styles.item}/>
                        </TouchableOpacity>
                    ),
                    headerBackground: () => (
                        <ImageBackground
                            source={imageSources["bgHeader"]}
                            style={styles.headerBackground}
                        />

                    ),
                }}
            />

        </Stack>
    );
}
const styles = StyleSheet.create({
    loadingContainer: {
        paddingRight: 10,
    },
    item: {

        marginTop: 5,
        width: wResponsive(20),
        height: hResponsive(20),
        marginBottom: 10,
    },
    headerBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});