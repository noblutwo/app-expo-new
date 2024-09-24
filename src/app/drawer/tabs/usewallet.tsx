import { StyleSheet, ScrollView, View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { FontSize } from "@/constants/Colors";
import { useStyles } from "@/styles/styles";
import AppImage, { imageSources } from "@/components/Images/ImgReq";
import BackgroundImage from "@/components/Images/BackgroundImage";

// Định nghĩa kiểu dữ liệu cho data
interface DataItem {
    id: number;
    picture: string;
    title: string;
}

const data: DataItem[] = [
    { id: 1, picture: "tagetCccd", title: "Thẻ Căn cước/ CCCD" },
    { id: 2, picture: "giaypheplaixe", title: "Giấy phép lái xe" },
    { id: 3, picture: "ic_bhyt", title: "Thẻ BHYT" },
    { id: 4, picture: "ic_thongtincutru", title: "Thông tin cư trú" },
    { id: 5, picture: "ic_dangkyxe", title: "Đăng ký xe" },
    { id: 6, picture: "ic_nguoiphuthuoc", title: "Người phụ thuộc" },
    { id: 7, picture: "bgXaHoi", title: "Bảo hiểm xã hội" },
];

export default function LayoutService() {
    const global = useStyles();

    return (
        <View style={styles.container}>
            <BackgroundImage source={imageSources["bgHeaderWallet"]} style={{ height: 380 }}>
                <View style={[styles.containerLayout, { paddingVertical: 10, marginTop: 20 }]}>
                    <Text style={{ fontSize: 20, fontWeight: "600" }}>Ví giấy tờ</Text>
                </View>
            </BackgroundImage>
            <View style={styles.containerLayout}>
                <View style={{ flexDirection: "row", paddingVertical: 20 }}>
                    <Text style={{ color: "#a62c2c" }}>Tài khoản mức 2 </Text>
                    <ImageBackground source={imageSources["iconVn"]} style={[styles.icon, { marginLeft: 5 }]} />
                </View>
                <Text>Tài khoản của bạn đã được định danh ở mức 3</Text>
            </View>
            <View style={styles.appLineBig} />
            <ScrollView style={global.homeContainer} contentContainerStyle={{ paddingBottom: 80 }}>
                <View style={styles.containerLayout}>
                    <Text style={{ fontWeight: "600" }}>Tích hợp và xuất trình</Text>
                    <View style={[{ flexDirection: "row", paddingVertical: 20 }, styles.containerLayout]}>
                        <View style={styles.wrapItem}>
                            <AppImage source={"tichHoptt"} style={global.imageOverlap} />
                            <Text>Tích hợp giấy tờ</Text>
                        </View>
                        <View style={styles.wrapItem}>
                            <AppImage source={"xuatTrinh"} style={global.imageOverlap} />
                            <Text>Xuất trình giấy tờ</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.containerLayout}>
                    <Text style={{ fontWeight: "600" }}>Giấy tờ</Text>
                    <View style={styles.containerOverlap}>
                        {/* Sử dụng reduce và chỉ định kiểu rõ ràng */}
                        {data.reduce<DataItem[][]>((rows, key, index) => {
                            if (index % 3 === 0) rows.push([]); // Tạo một hàng mới sau mỗi 3 phần tử
                            rows[rows.length - 1].push(key);    // Thêm phần tử vào hàng hiện tại
                            return rows;
                        }, []).map((row, rowIndex) => (
                            <View key={rowIndex} style={global.rowOverlap}>
                                {row.map((item) => (
                                    <TouchableOpacity key={item.id} style={global.itemOverlap}>
                                        <AppImage source={item.picture} style={global.imageOverlap} />
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
    icon: {
        width: 20,
        height: 20,
    },
    appLineBig: {
        height: 3, // Chiều cao của gạch ngang
        backgroundColor: "#f1f1f1", // Màu gạch ngang
        marginVertical: 15,
    },
    containerOverlap: {
        justifyContent: "center",
    },
    wrapItem: {
        backgroundColor: "#e6e6e6",
        width: "48%",
        paddingVertical: 20,
        alignItems: "center",
        borderRadius: 10,
        marginHorizontal: 5,
    },
});
