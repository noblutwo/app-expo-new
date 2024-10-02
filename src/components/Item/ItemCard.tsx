import {StyleSheet, Text, View} from "react-native";
import React from "react";

interface item {
    title: string,
    value: string
}

export default function ItemCard({title, value}: item) {
    return (
        <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20}}>
                <Text style={{color: '#6a6a6a'}}>{title}</Text>
                <Text style={{fontWeight: 600}}>{value}</Text>
            </View>
            <View style={styles.linedUser}/>
        </View>
    )
}
const styles = StyleSheet.create({

    linedUser: {
        borderBottomWidth: 1,
        borderBottomColor: "#eaeaea",
        flex: 1,
    },
});