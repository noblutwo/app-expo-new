import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {router, usePathname} from "expo-router";
import {InfoDropDown} from "@components/Dropdown/InfoDropDown";
import React, {useEffect, useState} from "react";
import {EvilIcons} from '@expo/vector-icons';
import {useAuth} from "@/context/AuthContext";
import {fetchDataInformation} from "@/api/api";

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

const dataResident = [
    {info: "Nơi thường trú", key: "Address"},
    {info: "Nơi tạm trú", key: ""},
    {info: "Nơi ở hiện tại", key: "Address"},
    {info: "Họ và tên chủ hộ", key: ""},
    {info: "Số định danh cá nhân chủ hộ", key: ""},
    {info: "Quan hệ với chủ hộ", key: "quanhe"},
];

function ResidenceScreen() {
    const {authUser} = useAuth();
    const [openInfoAdministrative, setOpenInfoAdministrative] = useState(true);
    const [openInfoResident, setOpenInfoResident] = useState(true);
    const [information, setInformation] = useState<any>()
    const [informationMother, setInformationMother] = useState<any>()
    const [informationFather, setInformationFather] = useState<any>()
    const fetchData = async () => {
        try {
            const fetchData = await fetchDataInformation(authUser?.Username)
            const personDataMother = JSON.parse(fetchData[0].mother);
            const personDataFather = JSON.parse(fetchData[0].father);
            setInformation(fetchData[0])
            setInformationMother(personDataMother)
            setInformationFather(personDataFather)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchData()
    }, [authUser]);
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <InfoDropDown
                user={authUser}
                info={dataAdministrative}
                data={information}
                title={"Thông tin hành chính"}
                open={openInfoAdministrative}
                setOpen={setOpenInfoAdministrative}
            />
            <View style={{height: 3, backgroundColor: '#eaeaea'}}/>
            <InfoDropDown
                user={information}
                info={dataResident}
                data={informationMother}
                title={"Thông tin cư trú"}
                open={openInfoResident}
                setOpen={setOpenInfoResident}
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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    containerLayout: {
        paddingHorizontal: '5%',
        paddingBottom:20
    },
    appLineBig: {
        height: 3,
        backgroundColor: '#eaeaea',
    },
    touchable: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        padding: 15,
        borderRadius: 5,
        borderColor: "#e3e3e3",
    },
});

export default ResidenceScreen;