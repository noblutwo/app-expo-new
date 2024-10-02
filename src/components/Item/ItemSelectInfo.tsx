import {StyleSheet, Text, View} from "react-native";
import React from "react";
import { lightTheme } from "@/styles/theme";

export default function ItemSelectInfo({info, value, index}: any) {
    return (
        <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15}}>
                <Text style={{color: '#a1a1a1', fontSize: 16, backgroundColor:'red'}}>{info}</Text>
                <Text maxFontSizeMultiplier={4} numberOfLines={4} ellipsizeMode={'middle'}
                    style={[
                        styles.text, 
                        info === 'Họ và tên chủ hộ' ? {textTransform: 'uppercase'} : {backgroundColor:'blue'}
                    ]}
                >
                    {value}
                </Text>
            </View>
            {info !== "Quan hệ với chủ hộ" && <View style={styles.appLine}/>}
        </View>
    )
}
const styles = StyleSheet.create({
    appLine: {
        height: 1,
        backgroundColor: '#eaeaea',
    },
    text: {
        textAlign: 'right',
        paddingLeft:40,
        color: lightTheme.colors.text,
        fontFamily: lightTheme.fontSizes.fontFamilyRegular,
        fontSize: 16
    },
})