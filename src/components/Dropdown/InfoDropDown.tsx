import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import AppImage from "@components/Images/ImgReq";
import ItemSelectInfo from "@components/Item/ItemSelectInfo";

interface Item {
    info: string;
    key: string; // Added key for easy access
}

interface Dropdown {
    data: any; // The authUser object
    title: string;
    open: boolean;
    setOpen: (open: boolean) => void;
    info: Item[];
    user: any
}

export function InfoDropDown({data, title, open, setOpen, info, user}: Dropdown) {
    return (
        <View style={styles.containerLayout}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: '700', fontSize: 16, color: '#000'}}>{title}</Text>
                <TouchableOpacity onPress={() => setOpen(!open)}>
                    <AppImage source={open ? "dropDown" : "dropRight"} style={styles.icon}/>
                </TouchableOpacity>
            </View>
            {info[0]?.info === "Nơi thường trú" ? open && (
                <View>
                    <ItemSelectInfo info={info[0]?.info} value={user?.Address}/>
                    <ItemSelectInfo info={info[1]?.info} value={""}/>
                    <ItemSelectInfo info={info[2]?.info} value={user?.Address}/>
                    <ItemSelectInfo info={info[3]?.info} value={data?.name}/>
                    <ItemSelectInfo info={info[4]?.info} value={data?.sdd}/>
                    <ItemSelectInfo info={info[5]?.info} value={data?.relationship}/>
                </View>
            ) : open && (
                <View>
                    <ItemSelectInfo info={info[0]?.info} value={user?.Name}/>
                    <ItemSelectInfo info={info[1]?.info} value={user?.CCCD}/>
                    <ItemSelectInfo info={info[2]?.info} value={user?.Sex}/>
                    <ItemSelectInfo info={info[3]?.info} value={user?.DOB}/>
                    <ItemSelectInfo info={info[4]?.info} value={data?.nation}/>
                    <ItemSelectInfo info={info[5]?.info} value={data?.religion}/>
                    <ItemSelectInfo info={info[6]?.info} value={data?.nationality}/>
                    <ItemSelectInfo info={info[7]?.info} value={data?.hometown}/>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    containerLayout: {
        padding: '5%',
    },
    icon: {
        width: 20,
        height: 20,
    },
});