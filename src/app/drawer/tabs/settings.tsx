import {StyleSheet, ScrollView, Text, View} from "react-native";
import React from "react";
import {Colors, FontSize} from "@/constants/Colors";
import {useStyles} from "@/styles/styles";
import AppImage, {imageSources} from "@/components/Images/ImgReq";
import BackgroundImage from "@/components/Images/BackgroundImage";
import {useResponsiveDimensions} from "@hooks/useResponsiveDimensions";
import {ItemSelectSetting} from "@components/Item/ItemSelectSetting";

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
        icon: "setting1"
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
        icon: "setting1"
    },
    {
        title: "Chính sách quyền riêng tư",
        icon: "setting2"
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
        icon: "setting2"
    },
    {
        title: "Câu hỏi thường gặp",
        icon: "setting3"
    },
]

export default function LayoutSettings() {
    const globalStyles = useStyles();
    const dimensions = useResponsiveDimensions();

    return (
        <View style={{flex: 1}}>
            <BackgroundImage source={imageSources["bg_setting"]}
                             style={{height: dimensions.height * 0.25, position: 'relative'}}>
                <View style={[globalStyles.containerLayout, {flexDirection: 'row', flex: 1}]}>
                    <View style={globalStyles.wrapSetting}>
                        <Text style={{fontSize: FontSize.textLowercase, fontWeight: 600, paddingVertical: 20}}>Cài
                            đặt</Text>
                        <Text>Sử dụng vân tay / khuân mặt để mở khóa ứng dụng nhanh chóng và bảo mật hơn</Text>
                    </View>
                    <View style={globalStyles.wrapIconSetting}>
                        <BackgroundImage
                            source={imageSources["icon_bg_setting"]}
                            style={globalStyles.appImage} // Thay đổi kích thước ở đây
                        />

                    </View>
                </View>
            </BackgroundImage>
            <ScrollView style={{paddingTop: 20}}>
                <ItemSelectSetting data={titleItem} title={"Tài khoản"}/>
                <View style={globalStyles.appLineBig}/>
                <ItemSelectSetting data={titleItem2} title={"Ứng dụng"}/>
                <View style={globalStyles.appLineBig}/>
                <ItemSelectSetting data={titleItem3} title={"Hỗ trợ"}/>
            </ScrollView>
        </View>
    );
}


