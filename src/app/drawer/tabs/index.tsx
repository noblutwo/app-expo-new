import React, { useState, useRef } from "react";
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
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons"
import ModalResidence from "@/components/Modal/ModalResidence";

const { width, height } = Dimensions.get("window");

const serviceItems = [
  { icon: "thutuchanhchinh", title: "Thủ tục, hành chính" },
  { icon: "ansinhxahoi", title: "An sinh, xã hội" },
  { icon: "phongchongdichbenh", title: "Hồ sơ, sức khỏe" },
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
  const globalStyle = useStyles();
  const [modalVisible, setModalVisible] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderProfileImage = (source: string) => (
    <View style={{ flex: 1 }}>
      <AppImage source={source} style={globalStyle.profileImageHomeBottom} />
    </View>
  );

  const renderHeader = () => (
    <View style={globalStyle.headerContainer}>
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
            <AppImage
              source="https://randomuser.me/api/portraits/women/26.jpg"
              style={styles.profileImageHome}
            />
          </View>
          <View style={styles.nameContainerHome}>
            <View style={styles.nameTagHome}>
              <Text style={[styles.textLogin, { fontWeight: "600" }]}>
                Định danh mức 2
              </Text>
              <AppImage source="dinh_danh" style={styles.identityIconHome} />
            </View>
            <Text
              style={[
                styles.textLogin,
                { fontWeight: "bold", color: "white", fontSize: 18 },
              ]}
            >
              Nguyễn văn A
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
              marginVertical: 20,
              paddingHorizontal: 10,
            },
          ]}
        >
          {renderProfileImage("qr_cccd")}
          {renderProfileImage("qr_dddt")}
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
      if (id !== 4) return;
      setModalVisible(true);
    };
    return (
      <View style={styles.favoriteUtilitiesContainer}>
        <View style={styles.favoriteUtilitiesHeader}>
          <Text style={[styles.textLogin, { fontWeight: "bold" }]}>
            Tiện ích yêu thích
          </Text>
          <View style={styles.editContainer}>
            <Text style={styles.textLogin}>Chỉnh sửa</Text>
            <AppImage source="fav_edit" style={styles.editIcon} />
          </View>
        </View>
        <View style={styles.containerOverlap}>
          {[0, 1].map((rowIndex) => (
            <View key={rowIndex} style={globalStyle.rowOverlap}>
              {data.slice(rowIndex * 3, (rowIndex + 1) * 3).map((item) => (
                <TouchableOpacity key={item.id} style={globalStyle.itemOverlap} onPress={() => handlerModal(item?.id)}>
                  <AppImage
                    source={item.picture}
                    style={globalStyle.imageOverlap}
                  />
                  <Text style={globalStyle.titleOverlap}>{item.title}</Text>
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
    text:string
    isFinite?: boolean;
  }

  const renderColumn = ({
    titleInfor,
    icon1,
    icon2,
    text,
    isFinite,
  }: ColumnProps) => (
    <View style={[styles.column, isFinite ? {marginLeft: 20} : {
      marginLeft: 0,
    }]}>
      <View style={[styles.titleContainer,{marginBottom:5}]}>
        {isFinite ? (
          <AppImage source={icon1} style={[styles.icon, {marginBottom:20}]} />
        ) : (
          <Ionicons
            name="newspaper-outline"
            size={24}
            color={Colors.colorButtonLogin}
            style={{marginBottom:20}}
          />
        )}
        <Text style={styles.titleText}>{titleInfor}</Text>
      </View>
      <Text adjustsFontSizeToFit={true} minimumFontScale={2} style={{fontFamily:lightTheme.fontSizes.fontFamilyRegular, fontWeight:'600', fontSize:14}}>{text}</Text>
        <View style={[styles.editContainer, {flex:1, marginBottom: 10, backgroundColor:'white'}]}>
        <AppImage source={icon2} style={styles.icImage} />
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
      {modalVisible && <ModalResidence modalVisible={modalVisible} setModalVisible={setModalVisible} />}
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
        >
          <View style={styles.contentSectionLayoutHome}>
            <Text style={styles.textSectionLayoutHome}>Nhóm dịch vụ</Text>
            {renderServiceItems()}
            <SliderLayOutHome />
          </View>
          {renderFavoriteUtilities()}
          <View style={styles.container}>
            <Text style={[styles.textLogin, styles.title]}>Thông tin</Text>
            <View style={styles.rowContainer}>
              {renderColumn({
                  titleInfor: "Cảnh báo thủ đoạn tội phạm",
                  icon1: "warning",
                  icon2: "home_banner2",
                  text: "Thủ đoạn lừa đảo chiếm đoạt tài sản lợi dụng tình ...",
                  isFinite: true
                })}
              <View style={{width: 2, height:'100%', backgroundColor: '#a8a8a8', marginHorizontal:5}}/>
              {renderColumn({
                  titleInfor: "Tin tức",
                  icon1: "newspaper-outline",
                  icon2: "home_banner3",
                  text: "Chuyển cảm động nơi cơn bảo quét qua",
                  isFinite: false
                })}
            </View>
          </View>
          <View style={{ marginBottom: 60 }}/>
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
    marginTop: -100,
    overflow: "hidden",
  },
  scrollView: {
    flex: 1,
    height: height,
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
    alignItems: "center"
  },
  editIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  profileImageHome: {
    width: 60,
    height: 60,
    borderRadius: 100,
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
    width: 20,
    height: 20,
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
    paddingVertical: 40,
    marginTop:5
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
    padding: 20,
    paddingTop: 30,
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
    fontSize: lightTheme.fontSizes.medium,
    fontFamily: lightTheme.fontSizes.fontFamilyRegular,
  },
  title: {
    fontSize: 14,
    // textAlign: "start",
    marginTop: 35,
    marginBottom: 10,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    paddingHorizontal: 25,
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
    borderBottomColor: "#a8a8a8",
    borderBottomWidth: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 5
  },
  titleText: {
    color: Colors.colorTextLogin,
    fontWeight: "bold",
    height: 40,
    width: 150,
  },
  icImage: {
    width: width*0.455,
    height: 100,
    borderRadius: 20,
  },
  containerOverlap: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});

export default ScreenWithOverlap;
