import {StyleSheet, ScrollView, Text, View, Dimensions, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import {FontSize, hResponsive} from "@/constants/Colors";
import {imageSources} from "@/components/Images/ImgReq";
import BackgroundImage from "@/components/Images/BackgroundImage";
import {useResponsiveDimensions} from "@hooks/useResponsiveDimensions";
import {ItemSelectSetting} from "@components/Item/ItemSelectSetting";
import {Switch} from "react-native-paper";


const {width, height} = Dimensions.get('window')
export default function LayoutSettings() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    const titleItem = [
        {
            title: "Lịch sử chia sẻ",
            icon: "setting1"
        },
        {
            title: "Cài đặt đăng nhập",
            icon: "setting2"
        },
        {
            title: "Đổi mật khẩu",
            icon: "setting3"
        },
        {
            title: "Đổi passcode",
            icon: "setting4"
        },
        {
            title: "Quản lý thiết bị",
            icon: "setting5"
        },
        {
            title: "Xác minh ứng dụng qua QR code",
            open: <Switch
                trackColor={{false: "#767577", true: "#0fd31d"}}
                thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        },
        {
            title: "Cài đặt thông báo",
            icon: "setting6"
        },
        {
            title: "Cài đặt phương thức xác thực thay thế nhập passcode",
            icon: "setting7"
        },
        {
            title: "Thay đổi số điện thoại",
            icon: "setting8"
        },

    ]
    const titleItem2 = [
        {
            title: "Điều khoản sử dụng ứng dụng và dịch vụ",
            icon: "setting11"
        },
        {
            title: "Chính sách quyền riêng tư",
            icon: "setting12"
        },
        {
            title: "Phiên bản sử dụng ",
            icon: "",
            version: '2.1.9'
        },
    ]
    const titleItem3 = [
        {
            title: "Hotline hỗ trợ",
            icon: "",
            phone: "1900.0368"
        },
        {
            title: "Hướng dẫn sử dụng",
            icon: "setting10"
        },
        {
            title: "Câu hỏi thường gặp",
            icon: "setting9"
        },
    ]
    return (
        <View style={{flex: 1}}>
            <BackgroundImage source={imageSources["bg_setting"]}
                             style={{height: hResponsive(200), position: 'relative'}}>
                <View style={[styles.containerLayout, {flexDirection: 'row', flex: 1}]}>
                    <View style={styles.wrapSetting}>
                        <Text style={{fontSize: FontSize.textLowercase, fontWeight: 600, paddingVertical: 20}}>
                            Cài đặt
                        </Text>
                        <Text>Sử dụng vân tay / khuân mặt để mở khóa ứng dụng nhanh chóng và bảo mật hơn</Text>
                    </View>
                    <View style={styles.wrapIconSetting}>
                        <BackgroundImage
                            source={imageSources["icon_bg_setting"]}
                            style={styles.appImage} // Thay đổi kích thước ở đây
                        />

                    </View>
                </View>
            </BackgroundImage>
            <ScrollView style={{paddingTop: 20}} contentContainerStyle={{paddingBottom: 80}}>
                <ItemSelectSetting data={titleItem} title={"Tài khoản"}/>
                <View style={styles.appLineBig}/>
                <ItemSelectSetting data={titleItem2} title={"Ứng dụng"}/>
                <View style={styles.appLineBig}/>
                <ItemSelectSetting data={titleItem3} title={"Hỗ trợ"}/>
                <View style={styles.containerLayout}>
                    <TouchableOpacity style={{backgroundColor: '#ffb7b7', paddingVertical: 15, borderRadius: 10,marginVertical:10}}>
                        <Text style={{
                            textAlign: 'center',
                            color: '#a50000',
                            fontWeight: 600,
                            fontSize: FontSize.textLowercase
                        }}>Đăng xuất</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    //     cuong
    // setting
    containerLayout: {
        flex: 1,
        paddingHorizontal: '5%'
    },
    wrapSetting: {
        width: "55%",
        justifyContent: 'center',

    },
    wrapIconSetting: {
        width: "45%",
        justifyContent: 'center',
    },
    appImage: {
        width: width * 0.35,
        height: height * 0.20,
    },
    appLine: {
        height: 1, // Chiều cao của gạch ngang
        backgroundColor: '#e3e3e3', // Màu gạch ngang
        marginVertical: 15,
    },
    appLineBig: {
        height: 3, // Chiều cao của gạch ngang
        backgroundColor: '#e3e3e3', // Màu gạch ngang
        marginVertical: 20,
    },
    appIcon: {
        width: width * 0.06,
        height: height * 0.06,
    },
    appTextPhone: {
        color: '#ba4747',
        fontWeight: '700',
        fontSize: FontSize.textLowercase
    }
})


