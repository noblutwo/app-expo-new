import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import AppImage from "@components/Images/ImgReq";
import ItemSelectInfo from "@components/Item/ItemSelectInfo";
import React from "react";

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

export default function InfoDropDownFamily({data, title, open, setOpen, info}: Dropdown) {
    return (
        <View style={styles.containerLayout}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: '700'}}>{title}</Text>
                <TouchableOpacity onPress={() => setOpen(!open)}>
                    <AppImage source={open ? "dropDown" : "dropRight"} style={styles.icon}/>
                </TouchableOpacity>
            </View>
            {open && <View>
                {data?.map((item: any, index: number) => (
                    <ItemSelectInfo key={index} index={index} info={item?.info} value={item?.key}/>
                ))}

            </View>}


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