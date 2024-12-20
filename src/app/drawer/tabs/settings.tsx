import {StyleSheet, ScrollView, Text, View, Dimensions, TouchableOpacity} from "react-native";
import React, { useState} from "react";
import {FontSize, hResponsive} from "@/constants/Colors";
import {imageSources} from "@/components/Images/ImgReq";
import BackgroundImage from "@/components/Images/BackgroundImage";
import {ItemSelectSetting} from "@components/Item/ItemSelectSetting";
import {Switch} from "react-native-paper";
import { useRouter } from 'expo-router';


const {width, height} = Dimensions.get('window')
export default function LayoutSettings() {
    const router = useRouter();
    const [isEnabled, setIsEnabled] = useState(false);
    const [loading, setLoading] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    // const { handlerNoticifation, hiddenNoticifation} = useAuth();
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
            version: "2.1.9"
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

    const handLogOut = async () => {
        try {
            setLoading(true)
            router.push("/")
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <View style={{flex: 1}}>
            <BackgroundImage source={imageSources["bg_setting"]}
                             style={{height: hResponsive(147), position: 'relative'}}>
                <View style={[styles.containerLayout, styles.jus, {flexDirection: 'row'}]}>
                    <View style={styles.wrapSetting}>
                        <Text style={{fontSize: FontSize.textLowercase, fontWeight: 600, paddingVertical: 40}}>
                            Cài đặt
                        </Text>
                        {/*<Text>Sử dụng vân tay / khuân mặt để mở khóa ứng dụng nhanh chóng và bảo mật hơn</Text>*/}
                    </View>
                    <View style={[styles.wrapIconSetting, {top: 5}]}>
                        <BackgroundImage
                            source={imageSources["icon_bg_setting"]}
                            style={styles.appImage} // Thay đổi kích thước ở đây
                        />
                    </View>
                </View>
            </BackgroundImage>
            <ScrollView style={{paddingTop: 8, backgroundColor: 'white'}}>
                <ItemSelectSetting data={titleItem} title={"Tài khoản"}/>
                <View style={styles.appLineBig}/>
                <ItemSelectSetting data={titleItem2} title={"Ứng dụng"}/>
                <View style={styles.appLineBig}/>
                <ItemSelectSetting data={titleItem3} title={"Hỗ trợ"}/>
                <View style={styles.containerLayout}>
                    <TouchableOpacity
                        onPress={handLogOut}
                        style={{backgroundColor: '#ffb7b7', paddingVertical: 15, borderRadius: 10, marginVertical: 10}}>
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
        paddingHorizontal: '3%'
    },
    wrapSetting: {
        width: "50%",
        paddingTop: 20
    },
    wrapIconSetting: {
        width: "50%",
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        // paddingRight: "6%"
    },
    appImage: {
        width: '85%',
        height: '85%',
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
    },
    jus: {
        justifyContent: 'space-between'
    }
})


