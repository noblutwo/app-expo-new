import {StyleSheet, Text, View} from "react-native";
import React from "react";


export default function ItemSelectInfo({info, value, index}: any) {
    return (
        <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15}}>
                <Text style={{color: "#8e8e8e"}}>{info}</Text>

                <Text
                    style={styles.text}
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
        width: '60%'
    },

})