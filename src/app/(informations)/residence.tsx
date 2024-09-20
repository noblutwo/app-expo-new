import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {router, usePathname} from "expo-router";
import {lightTheme} from "@/styles/theme";
import {InfoDropDown} from "@components/Dropdown/InfoDropDown";
import React, {useState} from "react";
import {EvilIcons} from '@expo/vector-icons';

const dataAdministrative = [
    {
        info: "Họ và tên", value: "Nguyễn Hoàng Anh"
    },
    {
        info: "Số định danh cá nhân", value: "1234562950"
    },
    {
        info: "Giới tính ", value: "Nam"
    },
    {
        info: "Ngày sinh", value: "22-05-2002"
    },
    {
        info: "Dân tộc", value: "Kinh"
    },
    {
        info: "Tôn giáo", value: "Không"
    },
    {
        info: "Quốc tịch", value: "Việt Nam"
    },
    {
        info: "Quê quán", value: "Xã Vân Châu, Huyện Vân Châu, Tỉnh Vân Châu, Thành phố vân châu"
    },
]
const dataResident = [
    {
        info: "Nơi thường trú", value: "Xã Vân Châu, Huyện Vân Châu, Tỉnh Vân Châu, Thành phố vân châu"
    },
    {
        info: "Nơi tạm trú", value: "1234562950"
    },
    {
        info: "Nơi ở hiện tại", value: "Xã Vân Châu, Huyện Vân Châu, Tỉnh Vân Châu, Thành phố vân châu"
    },
    {
        info: "Họ và tên chủ hộ", value: "Nguyễn Hoàng Anh"
    },
    {
        info: "Số định danh chủ hộ", value: "123462050"
    },
    {
        info: "Quan hệ chủ hộ", value: "Con đẻ"
    },
]

function ResidenceScreen() {
    const currentPath = usePathname();
    const [openInfoSoon, setOpenInfoSoon] = useState(true);
    const [openInfoPerson, setOpenInfoPerson] = useState(true);
    console.log("Current path:", currentPath);
    return (
        <ScrollView>
            <View style={styles.container}>
                <InfoDropDown data={dataAdministrative}
                              title={"Thông tin hành chính"}
                              open={openInfoSoon}
                              setOpen={setOpenInfoSoon}
                />
                <View style={styles.appLineBig}/>
                <InfoDropDown data={dataResident}
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