import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, ImageBackground, TouchableOpacity, useWindowDimensions } from "react-native";
import { FontSize, hResponsive, pResponsive, wResponsive } from "@/constants/Colors";
import { imageSources } from "@/components/Images/ImgReq";
import BackgroundImage from "@/components/Images/BackgroundImage";
import { SceneMap, TabView } from "react-native-tab-view";

const TaiKhoanRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }}>
        <Text>Nội dung Tài khoản</Text>
    </View>
);

const HeThongRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }}>
        <Text>Nội dung Hệ thống</Text>
    </View>
);

const TinTucRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#4caf50' }}>
        <Text>Nội dung Tin tức</Text>
    </View>
);

const renderScene = SceneMap({
    taiKhoan: TaiKhoanRoute,
    heThong: HeThongRoute,
    tinTuc: TinTucRoute,
});

export default function Notification() {
    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'taiKhoan', title: 'Tài khoản' },
        { key: 'heThong', title: 'Hệ thống' },
        { key: 'tinTuc', title: 'Tin tức' },
    ]);

    const handleTabPress = (tabIndex : number) => {
        setIndex(tabIndex);
    };

    return (
        <View style={styles.container}>
            <BackgroundImage source={imageSources["bgHeader"]} style={{height: hResponsive(150)}}>
                <View style={styles.headerContainer}>
                    <View style={styles.containerLayout}>
                        <Text style={styles.headerText}>Thông báo</Text>
                        <View style={styles.tabContainer}>
                            {routes.map((route, idx) => (
                                <TouchableOpacity
                                    key={route.key}
                                    onPress={() => handleTabPress(idx)}
                                    style={[styles.tab, index === idx && styles.activeTab]}
                                >
                                    <Text
                                        style={[styles.tabText, index === idx ? styles.activeTabText : styles.inactiveTabText]}>
                                        {route.title}
                                    </Text>
                                    {route.key === 'taiKhoan' && <Text style={styles.badge}>1</Text>}
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <View>
                        <ImageBackground
                            source={imageSources["logoVienThong"]}
                            style={styles.logo}
                        />
                    </View>
                </View>
            </BackgroundImage>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={() => null}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "flex-end",
        height: '100%',
    },
    containerLayout: {
        paddingHorizontal: '3%',
    },
    headerText: {
        fontSize: FontSize.textBigLetters,
        fontWeight: '700',
        paddingBottom: pResponsive(20),
    },
    tabContainer: {
        flexDirection: 'row',
    },
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    tabText: {
        fontWeight: '600',
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#a10000',
    },
    activeTabText: {
        color: 'black',
    },
    inactiveTabText: {
        color: 'gray',
    },
    badge: {
        backgroundColor: '#bd2828',
        width: wResponsive(15),
        height: hResponsive(15),
        textAlign: 'center',
        color: 'white',
        marginLeft: 5,
        borderRadius: 10
    },
    logo: {
        width: wResponsive(100),
        height: hResponsive(110),
    },
});