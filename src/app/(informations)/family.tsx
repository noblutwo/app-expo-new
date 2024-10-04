import {InfoDropDown} from "@components/Dropdown/InfoDropDown";
import React, {useState} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import InfoDropDownFamily from "@components/Dropdown/InfoDropDownFamily";

const dataResident = [
    {
        info: "Số định danh cá nhân", key: "123462950"
    },
    {
        info: "Ngày sinh", key: "12-05-1973"
    },
    {
        info: "Giới tính", key: "Nữ"
    },
    {
        info: "Quan hệ với chủ hộ", key: "Chủ hộ"
    },

]
const dataHuman = [
    {
        info: "Số định danh cá nhân", key: "123462950"
    },
    {
        info: "Ngày sinh", key: "12-05-1978"
    },
    {
        info: "Giới tính", key: "Nam"
    },
    {
        info: "Quan hệ với chủ hộ", key: "Chồng"
    },

]


function Family() {
    const [openInfoSoon, setOpenInfoSoon] = useState(true);
    const [openInfoHuman, setOpenInfoHuman] = useState(true);
    console.log("openInfoHuman", openInfoHuman)
    return (
        <ScrollView style={styles.container}>
            <InfoDropDownFamily data={dataResident}
                                title={"Nguyễn Thị Định"}
                                open={openInfoHuman}
                                setOpen={setOpenInfoHuman}
                                info={dataResident}
            />
            <View style={styles.appLineBig}/>
            <InfoDropDownFamily data={dataHuman}
                                title={"Nguyễn Văn Trung"}
                                open={openInfoSoon}
                                setOpen={setOpenInfoSoon}
                                info={dataResident}
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