import React from "react";
import {router, Stack, usePathname} from "expo-router";
import {StyleSheet, ImageBackground, TouchableOpacity} from "react-native";
import AppImage, {imageSources} from "@/components/Images/ImgReq";
import {useAuth} from "@/context/AuthContext";
import {Ionicons} from "@expo/vector-icons";
import { useRouter } from 'expo-router';


export default function AuthLayout() {
    // const rou = useRouter();
    const pathname = usePathname();
    const { isNoticifation,isLoggedIn} = useAuth();
    const handlePress = () => {
        const authPaths = ["/drawer/login", "/drawer/register", "/drawer/forgotPassword", "/drawer/activateAccount"];
        if (authPaths.includes(pathname)) {
            if(!isNoticifation) {
                router.push("/home");  
            } else {
              router.back();  
            }
        } else {
              router.push("/home");  
        }
      };
    const commonHeaderOptions = isLoggedIn ? {headerShown: false} : {
        headerTitleAlign: "center" as const,
        headerTitle: () => null,
        headerLeft: () => (
            <TouchableOpacity
            onPress={() => handlePress()}
            >
                <AppImage source="header_back" style={styles.item} resizeMode="cover"/>
            </TouchableOpacity>
        ),
    };

    const screens = [
        {
            name: "login", options: {
                headerRight: () => {

                    return (
                        <TouchableOpacity>
                        {isNoticifation ?  <Ionicons name="notifications" size={24} color="black"/> : ''}
                        </TouchableOpacity>
                    );
                },
                animationEnabled: pathname === "/drawer/register" && false,
            }
        },
        {name: "logout", options: {}},
        {name: "policy", options: {headerTitle: 'Chính sách quyền riêng tư'}},
        {name: "activateAccount", options: {}},
        {name: "forgotPassword", options: {}},
        {name: "register", options: {}},
    ];

    return (
        <Stack screenOptions={commonHeaderOptions}>
            {screens.map(({name, options}) => (
                <Stack.Screen
                    key={name}
                    name={name}
                    options={{
                        ...options,
                        headerBackground: () => (
                            <ImageBackground
                                source={imageSources["headerBackground"]}
                                style={name === "policy" ? styles.headerBackgroundPolicy : styles.headerBackground}
                            />
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