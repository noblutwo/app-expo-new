import {StyleSheet, Text, View} from "react-native";
import ItemSelectInfo from "@components/Item/ItemSelectInfo";
import React from "react";
import {useAuth} from "@/context/AuthContext";
import {ValueItem} from "@/interface";


const dataResident: ValueItem = {
    name: "Họ và tên",
    sdd: "Số định danh cá nhân",
    sex: "Giới tính",
    date: "Ngày sinh",
    relationship: "Dân tộc"
}
export default function InfoCardUser() {
    const {authUser} = useAuth();
    return (
        <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: '700', fontSize: 16, color: '#000'}}>Thông tin cư trú</Text>
            </View>
            <View>
                <ItemSelectInfo info={dataResident.name} value={authUser?.Name}/>
                <ItemSelectInfo info={dataResident.sdd} value={authUser?.Username}/>
                <ItemSelectInfo info={dataResident.sex} value={authUser?.Sex}/>
                <ItemSelectInfo info={dataResident.date} value={authUser?.DOB}/>
                <ItemSelectInfo info={dataResident.relationship} value={authUser?.dantoc}/>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({});