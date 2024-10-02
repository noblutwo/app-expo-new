import {ImageBackground, StyleSheet, Text, View} from "react-native";
import {imageSources} from "@components/Images/ImgReq";
import React from "react";
import {hResponsive, wResponsive} from "@/constants/Colors";

interface notFound {
    styleHeight: number,
    title: string
}

export function LayoutNotFound({styleHeight, title}: notFound) {
    return (
        <View style={[styleHeight === 50 ? {height: '50%'} : {height: '100%'}, styles.wrapLayout]}>
            <ImageBackground
                source={imageSources["notFound"]}
                style={styles.bgNotFound}
            />
            <Text style={{paddingVertical: 20, color: '#777777'}}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bgNotFound: {
        width: wResponsive(100),
        height: hResponsive(100)
    },
    wrapLayout: {
        alignItems: 'center', justifyContent: 'center', top: -50
    }
});