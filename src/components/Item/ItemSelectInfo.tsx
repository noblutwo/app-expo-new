import {StyleSheet, Text, View} from "react-native";
import React from "react";


export default function ItemSelectInfo({info, value}: any) {
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
            <View style={styles.appLine}/>
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