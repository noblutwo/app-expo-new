import React, {useState} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import InfoDropDownFamily from "@components/Dropdown/InfoDropDownFamily";
import {useAuth} from "@/context/AuthContext";
import {parseInfo} from "@/constants";
import {ValueItem} from "@/interface";

const dataResident: ValueItem = {
    sdd: "Số định danh cá nhân",
    date: "Ngày sinh",
    sex: "Giới tính",
    relationship: "Quan hệ với chủ hộ"
}


function Family() {
    const {authUser} = useAuth();
    const [openInfoSoon, setOpenInfoSoon] = useState(true);
    const [openInfoHuman, setOpenInfoHuman] = useState(true);
    const motherInfo = parseInfo(authUser.mother);
    const fatherInfo = parseInfo(authUser.father);
    console.log("motherInfo", motherInfo)
    return (
        <ScrollView style={styles.container}>
            <InfoDropDownFamily data={dataResident}
                                value={motherInfo}
                                title={motherInfo.name || "Nguyễn Mai Định"}
                                open={openInfoHuman}
                                setOpen={setOpenInfoHuman}
            />
            <View style={styles.appLineBig}/>
            <InfoDropDownFamily data={dataResident}
                                value={fatherInfo}
                                title={fatherInfo?.name || "Trần Văn Trung"}
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