import {ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
import {useLocalSearchParams} from 'expo-router';
import {FontSize, hResponsive, wResponsive} from "@/constants/Colors";
import {imageSources} from "@components/Images/ImgReq";
import ItemCard from "@components/Item/ItemCard";
import React from "react";
import InfoCardUser from "@components/Dropdown/InfoCardUser";

function User() {
    const {user} = useLocalSearchParams();
    return (
        <View style={styles.container}>
            <ScrollView>
                {user === "cccd" && (
                    <View style={styles.layoutContainer}>
                        <Text style={{fontWeight: '700', fontSize: FontSize.textLowercase, paddingVertical: 15}}>
                            Thẻ căn cước công dân
                        </Text>
                        <View style={styles.cccdContainer}>
                            <ImageBackground
                                source={imageSources["cccd"]}
                                style={[styles.cccd, styles.shadow]}
                            />
                        </View>
                        <ItemCard title={"Đặc điểm nhận dạng"} value={"Vết sẹo phía sau mày phải"}/>
                        <ItemCard title={"Ngày cấp"} value={"16/09/2022"}/>
                    </View>
                )}
                {user === "info" && (
                    <View style={[styles.layoutContainer, {backgroundColor: 'white',}]}>
                        <View style={{marginTop: 10}}>
                            <InfoCardUser/>
                        </View>
                    </View>
                )}
                {user === "true" && (
                    <View>
                        <View style={styles.layoutContainer}>
                            <Text style={{fontWeight: '700', fontSize: FontSize.textLowercase, paddingVertical: 15}}>
                                Thẻ căn cước công dân
                            </Text>
                            <View style={styles.cccdContainer}>
                                <ImageBackground
                                    source={imageSources["cccd"]}
                                    style={[styles.cccd, styles.shadow]}
                                />
                            </View>
                            <ItemCard title={"Đặc điểm nhận dạng"} value={"Vết sẹo phía sau mày phải"}/>
                            <ItemCard title={"Ngày cấp"} value={"16/09/2022"}/>
                        </View>
                        <View
                            style={[styles.layoutContainer, {backgroundColor: 'white', marginTop: 8, paddingTop: 10}]}>
                            <InfoCardUser/>
                        </View>
                    </View>
                )}
            </ScrollView>

            <View style={{backgroundColor: 'white'}}>
                <View style={{backgroundColor: '#cf0000', margin: 10, borderRadius: 5}}>
                    <Text style={{color: 'white', fontWeight: '700', textAlign: 'center', paddingVertical: 10}}>Xuất
                        trình
                        giấy giờ</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        height: '100%',
        justifyContent: 'space-between'

    },
    layoutContainer: {
        paddingHorizontal: '3%',
        backgroundColor: 'white'
    },
    cccdContainer: {
        width: '100%',
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    cccd: {
        width: wResponsive(350),
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

export default User;