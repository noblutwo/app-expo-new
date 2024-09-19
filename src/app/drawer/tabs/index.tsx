import React, {useState} from "react";
import {View, SafeAreaView, ScrollView, Text, StyleSheet, TouchableOpacity} from "react-native";
import {EvilIcons} from "@expo/vector-icons";
import BackgroundImage from "@/components/Images/BackgroundImage";
import AppImage, {imageSources} from "@/components/Images/ImgReq";
import {useStyles} from "@/styles/styles";
import SliderLayOutHome from "@/components/ScreenWithOverlap/ScreenWithOverlap";
import ModalResidence from "@components/Modal/ModalResidence";
import {router} from "expo-router";

const serviceItems = [
    {icon: "thutuchanhchinh", title: "Thủ tục, hành chính"},
    {icon: "ansinhxahoi", title: "An sinh, xã hội"},
    {icon: "phongchongdichbenh", title: "Hồ sơ, sức khỏe"},
    {icon: "dichvukhac", title: "Dịch vụ, khác"},
];

const data = [
    {id: 1, picture: "tagetCccd", title: "Thẻ Căn cước/ CCCD"},
    {id: 2, picture: "giaypheplaixe", title: "Giấy phép lái xe"},
    {id: 3, picture: "ic_bhyt", title: "Thẻ BHYT"},
    {id: 4, picture: "ic_thongtincutru", title: "Thông tin cư trú"},
    {id: 5, picture: "ic_dangkyxe", title: "Đăng ký xe"},
    {id: 6, picture: "ic_nguoiphuthuoc", title: "Người phụ thuộc"},
];

const ServiceItem = ({icon, title, showNew}: any) => {
    const globalStyle = useStyles();
    return (
        <View style={globalStyle.serviceItemHome}>
            {showNew && <Text style={globalStyle.serviceItemTextHome}>Mới</Text>}
            <AppImage source={icon} style={globalStyle.iconserviceItemHome}/>
            <View style={globalStyle.textContainer}>
                {title.split(",").map((word: string, wordIndex: number) => (
                    <Text key={wordIndex} style={globalStyle.serviceText}>
                        {word.trim()}
                    </Text>
                ))}
            </View>
        </View>
    );
};

const ScreenWithOverlap = () => {
    const globalStyle = useStyles();

    const renderProfileImage = (source: string) => (
        <View style={{flex: 1}}>
            <AppImage source={source} style={globalStyle.profileImageHomeBottom}/>
        </View>
    );

    const renderHeader = () => (
        <View style={globalStyle.headerContainer}>
            <BackgroundImage
                source={imageSources["bg_head"]}
                style={globalStyle.headerImage}
            >
                <View style={[globalStyle.headerContainerHome, {paddingHorizontal: 20}]}>
                    <View style={[globalStyle.profileContainerHome, {justifyContent: "space-between"}]}>
                        <AppImage
                            source="https://randomuser.me/api/portraits/women/26.jpg"
                            style={globalStyle.profileImageHome}
                        />
                    </View>
                    <View style={globalStyle.nameContainerHome}>
                        <View style={globalStyle.nameTagHome}>
                            <Text style={[globalStyle.textLogin, {fontWeight: "600"}]}>
                                Định danh mức 2
                            </Text>
                            <AppImage source="dinh_danh" style={globalStyle.identityIconHome}/>
                        </View>
                        <Text style={[globalStyle.textLogin, {fontWeight: "bold", color: "white", fontSize: 18}]}>
                            Nguyễn văn A
                        </Text>
                    </View>
                    <View style={globalStyle.searchButtonHome}>
                        <EvilIcons name="search" size={24} color="black"/>
                    </View>
                </View>
                <View style={[globalStyle.profileContainerHome, {
                    justifyContent: "space-between",
                    marginVertical: 20,
                    paddingHorizontal: 10
                }]}>
                    {renderProfileImage("qr_cccd")}
                    {renderProfileImage("qr_dddt")}
                </View>
            </BackgroundImage>
        </View>
    );

    const renderServiceItems = () => (
        <View style={globalStyle.serviceGroupContainerHome}>
            {serviceItems.map((item, index) => (
                <ServiceItem
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    showNew={item.icon !== "phongchongdichbenh"}
                />
            ))}
        </View>
    );

    const renderFavoriteUtilities = () => {
        const [modalVisible, setModalVisible] = useState(false);
        const handlerModal = (id: number) => {
            if (id !== 4) return
            setModalVisible(true)
        }
        return (
            <View style={styles.favoriteUtilitiesContainer}>
                <View style={styles.favoriteUtilitiesHeader}>
                    <Text style={[globalStyle.textLogin, {fontWeight: "bold"}]} onPress={() => router.push("../favorites/ResidenceInformation")}>
                        Tiện ích yêu thích
                    </Text>
                    <View style={styles.editContainer}>
                        <Text style={globalStyle.textLogin}>Chỉnh sửa</Text>
                        <AppImage source="fav_edit" style={styles.editIcon}/>
                    </View>
                </View>
                <View style={globalStyle.containerOverlap}>
                    {[0, 1].map((rowIndex) => (
                        <View key={rowIndex} style={globalStyle.rowOverlap}>
                            {data.slice(rowIndex * 3, (rowIndex + 1) * 3).map((item) => (
                                <TouchableOpacity key={item.id} style={globalStyle.itemOverlap}
                                                  onPress={() => handlerModal(item?.id)}>
                                    <AppImage source={item.picture} style={globalStyle.imageOverlap}/>
                                    <Text style={globalStyle.titleOverlap}>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    ))}
                </View>
                <ModalResidence modalVisible={modalVisible} setModalVisible={setModalVisible}/>
            </View>
        )

    };

    return (
        <SafeAreaView style={globalStyle.container}>
            {renderHeader()}
            <ScrollView style={styles.bottomSectionLayoutHome}>
                <View style={globalStyle.contentSectionLayoutHome}>
                    <Text style={globalStyle.textSectionLayoutHome}>Nhóm dịch vụ</Text>
                    {renderServiceItems()}
                    <SliderLayOutHome/>
                </View>
                {renderFavoriteUtilities()}
                <View style={{flexDirection: 'column'}}>
                    <Text style={[globalStyle.textLogin, {fontWeight: "bold",}]}>
                        Thông tin
                    </Text>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={[globalStyle.textLogin, {fontWeight: "bold",}]} >
                            Thông tin
                        </Text>
                        <Text style={[globalStyle.textLogin, {fontWeight: "bold",}]}>
                            Thông tin
                        </Text>
                        <Text style={[globalStyle.textLogin, {fontWeight: "bold",}]}>
                            Thông tin
                        </Text>
                        <Text style={[globalStyle.textLogin, {fontWeight: "bold",}]}>
                            Thông tin
                        </Text>
                        <Text style={[globalStyle.textLogin, {fontWeight: "bold",}]}>
                            Thông tin
                        </Text>
                        <Text style={[globalStyle.textLogin, {fontWeight: "bold",}]}>
                            Thông tin
                        </Text>
                        <Text style={[globalStyle.textLogin, {fontWeight: "bold",}]}>
                            Thông tin
                        </Text>
                        <Text style={[globalStyle.textLogin, {fontWeight: "bold",}]}>
                            Thông tin
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bottomSectionLayoutHome: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: -100,
    },
    favoriteUtilitiesContainer: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 20,
    },
    favoriteUtilitiesHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    editContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    editIcon: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
});

export default ScreenWithOverlap;