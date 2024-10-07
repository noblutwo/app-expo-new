import React, { useState, useRef, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import BackgroundImage from "@/components/Images/BackgroundImage";
import AppImage, { imageSources } from "@/components/Images/ImgReq";
import { useStyles } from "@/styles/styles";
import SliderLayOutHome from "@/components/ScreenWithOverlap/ScreenWithOverlap";
import { lightTheme } from "@/styles/theme";
import { Colors, hResponsive, pResponsive } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import ModalResidence from "@/components/Modal/ModalResidence";
import { Feather } from "@expo/vector-icons";
import { useAuth } from "@/context/AuthContext";
import { ModalQrCode } from "@/components/Modal/ModalQrCode";
import { ModalInformation } from "@/components/Modal/ModalInformation";

const { width, height } = Dimensions.get("window");

const serviceItems = [
  { icon: "thutuchanhchinh", title: "Thủ tục, hành chính" },
  { icon: "ansinhxahoi", title: "An sinh, xã hội" },
  { icon: "phongchongdichbenh", title: "Hồ sơ sức, khỏe" },
  { icon: "dichvukhac", title: "Dịch vụ, khác" },
];

const data = [
  { id: 1, picture: "tagetCccd", title: "Thẻ Căn cước/ CCCD" },
  { id: 2, picture: "giaypheplaixe", title: "Giấy phép lái xe" },
  { id: 3, picture: "ic_bhyt", title: "Thẻ BHYT" },
  { id: 4, picture: "ic_thongtincutru", title: "Thông tin cư trú" },
  { id: 5, picture: "ic_dangkyxe", title: "Đăng ký xe" },
  { id: 6, picture: "ic_nguoiphuthuoc", title: "Người phụ thuộc" },
];

const ServiceItem = ({ icon, title, showNew }: any) => {
  const globalStyle = useStyles();

  return (
    <View style={globalStyle.serviceItemHome}>
      {showNew && <Text style={globalStyle.serviceItemTextHome}>Mới</Text>}
      <AppImage source={icon} style={globalStyle.iconserviceItemHome} />
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
  const [isInformation, setIsInformation] = useState(false);
  const [type, setType] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModalDd, setOpenModalDd] = useState(false);
  const [modalType, setModalType] = useState<string>("");
  const [openId, setOpenId] = useState<number>(0)
  const { authUser, hiddenNoticifation } = useAuth();
  const globalStyle = useStyles();
  const scrollY = useRef(new Animated.Value(0)).current;

  const showQrCode = (title: string, setOpen: any) => {
    setModalType(title);
    setOpen(true);
  };

  const openModalInfor = (title: string) => {
    setType(title);
    setIsInformation(true);
  };

  const renderProfileImage = (
    source: string,
    open: boolean,
    setOpen: any,
    image: string
  ) => (
    <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() => showQrCode(source, setOpen)}
    >
      <AppImage source={source} style={globalStyle.profileImageHomeBottom} />
      <ModalQrCode
        open={open}
        setOpen={setOpen}
        title={modalType}
        image={image}
      />
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <View style={[globalStyle.headerContainer, { paddingVertical: 28 }]}>
      <BackgroundImage
        source={imageSources["bg_head"]}
        style={styles.headerImage}
      >
        <View style={[styles.headerContainerHome, { paddingHorizontal: 20 }]}>
          <View
            style={[
              styles.profileContainerHome,
              { justifyContent: "space-between" },
            ]}
          >
            <TouchableOpacity onPress={() => openModalInfor("information")}>
              <AppImage
                source={authUser?.Image!}
                style={styles.profileImageHome}
              />
              <ModalInformation
                open={isInformation}
                setOpen={setIsInformation}
                title={type}
                image={""}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.nameContainerHome}>
            <View style={styles.nameTagHome}>
              <Text
                style={[
                  styles.textLogin,
                  { fontWeight: "bold", paddingHorizontal: 2, color:'#3A3736' },
                ]}
              >
                {authUser?.designationLevel!}
              </Text>
              <AppImage source="dinh_danh" style={styles.identityIconHome} />
            </View>
            <Text
              style={[
                styles.textLogin,
                { fontWeight: "bold", color: "white", fontSize: 22 },
              ]}
            >
              {authUser?.Name!}
            </Text>
          </View>
          <View style={styles.searchButtonHome}>
            <EvilIcons name="search" size={24} color="black" />
          </View>
        </View>
        <View
          style={[
            styles.profileContainerHome,
            {
              justifyContent: "space-between",
              marginVertical: 10,
              paddingHorizontal: 15,
            },
          ]}
        >
          {renderProfileImage("qr_cccd", openModal, setOpenModal, "qrCccd")}
          {renderProfileImage("qr_dddt", openModalDd, setOpenModalDd, "qrScan")}
        </View>
      </BackgroundImage>
    </View>
  );

  const renderServiceItems = () => (
    <View style={styles.serviceGroupContainerHome}>
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
    const handlerModal = (id: number) => {
      if(id === 2 || id === 4) {
         setOpenId(id)
      setModalVisible(true);
      } else return null
     
    };
    return (
      <View style={styles.favoriteUtilitiesContainer}>
        <View style={styles.favoriteUtilitiesHeader}>
          <View>
            <Text
              style={[styles.textSectionLayoutHome, { fontWeight: "bold" }]}
            >
              Tiện ích yêu thích
            </Text>
          </View>

          <View style={styles.editContainer}>
            <Text style={styles.textLogin}>Chỉnh sửa</Text>
            <AppImage source="fav_edit" style={styles.editIcon} />
          </View>
        </View>
        <View style={styles.containerOverlap}>
          {[0, 1].map((rowIndex) => (
            <View key={rowIndex} style={[globalStyle.rowOverlap]}>
              {data.slice(rowIndex * 3, (rowIndex + 1) * 3).map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={[globalStyle.itemOverlap]}
                  onPress={() => handlerModal(item?.id)}
                >
                  <AppImage
                    source={item.picture}
                    style={globalStyle.imageOverlap}
                  />
                  <Text style={[styles.textLogin, {textAlign: 'center'}]}>{item.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>
    );
  };

  interface ColumnProps {
    titleInfor: string;
    icon1: string;
    icon2: string;
    text: string;
    isFinite?: boolean;
  }

  const renderColumn = ({
    titleInfor,
    icon1,
    icon2,
    text,
    isFinite,
  }: ColumnProps) => (
    <View style={[styles.column]}>
      <View style={[styles.titleContainer, { marginBottom: 5 }]}>
        {isFinite ? (
          <AppImage
            source={icon1}
            style={[styles.icon, { marginBottom: 20 }]}
          />
        ) : (
          <Ionicons
            name="newspaper-outline"
            size={24}
            color={Colors.colorButtonLogin}
            style={{ marginBottom: 20 }}
          />
        )}
        <Text style={styles.titleText}>{titleInfor}</Text>
      </View>
      <View style={styles.container}>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          minimumFontScale={0.5}
          style={styles.textItem}
        >
          {text}
        </Text>
      </View>
      <View
        style={[
          styles.editContainer,
          { flex: 1, backgroundColor: "white", paddingTop: 10 },
        ]}
      >
        <AppImage source={icon2} style={styles.icImage} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 5,
        }}
      >
        <Feather name="calendar" size={24} color="#9c9c9c" />
        <Text style={{ color: "#9c9c9c", paddingHorizontal: 5 }}>
          {isFinite ? "12-09-2024" : "27-09-2024"}
        </Text>
      </View>
    </View>
  );

  const bottomSheetRadius = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [20, 0],
    extrapolate: "clamp",
  });

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {modalVisible && (
          <ModalResidence
              openId={openId}
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
          />
      )}
      <Animated.View
        style={[
          styles.bottomSectionLayoutHome,
          {
            borderTopLeftRadius: bottomSheetRadius,
            borderTopRightRadius: bottomSheetRadius,
          },
        ]}
      >
        <Animated.ScrollView
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={16}
          style={styles.scrollView}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          <View style={styles.contentSectionLayoutHome}>
            <Text style={styles.textSectionLayoutHome}>Nhóm dịch vụ</Text>
            {renderServiceItems()}
            <SliderLayOutHome />
          </View>
          {renderFavoriteUtilities()}
          <View style={styles.container}>
            <Text style={[styles.textSectionLayoutHome, styles.title]}>Thông tin</Text>
            <View style={styles.rowContainer}>
              {renderColumn({
                titleInfor: "Cảnh báo thủ đoạn tội phạm",
                icon1: "warning",
                icon2: "home_cbld",
                text: "Thủ đoạn lừa đảo chiếm đoạt tài sản lợi dụng tình...",
                isFinite: true,
              })}
              <View
                style={{
                  width: 1.5,
                  height: "100%",
                  backgroundColor: "#dddddd",
                }}
              />
              {renderColumn({
                titleInfor: "Tin tức",
                icon1: "newspaper-outline",
                icon2: "home_tbt_cuba",
                text: "Bí thư thứ nhất, Chủ tịch nước Cuba chủ trì Lễ đón...",
                isFinite: false,
              })}
            </View>
          </View>
          <View style={{ marginBottom: 60 }} />
        </Animated.ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSectionLayoutHome: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: -130,
    overflow: "hidden",
  },
  scrollView: {
    flex: 1,
    height: height,
  },
  favoriteUtilitiesContainer: {
    flexDirection: "column",
    paddingHorizontal: 15,
  },
  favoriteUtilitiesHeader: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  profileImageHome: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#EEDC76",
  },
  nameContainerHome: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  nameTagHome: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    gap: 10,
  },
  identityIconHome: {
    width: 18,
    height: 18,
  },
  searchButtonHome: {
    width: 30,
    height: 30,
    paddingBottom: 2,
    borderRadius: 50,
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImageHomeBottom: {
    width: "100%",
    height: 60,
    borderRadius: 10,
  },
  textSectionLayoutHome: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: lightTheme.fontSizes.fontFamilyRegular,
    color:"#3A3736"
  },
  serviceItemHome: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  serviceItemTextHome: {
    position: "absolute",
    textAlign: "center",
    top: -15,
    width: 40,
    paddingVertical: 1,
    borderRadius: 50,
    backgroundColor: Colors.colorButtonLogin,
    color: "white",
    left: 50,
  },
  iconserviceItemHome: {
    width: 40,
    height: 40,
  },
  serviceItemTitleHome: {},
  textContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  serviceText: {
    textAlign: "center",
    fontSize: 13,
    fontFamily: lightTheme.fontSizes.fontFamilyRegular,
    color: lightTheme.colors.text
  },
  titleLayoutHome: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 40,
    fontWeight: "700",
    fontFamily: "sans-serif",
    paddingHorizontal: 10,
    width: 280,
  },

  rowOverlap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  imageOverlap: {
    width: 50,
    height: 50,
    marginBottom: 10,
    resizeMode: "cover",
  },
  titleOverlap: {
    textAlign: "center",
  },
  containerSectionContainerHome: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topSectionHome: {
    flex: 1,
    height: "100%",
  },
  bottomSectionHome: {
    flex: 1,
  },
  childBottomSectionHome: {
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "black",
    width: width,
    position: "absolute",
    top: 700,
    left: 0,
  },
  backgroundImageHome: {
    width: width,
    height: 200,
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    paddingVertical: 20,
    marginTop: 5,
  },
  headerContainer: {
    height: 300,
  },
  headerContainerHome: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  profileContainerHome: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  contentSectionLayoutHome: {
    paddingHorizontal: 15,
    paddingTop: 15,
    width: width,
  },
  serviceGroupContainerHome: {
    width: width * 0.9,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  slideLayoutHome: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  itemOverlap: {
    width: width,
    alignItems: "center",
  },
  textLogin: {
    fontSize: pResponsive(13),
    fontFamily: lightTheme.fontFamilies.sansSerif,
    color: '#383637',
  },
  title: {
    fontSize: 16,
    // textAlign: "start",
    marginBottom: 10,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    paddingHorizontal: "3%",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    width: width,
    paddingHorizontal: 20,
    borderRightWidth: 1,
    borderRightColor: "black",
    height: "100%",
  },
  column: {
    flex: 1,
    flexDirection: "column",
    borderBottomColor: "#e3e3e3",
    borderBottomWidth: 1,
    width: "48%",
    paddingHorizontal: "3%",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    width: 22,
    height: 23,
    marginRight: 5,
  },
  titleText: {
    color: Colors.colorTextLogin,
    fontWeight: "bold",
    height: 40,
    width: 150,
    paddingHorizontal: 5,
  },
  icImage: {
    width: "100%",
    height: hResponsive(100),
    borderRadius: 20,
  },
  containerOverlap: {
    paddingVertical: 5,
  },
  textItem: {
    fontFamily: lightTheme.fontSizes.fontFamilyRegular,
    fontWeight: "700",
    fontSize: 16,
  },
});

export default ScreenWithOverlap;
