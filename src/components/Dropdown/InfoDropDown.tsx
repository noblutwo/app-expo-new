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
    info: Item[]; // Array containing info objects
}

export function InfoDropDown({data, title, open, setOpen, info}: Dropdown) {
    console.log("data", data)
    return (
        <View style={styles.containerLayout}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: '700'}}>{title}</Text>
                <TouchableOpacity onPress={() => setOpen(!open)}>
                    <AppImage source={open ? "dropDown" : "dropRight"} style={styles.icon}/>
                </TouchableOpacity>
            </View>
            {info[0]?.info === "Nơi thường trú" ? open && (
                <View>
                    <ItemSelectInfo info={info[0]?.info} value={data?.Address}/>
                    <ItemSelectInfo info={info[1]?.info} value={""}/>
                    <ItemSelectInfo info={info[2]?.info} value={data?.Address}/>
                    <ItemSelectInfo info={info[3]?.info} value={data?.me}/>
                    <ItemSelectInfo info={info[4]?.info} value={"122462960"}/>
                    <ItemSelectInfo info={info[5]?.info} value={"Con đẻ"}/>

                </View>
            ) : open && (
                <View>
                    <ItemSelectInfo info={info[0]?.info} value={data?.Name}/>
                    <ItemSelectInfo info={info[1]?.info} value={data?.CCCD}/>
                    <ItemSelectInfo info={info[2]?.info} value={data?.Sex}/>
                    <ItemSelectInfo info={info[3]?.info} value={data?.DOB}/>
                    <ItemSelectInfo info={info[4]?.info} value={data?.dantoc}/>
                    <ItemSelectInfo info={info[5]?.info} value={data?.tongiao}/>
                    <ItemSelectInfo info={info[6]?.info} value={data?.quoctich}/>
                    <ItemSelectInfo info={info[7]?.info} value={data?.quequan}/>
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