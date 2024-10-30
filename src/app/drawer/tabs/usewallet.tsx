import {StyleSheet, ScrollView, View, Text, ImageBackground, TouchableOpacity} from "react-native";
import React from "react";
import {useStyles} from "@/styles/styles";
import AppImage, {imageSources} from "@/components/Images/ImgReq";
import BackgroundImage from "@/components/Images/BackgroundImage";
import {FontAwesome6} from '@expo/vector-icons';
import {FontSize, hResponsive, pResponsive, wResponsive} from "@/constants/Colors";

// Định nghĩa kiểu dữ liệu cho data
interface DataItem {
    id: number;
    picture: string;
    title: string;
}

const data: DataItem[] = [
    {id: 1, picture: "tagetCccd", title: "Thẻ Căn cước/ CCCD"},
    {id: 2, picture: "giaypheplaixe", title: "Giấy phép lái xe"},
    {id: 3, picture: "ic_bhyt", title: "Thẻ BHYT"},
    {id: 4, picture: "ic_thongtincutru", title: "Thông tin cư trú"},
    {id: 5, picture: "ic_dangkyxe", title: "Đăng ký xe"},
    {id: 6, picture: "ic_nguoiphuthuoc", title: "Người phụ thuộc"},
    {id: 7, picture: "bgXaHoi", title: "Bảo hiểm xã hội"},
];

export default function LayoutService() {
    const global = useStyles();

    return (
        <View style={styles.container}>
            <ImageBackground source={imageSources["bgHeaderWallet"]} style={styles.backgroundImage}>
                <View style={[styles.containerLayout, styles.headerContainer]}>
                    <Text style={styles.headerText}>Ví giấy tờ</Text>
                </View>
                <View style={[styles.cccdContainer]}>
                    <ImageBackground
                        source={imageSources["cccd"]}
                        style={styles.cccd}
                        resizeMode="contain" // Sử dụng "contain" để đảm bảo ảnh nằm gọn trong View
                    />
                </View>
                <View style={styles.detailsContainer}>
                    <View style={styles.detailsWrapper}>
                        <FontAwesome6 name="contact-card" size={16} color="#4c4c4c"/>
                        <Text style={styles.detailsText}>Xem thông tin chi tiết</Text>
                    </View>
                </View>
            </ImageBackground>

            <ScrollView style={global.homeContainer} contentContainerStyle={{paddingBottom: 100}}>
                <View style={styles.containerLayout}>
                    <View style={styles.accountContainer}>
                        <Text style={styles.accountText}>Tài khoản mức 2 </Text>
                        <ImageBackground source={imageSources["iconVn"]} style={[styles.icon, {marginLeft: 5}]}/>
                    </View>
                    <Text>Tài khoản của bạn đã được định danh ở mức 3</Text>
                </View>
                <View style={styles.appLineBig}/>
                <View style={styles.containerLayout}>
                    <Text style={styles.sectionTitle}>Tích hợp và xuất trình</Text>
                    <View style={styles.rowContainer}>
                        <View style={styles.wrapItem}>
                            <AppImage source={"tichHoptt"} style={global.imageOverlap}/>
                            <Text style={styles.sectionTitle}>Tích hợp giấy tờ</Text>
                        </View>
                        <View style={styles.wrapItem}>
                            <AppImage source={"xuatTrinh"} style={global.imageOverlap}/>
                            <Text>Xuất trình giấy tờ</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.containerLayout}>
                    <Text style={styles.sectionTitle}>Giấy tờ</Text>
                    <View style={styles.containerOverlap}>
                        {data.reduce<DataItem[][]>((rows, key, index) => {
                            if (index % 3 === 0) rows.push([]);
                            rows[rows.length - 1].push(key);
                            return rows;
                        }, []).map((row, rowIndex) => (
                            <View key={rowIndex} style={global.rowOverlap}>
                                {row.map((item) => (
                                    <TouchableOpacity key={item.id} style={global.itemOverlap}>
                                        <AppImage source={item.picture} style={global.imageOverlap}/>
                                        <Text style={global.titleOverlap}>{item.title}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
    },
    containerLayout: {
        paddingHorizontal: "3%",
    },
    backgroundImage: {
        width: '100%',
        paddingBottom:10
        // height: hResponsive(282),
    },
    headerContainer: {
        paddingVertical: 10,
        marginTop: 10,
    },
    icon: {
        width: wResponsive(15),
        height: hResponsive(15),
    },
    appLineBig: {
        height: 3,
        backgroundColor: "#f8f8f8",
        marginVertical: 15,
    },
    containerOverlap: {
        justifyContent: "center",
    },
    wrapItem: {
        backgroundColor: "#f2f2f2",
        width: "48%",
        paddingVertical: 20,
        alignItems: "center",
        borderRadius: 10,
        marginHorizontal: 5,
    },
    cccdContainer: {
        width: 'auto',
        height: hResponsive(200),
    },
    cccd: {
        width: '100%',
        height: '100%',
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
    headerText: {
        fontSize: pResponsive(14),
        fontWeight: "600",
    },
    detailsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsWrapper: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 20,
        alignItems: 'center',
    },
    detailsText: {
        paddingLeft: 6,
        color: '#4c4c4c',
        fontSize: pResponsive(11)
    },
    accountContainer: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    accountText: {
        color: "#a62c2c",
        fontWeight: '700'
    },
    sectionTitle: {
        fontWeight: "600",
    },
    rowContainer: {
        flexDirection: "row",
        paddingVertical: 20,
    },
});