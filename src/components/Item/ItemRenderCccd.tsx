import {ImageBackground, StyleSheet, View} from "react-native";
import {hResponsive} from "@/constants/Colors";
import {imageSources} from "@components/Images/ImgReq";
import React from "react";

export default function ItemRenderCccd() {
    return (
        <View style={[styles.cccdContainer]}>
            <ImageBackground
                source={imageSources["cccd"]}
                style={styles.cccd}
                resizeMode="contain" // Sử dụng "contain" để đảm bảo ảnh nằm gọn trong View
            />
        </View>
    )
}
const styles = StyleSheet.create({
    cccdContainer: {
        width: 'auto',
        height: hResponsive(200),
    },
    cccd: {
        width: '100%',
        height: '100%',
    },
});