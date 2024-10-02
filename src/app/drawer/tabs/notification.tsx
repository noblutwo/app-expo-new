import React, {useState} from "react";
import {StyleSheet, Text, ScrollView, View, ImageBackground, TouchableOpacity, useWindowDimensions} from "react-native";
import {FontSize, hResponsive, pResponsive, wResponsive} from "@/constants/Colors";
import {imageSources} from "@/components/Images/ImgReq";
import BackgroundImage from "@/components/Images/BackgroundImage";
import {SceneMap, TabView} from "react-native-tab-view";
import {Entypo, AntDesign} from '@expo/vector-icons/';
import {LayoutNotFound} from "@components/NotFound/LayoutNotFound";

const TaiKhoanRoute = () => (
    <ScrollView style={[{flex: 1, backgroundColor: '#fff'}, styles.containerLayout]}>
        <Text style={{textAlign: 'right', fontWeight: '700', paddingVertical: 20, color: '#c52222'}}>Đánh dấu tất cả đã
            đọc</Text>
        <View>
            <Text style={{fontWeight: '700', color: '#777777', paddingVertical: 10}}>12-02-2024</Text>
            <View style={{backgroundColor: '#f3ece6', padding: 10, borderRadius: 10}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: FontSize.textBigLetters, fontWeight: '600', color: '#494949'}}>Mừng ngày đặc
                        biệt của bạn</Text>
                    <Entypo name="dot-single" size={24} color="red"/>
                </View>
                <Text style={{paddingVertical: 10}}>Chức bạn có một ngày sinh nhật thật vui vẻ và có những phút giây
                    đáng nhớ khi chào đón ngày đặc
                    biệt này cùng bạn bè và người thân</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <AntDesign name="clockcircleo" size={18} color="#989898"/>
                    <Text style={{color: "#989898", paddingHorizontal: 5, fontSize: FontSize.textSmall}}>07:01</Text>
                </View>

            </View>
        </View>
    </ScrollView>
);

const HeThongRoute = () => (
    <View style={[{flex: 1, backgroundColor: '#fff'}, styles.containerLayout]}>
        <Text style={{textAlign: 'right', fontWeight: '700', paddingVertical: 20, color: '#777777'}}>Đánh dấu tất cả đã
            đọc</Text>
        <LayoutNotFound  styleHeight={100} title={"Bạn không có thông báo nào"}/>
    </View>
);

const TinTucRoute = () => (
    <View style={[{flex: 1, backgroundColor: '#fff'}, styles.containerLayout]}>
        <Text style={{textAlign: 'right', fontWeight: '700', paddingVertical: 20, color: '#777777'}}>Đánh dấu tất cả đã
            đọc</Text>
        <LayoutNotFound  styleHeight={100} title={"Bạn không có thông báo nào"}/>
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
        {key: 'taiKhoan', title: 'Tài khoản'},
        {key: 'heThong', title: 'Hệ thống'},
        {key: 'tinTuc', title: 'Tin tức'},
    ]);

    const handleTabPress = (tabIndex: number) => {
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
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{width: layout.width}}
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
    bgNotFound: {
        width: wResponsive(100),
        height: hResponsive(100)
    }
});