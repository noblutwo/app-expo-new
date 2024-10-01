import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {router, usePathname} from "expo-router";
import {lightTheme} from "@/styles/theme";
import {InfoDropDown} from "@components/Dropdown/InfoDropDown";
import React, {useState} from "react";
import {EvilIcons} from '@expo/vector-icons';
import {useAuth} from "@/context/AuthContext";

const dataAdministrative = [
    {
        info: "Họ và tên"
    },
    {
        info: "Số định danh cá nhân"
    },
    {
        info: "Giới tính "
    },
    {
        info: "Ngày sinh"
    },
    {
        info: "Dân tộc"
    },
    {
        info: "Tôn giáo"
    },
    {
        info: "Quốc tịch"
    },
    {
        info: "Quê quán"
    },
]
const dataResident = [
    {
        info: "Nơi thường trú"
    },
    {
        info: "Nơi tạm trú"
    },
    {
        info: "Nơi ở hiện tại"
    },
    {
        info: "Họ và tên chủ hộ"
    },
    {
        info: "Số định danh chủ hộ"
    },
    {
        info: "Quan hệ chủ hộ"
    },
]

function ResidenceScreen() {
    const currentPath = usePathname();
    const [openInfoSoon, setOpenInfoSoon] = useState(true);
    const [openInfoPerson, setOpenInfoPerson] = useState(true);
    const {authUser} = useAuth();
    console.log("authUser", authUser)
    return (
        <ScrollView>
            <View style={styles.container}>
                <InfoDropDown info={dataAdministrative}
                              data={authUser}
                              title={"Thông tin hành chính"}
                              open={openInfoSoon}
                              setOpen={setOpenInfoSoon}
                />
                <View style={styles.appLineBig}/>
                <InfoDropDown info={dataResident}
                              data={dataResident}
                              title={"Thông tin cư trú"}
                              open={openInfoPerson}
                              setOpen={setOpenInfoPerson}
                />
                <View style={styles.containerLayout}>
                    <TouchableOpacity onPress={() => router.push("/(informations)/family")} style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderWidth: 1,
                        padding: 15,
                        borderRadius: 5,
                        borderColor: "#e3e3e3"
                    }}>
                        <Text>Thành viên trong hộ gia đình (2)</Text>
                        <EvilIcons name="chevron-right" size={24} color="black"/>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    containerLayout: {
        padding: '5%'
    },
    appLineBig: {
        height: 3,
        backgroundColor: '#eaeaea',
    },

});

export default ResidenceScreen