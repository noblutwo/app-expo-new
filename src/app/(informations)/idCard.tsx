import {ImageBackground, StyleSheet, Text, View} from "react-native";
import {FontSize, hResponsive, wResponsive} from "@/constants/Colors";
import {imageSources} from "@components/Images/ImgReq";
import React from "react";

function IdCard(parameterName, url) {
    console.log("parameterName", parameterName)
    console.log("url", url)
    return (
        <View style={styles.container}>
            <View style={styles.layoutContainer}>
                <Text style={{fontWeight: 700, fontSize: FontSize.textLowercase}}>Thẻ căn cước công dân</Text>
            </View>
            <View style={styles.cccdContainer}>
                <ImageBackground
                    source={imageSources["cccd"]}
                    style={[styles.cccd, styles.shadow]}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    layoutContainer: {
        paddingHorizontal: '3%'
    },
    cccdContainer: {
        width: '100%',
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    cccd: {
        width: wResponsive(325),
        height: hResponsive(220),
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'visible',
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
});
export default IdCard