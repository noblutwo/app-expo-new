import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import AppImage from "@components/Images/ImgReq";
import ItemSelectInfo from "@components/Item/ItemSelectInfo";
import React from "react";

const dataAdministrative = [
    {info: "Họ và tên", key: "Name"},
    {info: "Số định danh cá nhân", key: "CCCD"},
    {info: "Giới tính", key: "Sex"},
    {info: "Ngày sinh", key: "DOB"},
    {info: "Dân tộc", key: "dantoc"},
    {info: "Tôn giáo", key: "tongiao"},
    {info: "Quốc tịch", key: "quoctich"},
    {info: "Quê quán", key: "quequan"},
];

export default function InfoCardUser() {
    return (
        <View style={styles.containerLayout}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: '700', fontSize: 16, color: '#000'}}>{title}</Text>
                <TouchableOpacity onPress={() => setOpen(!open)}>
                    <AppImage source={open ? "dropDown" : "dropRight"} style={styles.icon}/>
                </TouchableOpacity>
            </View>
            <View>
                <ItemSelectInfo info={info[0]?.info} value={data?.Address}/>
                <ItemSelectInfo info={info[1]?.info} value={""}/>
                <ItemSelectInfo info={info[2]?.info} value={data?.Address}/>
                <ItemSelectInfo info={info[3]?.info} value={data?.me}/>
                <ItemSelectInfo info={info[4]?.info} value={"122462960"}/>
                <ItemSelectInfo info={info[5]?.info} value={"Con đẻ"}/>
            </View>
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