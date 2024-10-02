import {
  Dimensions,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AppImage, { imageSources } from "@components/Images/ImgReq";
import BackgroundImage from "@components/Images/BackgroundImage";
import { hResponsive, pResponsive, wResponsive } from "@/constants/Colors";
import { router } from "expo-router";
import { useAuth } from "@/context/AuthContext";
import { lightTheme } from "@/styles/theme";

interface QrCodeProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  image: string;
}
const { width, height } = Dimensions.get("window");
export function ModalInformation({ open, setOpen, title, image }: QrCodeProps) {
  const { authUser } = useAuth();
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={() => setOpen(false)}
      >
        <BackgroundImage
          source={imageSources["home_header"]}
          style={styles.background}
        >
          <View style={[{ paddingVertical: 20 }, styles.containerLayout]}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={() => router.push("/home")}
                style={{ paddingHorizontal: 20 }}
              >
                <AppImage
                  source="header_back"
                  style={{ width: 35, height: 30 }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <View>
                {/* <TouchableOpacity onPress={() => setOpenModal(true)}> */}
                <AppImage source="qrCodeHeader" style={styles.item} />
                {/* </TouchableOpacity> */}
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
                top: -40,
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AppImage
                  source={authUser?.Image!}
                  style={styles.profileImageHome}
                />
                <Text
                  style={[
                    styles.textLogin,
                    { fontWeight: "bold", color: "#423A37", fontSize: 22 },
                  ]}
                >
                  {authUser?.Name!}
                </Text>
                <View style={styles.nameTagHome}>
                  <Text
                    style={[
                      styles.textLogin,
                      { fontWeight: "bold", paddingHorizontal: 2 },
                    ]}
                  >
                    {authUser?.designationLevel!}
                  </Text>
                  <AppImage
                    source="dinh_danh"
                    style={styles.identityIconHome}
                  />
                </View>
              </View>
            </View>
          </View>
        </BackgroundImage>
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <View style={{ paddingHorizontal: 20 }}>
            {/* <View style={styles.lined}/> */}
            <View style={[styles.forgotPassword, styles.jSpaceBetween, {marginVertical:25}]}>
              <Text style={[styles.nameBH, {color:'#8e8e8e'}]}>Số định danh cá nhân</Text>
              <Text style={[styles.nameBH, {color:'#5d5a5b'}]}>{authUser?.CCCD}</Text>
            </View>
            <View style={styles.linedUser} />
            <View style={[styles.forgotPassword, styles.jSpaceBetween , {marginVertical:20}]}>
              <Text style={[styles.nameBH, {color:'#8e8e8e'}]}>Giới tính</Text>
              <Text style={[styles.nameBH, {color:'#5d5a5b'}]}>{authUser?.Sex}</Text>
            </View>

            <View style={styles.linedUser} />

            <View style={[styles.forgotPassword, styles.jSpaceBetween , {marginVertical:20}]}>
              <Text style={[styles.nameBH, {color:'#8e8e8e'}]}>Ngày sinh</Text>
              <Text style={[styles.nameBH, {color:'#5d5a5b'}]}>
                {authUser?.DOB}
              </Text>
            </View>

            <View style={styles.linedUser} />

            <View style={[styles.forgotPassword, styles.jSpaceBetween , {marginVertical:20}]}>
              <Text style={[styles.nameBH, {color:'#8e8e8e'}]}>Số điện thoại</Text>
              <Text style={[styles.nameBH, {color:'#5d5a5b'}]}>{authUser?.Tel}</Text>
            </View>

            <View style={styles.linedUser} />

            <View style={[styles.forgotPassword, styles.jSpaceBetween]}>
              <Text style={[ styles.nameBH, {color:'#8e8e8e'}]}>
                Nơi thường trú
              </Text>
              <Text style={[{ flexWrap: "wrap", width: 220, color:'#5d5a5b' }, styles.nameBH]}>
                {authUser?.Address}
              </Text>
            </View>
            <View style={styles.linedUser} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  // Giữ nguyên tất cả các styles như trong code gốc
  container: {
    flex: 1,
  },
  bgHearder: {
    flex: 1,
    backgroundColor: "#fff",
    height: height,
  },
  containerLayout: {
    paddingHorizontal: "3%",
  },
  background: {
    width: "100%",
    height: 300,
  },
  fullQr: {
    width: wResponsive(220),
    height: hResponsive(250),
  },
  item: {
    marginTop: 5,
    width: wResponsive(25),
    height: hResponsive(25),
    marginBottom: 10,
  },
  profileImageHome: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#FFF",
  },
  textLogin: {
    fontSize: pResponsive(14),
    fontFamily: lightTheme.fontFamilies.sansSerif,
    marginVertical: 10,
  },
  nameTagHome: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 10,
    // paddingVertical: 5,
    gap: 10,
  },
  identityIconHome: {
    width: 18,
    height: 18,
  },
  imgapp: {
    borderBottomColor: "#000",
  },
  information: {
    flex: 1,
    marginBottom: 20,
  },
  titleInformation: {
    gap: 8,
    paddingHorizontal: 10,
  },

  name: {
    fontFamily: lightTheme.fontFamilies.sansSerif,
  },
  nameBH: {
    fontFamily: lightTheme.fontFamilies.sansSerif,
    color: "#423A37",
  },
  inforUser: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    paddingBottom: 12,
    borderBottomColor: "",
    borderBottomWidth: 0.7,
    marginBottom: 10,
  },
  lined: {
    borderBottomWidth: 1.5,
    borderBottomColor: "",
    marginTop: -10,
    marginBottom: 10,
    flex: 1,
  },
  linedUser: {
    borderBottomWidth: 1,
    borderBottomColor: "#8e8e8e",
    flex: 1,
  },
  imageBackground: {
    flexDirection: "column",
    // paddingHorizontal: 20,
    paddingTop: 20,
    borderRadius: 10,
    gap: 4,
    flex: 1,
    resizeMode: "contain",
  },

  forgotPassword: {
    flexDirection: "row",
    width: "100%",
    // marginBottom: 20,
    fontFamily: lightTheme.fontFamilies.sansSerif,
    color: "#423A37",
  },
  jSpaceBetween: {
    justifyContent: "space-between",
  },
  imageAvatar: {
    borderRadius: 50,
    height: 70,
    width: 70,
  },
});
