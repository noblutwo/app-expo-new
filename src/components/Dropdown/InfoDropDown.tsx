import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import AppImage from "@components/Images/ImgReq";
import {FontSize, hResponsive, wResponsive} from "@/constants/Colors";
import ItemSelectInfo from "@components/Item/ItemSelectInfo";


interface Item {
    info: string;
}

// Định nghĩa interface cho dropdown
interface Dropdown {
    data: any;
    title: string;
    open: boolean;
    setOpen: (open: boolean) => void; // Hàm để thay đổi trạng thái mở
    info?: any
}

export function InfoDropDown({data, title, open, setOpen, info}: Dropdown) {


    return (
        <View style={styles.containerLayout}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: FontSize.textLowercase, fontWeight: 700}}>{title}</Text>
                <TouchableOpacity onPress={() => setOpen(!open)}>
                    <AppImage source={open ? "dropDown" : "dropRight"} style={styles.icon}/>
                </TouchableOpacity>
            </View>
            <View>
                {open &&
                    <View>
                        <ItemSelectInfo info={info[0]?.info || ""} value={data?.Name}/>
                        <ItemSelectInfo info={info[0]?.info || ""} value={data?.CCCD}/>
                        <ItemSelectInfo info={info[0]?.info || ""} value={data?.Sex}/>
                        <ItemSelectInfo info={info[0]?.info || ""} value={data?.DOB}/>
                        <ItemSelectInfo info={info[0]?.info || ""} value={data?.dantoc}/>
                        <ItemSelectInfo info={info[0]?.info || ""} value={data?.tongiao}/>
                        <ItemSelectInfo info={info[0]?.info || ""} value={data?.quoctich}/>
                        <ItemSelectInfo info={info[0]?.info || ""} value={data?.quequan}/>
                    </View>
                }
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