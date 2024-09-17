import {StyleSheet, ScrollView, Text, View} from "react-native";
import React from "react";
import {FontSize} from "@/constants/Colors";
import {useStyles} from "@/styles/styles";
import AppImage, {imageSources} from "@/components/Images/ImgReq";
import BackgroundImage from "@/components/Images/BackgroundImage";
import {useResponsiveDimensions} from "@hooks/useResponsiveDimensions";

export default function LayoutSettings() {
    const globalStyles = useStyles();
    const dimensions = useResponsiveDimensions();
    return (
        <ScrollView style={globalStyles.homeContainer}>
            <BackgroundImage source={imageSources["bg_setting"]} style={{height: dimensions.height * 0.25}}>
                <View style={{flexDirection: 'row', flex: 1}}>
                    <View style={globalStyles.wrapSetting}>
                        <Text>Cài đặt</Text>
                        <Text>Sử dụng vân tay / khuân mặt để mở khóa ứng dụng nhanh chóng và bảo mật hơn</Text>
                    </View>
                    <View style={globalStyles.wrapIconSetting}>
                        <BackgroundImage
                            source={imageSources["icon_bg_setting"]}
                            style={{width:dimensions.width * 0.4,height:"100%"}}
                        />

                    </View>
                </View>
            </BackgroundImage>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20
    },
    headerImage: {
        color: "#ffffff",
        bottom: -90,
        left: -35,
        position: "absolute",
    },
    information: {
        flex: 1,
    },
    image: {},
    titleInformation: {
        gap: 4,
    },
    titleContainer: {
        flexDirection: "row",
        gap: 8,
    },
    imageButton: {
        width: 40,
        marginRight: 10
    },
    titleText: {
        flex: 1,
        fontSize: 17,
        fontWeight: '200',
        fontFamily: FontSize.fontFamilyRegular,
        color: '#4d4d4d'
    },
    imageContainer: {},
    name: {
        fontWeight: "bold",
    },
    inforUser: {
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        marginBottom: 20,
    },
    lined: {
        borderBottomWidth: 1,
        borderBottomColor: FontSize.lineOne,
        marginTop: 0,
        flex: 1,
        marginRight: 20,
        marginLeft: 60,
    },
    linedUser: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: -10,
        marginBottom: 10,
        flex: 1,
    },
    imageBackground: {
        flexDirection: "column",
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginBottom: 20,
        borderRadius: 10,
        gap: 4,
        flex: 1,
        resizeMode: "cover",
    },
    inf: {
        flex: 1,
        justifyContent: "space-between",
        padding: 20,
    },
    forgotPassword: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        marginBottom: 20,
    },
    jSpaceBetween: {
        justifyContent: "space-between",
    },

    cardButton: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        height: 70,
    },
    imageIcon: {},
    heading: {},
    headScreen: {},
});
