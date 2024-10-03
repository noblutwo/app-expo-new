import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import AppImage from "@components/Images/ImgReq";
import ItemSelectInfo from "@components/Item/ItemSelectInfo";
import React from "react";
import {useAuth} from "@/context/AuthContext";

const dataAdministrative = [
    {info: "Họ và tên", key: "Name"},
    {info: "Số định danh cá nhân", key: "CCCD"},
    {info: "Giới tính", key: "Sex"},
    {info: "Ngày sinh", key: "DOB"},
    {info: "Dân tộc", key: "dantoc"},
];

export default function InfoCardUser() {
    const {authUser} = useAuth();
    return (
        <View >
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: '700', fontSize: 16, color: '#000'}}>Thông tin cư trú</Text>
            </View>
            <View>
                <ItemSelectInfo info={dataAdministrative[0]?.info} value={authUser?.Name}/>
                <ItemSelectInfo info={dataAdministrative[1]?.info} value={authUser?.Username}/>
                <ItemSelectInfo info={dataAdministrative[2]?.info} value={authUser?.Sex}/>
                <ItemSelectInfo info={dataAdministrative[3]?.info} value={authUser?.DOB}/>
                <ItemSelectInfo info={dataAdministrative[4]?.info} value={authUser?.dantoc}/>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({


});