import {ImageBackground, StyleSheet, Text, View} from "react-native";
import {useLocalSearchParams} from 'expo-router';
import {FontSize, hResponsive, wResponsive} from "@/constants/Colors";
import {imageSources} from "@components/Images/ImgReq";
import ItemCard from "@components/Item/ItemCard";
import React from "react";

function User() {
    const {user} = useLocalSearchParams();
    console.log("user", user)
    return (
        <View style={styles.container}>
            <View style={styles.layoutContainer}>
                <Text style={{fontWeight: 700, fontSize: FontSize.textLowercase, paddingVertical: 15}}>Thẻ căn cước công
                    dân</Text>
                <View style={styles.cccdContainer}>
                    <ImageBackground
                        source={imageSources["cccd"]}
                        style={[styles.cccd, styles.shadow]}
                    />
                </View>
                <ItemCard title={"Đặc điểm nhận dạng"} value={"Vết sẹo phía sau mày phải"}/>
                <ItemCard title={"Ngày cấp"} value={"16/09/2022"}/>
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
        width: wResponsive(355),
        height: hResponsive(230),
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
    linedUser: {
        borderBottomWidth: 1,
        borderBottomColor: "#eaeaea",
        flex: 1,
    },
});
export default User