import {Dimensions, StyleSheet, Text, View} from "react-native";
import AppImage from "@components/Images/ImgReq";
import React from "react";
import {useStyles} from "@/styles/styles";
import {Colors, FontSize} from "@/constants/Colors";

const {width, height} = Dimensions.get('window')
export function ItemSelectSetting({data, title}: any) {
    const globalStyles = useStyles();

    return (
        <View style={styles.containerLayout}>
            <Text style={styles.titleText}>{title}</Text>
            {data?.map((item: any, index: number) => (
                <View key={index}>
                    <View style={styles.row}>
                        <Text>{item?.title}</Text>
                        {item?.phone && (
                            <Text style={styles.appTextPhone}>
                                {item?.phone || item?.version}
                            </Text>
                        )}
                        {item?.icon && (
                            <AppImage
                                source={item?.icon}
                                style={[globalStyles.imageSliderLogin, styles.appIcon]}
                                resizeMode="contain"
                            />)}

                    </View>
                    {/* Ẩn dòng kẻ nếu là phần tử cuối cùng */}
                    {index !== data.length - 1 && <View style={styles.appLine}/>}
                    {item?.icon === "setting9" && <View style={styles.appLine}/>}
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    containerLayout: {
        flex: 1,
        paddingHorizontal: '3%',
    },
    titleText: {
        fontSize: FontSize.textLowercase,
        paddingVertical: 10,
        fontWeight: '600',
        color: Colors.colorItemSetting,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    appLine: {
        height: 1, // Chiều cao của gạch ngang
        backgroundColor: '#e3e3e3', // Màu gạch ngang
        marginVertical: 12, // Thay vì paddingVertical
    },
    appIcon: {
        width: width * 0.06,
        height: height * 0.06,
    },
    appTextPhone: {
        color: '#ba4747',
        fontWeight: '700',
        fontSize: FontSize.textLowercase,
    },
});
