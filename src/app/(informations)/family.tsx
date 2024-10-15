import React, {useEffect, useState} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import InfoDropDownFamily from "@components/Dropdown/InfoDropDownFamily";
import {useAuth} from "@/context/AuthContext";
import {ValueItem} from "@/interface";
import {fetchDataInformation} from "@/api/api";

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
    // const convertJsonMother = JSON.parse(information?.mother)
    // const convertJsonFather = JSON.parse(information?.father)
    useEffect(() => {
        fetchData()
    }, [authUser]);
    return (
        <ScrollView style={styles.container}>
            <InfoDropDownFamily data={dataResident}
                                value={informationMother}
                                title={informationMother?.name || "Nguyễn Mai Định"}
                                open={openInfoHuman}
                                setOpen={setOpenInfoHuman}
            />
            <View style={styles.appLineBig}/>
            <InfoDropDownFamily data={dataResident}
                                value={informationFather}
                                title={informationFather?.name || "Trần Văn Trung"}
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