import React from "react";
import { View,  SafeAreaView, ScrollView, Text, NativeSyntheticEvent, NativeScrollEvent, FlatList } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import BackgroundImage from "@/components/Images/BackgroundImage";
import AppImage, { imageSources } from "@/components/Images/ImgReq";
import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import { useStyles } from "@/styles/styles";
import SliderLayOutHome from "@/components/ScreenWithOverlap/ScreenWithOverlap";

const serviceItems = [
  { icon: "thutuchanhchinh", title: "Thủ tục, hành chính" },
  { icon: "ansinhxahoi", title: "An sinh, xã hội" },
  { icon: "phongchongdichbenh", title: "Hồ sơ, sức khỏe" },
  { icon: "dichvukhac", title: "Dịch vụ, khác" },
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
  const dimensions = useResponsiveDimensions();
  
 
  const globalStyle = useStyles();

  const renderProfileImage = (source: string) => (
    <View style={{ flex: 1 }}>
      <AppImage source={source} style={globalStyle.profileImageHomeBottom} />
    </View>
  );

  return (
    <SafeAreaView style={globalStyle.container}>
      <View style={globalStyle.headerContainer}>
        <BackgroundImage
          source={imageSources["bg_head"]}
          style={globalStyle.headerImage}
        >
          <View style={[globalStyle.headerContainerHome, { paddingHorizontal: 20 }]}>
            <View style={[globalStyle.profileContainerHome, { justifyContent: "space-between" }]}>
              <AppImage
                source="https://randomuser.me/api/portraits/women/26.jpg"
                style={globalStyle.profileImageHome}
              />
            </View>
            <View style={globalStyle.nameContainerHome}>
              <View style={globalStyle.nameTagHome}>
                <Text style={[globalStyle.textLogin, { fontWeight: "600" }]}>
                  Định danh mức 2
                </Text>
                <AppImage source="dinh_danh" style={globalStyle.identityIconHome} />
              </View>
              <Text style={[globalStyle.textLogin, { fontWeight: "bold", color: "white", fontSize: 18 }]}>
                Nguyễn văn A
              </Text>
            </View>
            <View style={globalStyle.searchButtonHome}>
              <EvilIcons name="search" size={24} color="black" />
            </View>
          </View>
          <View style={[globalStyle.profileContainerHome, { justifyContent: "space-between", marginVertical: 20, paddingHorizontal: 10 }]}>
            {renderProfileImage("qr_cccd")}
            {renderProfileImage("qr_dddt")}
          </View>
        </BackgroundImage>
      </View>
      <ScrollView style={globalStyle.bottomSectionLayoutHome}>
        <View style={globalStyle.contentSectionLayoutHome}>
          <Text style={globalStyle.textSectionLayoutHome}>Nhóm dịch vụ</Text>
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
          <SliderLayOutHome/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
 
//   image: {
//     width: dimensions.width * 0.8,
//     height: 280,
//     marginTop: 40,
//   },
//   title: {
//     fontSize: 15,
//     textAlign: "center",
//     marginTop: 40,
//     fontWeight: "700",
//     fontFamily: "sans-serif",
//     paddingHorizontal: 10,
//     width: 280,
//   },
// });

export default ScreenWithOverlap;