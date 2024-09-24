import {ImageBackground, StyleSheet, Text, View} from "react-native";
import {imageSources} from "@components/Images/ImgReq";
import React from "react";
import {FontSize, hResponsive, pResponsive, wResponsive} from "@/constants/Colors";

export function LayoutNotFound() {
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', height: '100%', top: -50}}>
            <ImageBackground
                source={imageSources["notFound"]}
                style={styles.bgNotFound}
            />
            <Text style={{paddingVertical: 20, color: '#777777'}}>Bạn không có thông báo nào</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    bgNotFound: {
        width: wResponsive(100),
        height: hResponsive(100)
    }
});