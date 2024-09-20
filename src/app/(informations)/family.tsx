import {InfoDropDown} from "@components/Dropdown/InfoDropDown";
import React, {useState} from "react";
import {ScrollView, StyleSheet, View} from "react-native";

const dataResident = [
    {
        info: "Số định danh cá nhân", value: "123462950"
    },
    {
        info: "Ngày sinh", value: "12-05-1973"
    },
    {
        info: "Giới tính", value: "Nữ"
    },
    {
        info: "Quan hệ với chủ hộ", value: "Chủ hộ"
    },

]
const dataHuman = [
    {
        info: "Số định danh cá nhân", value: "123462950"
    },
    {
        info: "Ngày sinh", value: "12-05-1978"
    },
    {
        info: "Giới tính", value: "Nam"
    },
    {
        info: "Quan hệ với chủ hộ", value: "Chồng"
    },

]

function Family() {
    const [openInfoSoon, setOpenInfoSoon] = useState(true);
    const [openInfoHuman, setOpenInfoHuman] = useState(true);
    return (
        <ScrollView style={styles.container}>
            <InfoDropDown data={dataResident}
                          title={"Nguyễn Thị Định"}
                          open={openInfoHuman}
                          setOpen={setOpenInfoHuman}
            />
            <View style={styles.appLineBig}/>
            <InfoDropDown data={dataHuman}
                          title={"Nguyễn Văn Trung"}
                          open={openInfoSoon}
                          setOpen={setOpenInfoSoon}
            />
            <View style={styles.appLineBig}/>

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

export default Family