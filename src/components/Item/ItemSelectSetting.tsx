import {StyleSheet, Text, View} from "react-native";
import AppImage from "@components/Images/ImgReq";
import React from "react";
import {useStyles} from "@/styles/styles";
import {Colors, FontSize} from "@/constants/Colors";
import {useResponsiveDimensions} from "@hooks/useResponsiveDimensions";

const dimensions = useResponsiveDimensions();
export function ItemSelectSetting({data, title}: any) {
    const globalStyles = useStyles();
    return (
        <View style={styles.containerLayout}>
            <Text style={{
                fontSize: FontSize.textLowercase,
                paddingVertical: 15,
                fontWeight: 600,
                color: Colors.colorItemSetting
            }}>{title}</Text>
            {data?.map((item: any, index: number) => (
                <View key={index}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Text>{item?.title}</Text>
                        {!item?.icon
                            ?
                            <Text
                                style={!!item?.phone && styles.appTextPhone}>{!item?.phone ? item?.version : item?.phone}</Text>
                            :
                            <AppImage
                                source={item?.icon}
                                style={[globalStyles.imageSliderLogin, styles.appIcon]}
                                resizeMode="contain"
                            />}

                    </View>
                    {index !== 8 && <View style={styles.appLine}/>}
                </View>
            ))}


        </View>
    )
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

    appLine: {
        height: 1, // Chiều cao của gạch ngang
        backgroundColor: '#e3e3e3', // Màu gạch ngang
        marginVertical: 15,
    },
    appLineBig: {
        height: 3, // Chiều cao của gạch ngang
        backgroundColor: '#e3e3e3', // Màu gạch ngang
        marginVertical: 15,
    },
    appIcon: {
        width: dimensions.width * 0.06,
        height: dimensions.height * 0.06,
    },
    appTextPhone: {
        color: '#ba4747',
        fontWeight: '700',
        fontSize: FontSize.textLowercase
    }
})