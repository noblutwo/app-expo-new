import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import AppImage from "@components/Images/ImgReq";
import {FontSize, hResponsive, wResponsive} from "@/constants/Colors";


interface Item {
    info: string;
    value: string;
}

// Định nghĩa interface cho dropdown
interface Dropdown {
    data: Item[];
    title: string;
    open: boolean;
    setOpen: (open: boolean) => void; // Hàm để thay đổi trạng thái mở
}

export function InfoDropDown({data, title, open, setOpen}: Dropdown) {


    return (
        <View style={styles.containerLayout}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: FontSize.textLowercase, fontWeight: 700}}>{title}</Text>
                <TouchableOpacity onPress={() => setOpen(!open)}>
                    <AppImage source={open ? "dropDown" : "dropRight"} style={styles.icon}/>
                </TouchableOpacity>
            </View>
            <View>
                {open && data?.map((item: any, index: number) => (
                    <View key={index}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15}}>
                            <Text style={{color: "#8e8e8e"}}>{item?.info}</Text>

                            <Text
                                style={styles.text}
                            >
                                {item?.value}
                            </Text>

                        </View>
                        {index < data.length - 1 && <View style={styles.appLine}/>}
                    </View>
                ))}
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    containerLayout: {
        padding: '5%'
    },
    icon: {
        width: wResponsive(20),
        height: hResponsive(20)
    },
    appLine: {
        height: 1,
        backgroundColor: '#eaeaea',
    },
    text: {
        textAlign: 'right',
        width: '60%'
    },

})