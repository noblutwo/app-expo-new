import {Text, View} from "react-native";
import AppImage from "@components/Images/ImgReq";
import React from "react";
import {useStyles} from "@/styles/styles";
import {Colors, FontSize} from "@/constants/Colors";

export function ItemSelectSetting({data, title}: any) {
    const globalStyles = useStyles();
    return (
        <View style={globalStyles.containerLayout}>
            <Text style={{
                fontSize:FontSize.textLowercase,
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
                                style={!!item?.phone && globalStyles.appTextPhone}>{!item?.phone ? item?.version : item?.phone}</Text>
                            :
                            <AppImage
                                source={item?.icon}
                                style={[globalStyles.imageSliderLogin, globalStyles.appIcon]}
                                resizeMode="contain"
                            />}

                    </View>
                    {index !== 8 && <View style={globalStyles.appLine}/>}
                </View>
            ))}


        </View>
    )
}