import React from "react";
import {router, Stack} from "expo-router";
import {StyleSheet, ImageBackground, TouchableOpacity} from "react-native";
import AppImage, {imageSources} from "@/components/Images/ImgReq";
import {useAuth} from "@/context/AuthContext";

export default function AuthLayout() {
    const {isLoggedIn} = useAuth();

    const commonHeaderOptions = {
        headerTitleAlign: "center" as const,
        headerTitle: () => null,
        headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
                <AppImage source="header_back" style={styles.item} resizeMode="cover"/>
            </TouchableOpacity>
        ),
        headerBackground: () => (
            <ImageBackground
                source={imageSources["headerBackground"]}
                style={styles.headerBackground}
            />
        ),
    };

    const headerOptions = isLoggedIn ? {} : commonHeaderOptions

    const screens = [
        {name: "login", options: {}},
        {name: "logout", options: {}},
        {name: "policy", options: {headerTitle: 'Chính sách quyền riêng tư'}},
        {name: "activateAccount", options: {}},
        {name: "forgotPassword", options: {}},
        {name: "register", options: {}},

    ];

    return (
        <Stack screenOptions={{headerShown: !isLoggedIn, ...headerOptions}}>
            {screens.map(({name, options}) => (
                <Stack.Screen
                    key={name}
                    name={name}
                    options={{
                        ...options,
                        headerBackground: () => (
                            !isLoggedIn && (
                                <ImageBackground
                                    source={imageSources["headerBackground"]}
                                    style={name === "policy" ? styles.headerBackgroundPolicy : styles.headerBackground}
                                />
                            )

                        ),
                    }}
                />
            ))}

        </Stack>
    );
}

const styles = StyleSheet.create({
    item: {
        width: 40,
        height: 30,
    },
    headerBackground: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    headerBackgroundPolicy: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
});