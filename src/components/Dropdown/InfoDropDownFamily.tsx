import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import AppImage from "@components/Images/ImgReq";
import ItemSelectInfo from "@components/Item/ItemSelectInfo";
import React from "react";
import {Dropdown} from "@/interface";


export default function InfoDropDownFamily({data, title, open, setOpen, value}: Dropdown) {
    return (
        <ScrollView style={styles.containerLayout}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: '700'}}>{title}</Text>
                <TouchableOpacity onPress={() => setOpen(!open)}>
                    <AppImage source={open ? "dropDown" : "dropRight"} style={styles.icon}/>
                </TouchableOpacity>
            </View>
            {open &&
                <View style={{marginTop: 12}}>
                    <ItemSelectInfo info={data?.sdd} value={value?.sdd}/>
                    <ItemSelectInfo info={data?.date} value={value?.date}/>
                    <ItemSelectInfo info={data?.sex} value={value?.sex}/>
                    <ItemSelectInfo info={data?.relationship} value={value?.relationship}/>
                </View>
            }
        </ScrollView>
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