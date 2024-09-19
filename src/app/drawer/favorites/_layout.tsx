import {Stack, Tabs} from "expo-router";
import React from "react";
import {StyleSheet, Text} from "react-native";
import {Colors, FontSize} from "@/constants/Colors";
import AppImage from "@/components/Images/ImgReq";


export default function FavoriteLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            {/* Optionally configure static options outside the route.*/}
            <Stack.Screen name="home" options={{}}/>
            <Stack.Screen name="residenceInformation" options={{}}/>
        </Stack>
    );
}

const styles = StyleSheet.create({});