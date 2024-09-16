import { Button } from "@/components/Button/Button";
import BackgroundImage from "@/components/Images/BackgroundImage";
import { imageSources } from "@/components/Images/ImgReq";
import { Colors, FontSize } from "@/constants/Colors";
import { lightTheme } from "@/styles/theme";
import { router } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function homeScreen() {
  return (
    <View style={styles.container}>
      <BackgroundImage source={imageSources["bglogin"]}>
        <View style={styles.headerHome} />
        <View style={styles.homeMain}>
          <View style={styles.home}>
            <Text style={styles.homeText}>
              Ứng dụng định danh điện tử có giá trị sử dụng thay thế các giấy tờ
              truyền thống, định danh công dân trên môi trường kỹ thuật số, cung
              cấp các tiện ích phát triển công dân số, chính phủ số, xã hội số
            </Text>
            <Button
              onPress={() => router.push("/drawer/register")}
              mode="outlined"
              style={[
                styles.button,
                {
                  backgroundColor: Colors.colorButtonLogin,
                  borderColor: "transparent",
                  marginTop: 30,
                },
              ]}
              labelStyle={styles.buttonLabel}
            >
              Đăng nhập
            </Button>
            <Button
              onPress={() => router.push("/drawer/logout")}
              mode="outlined"
              style={[
                styles.button,
                { backgroundColor: Colors.colorLogin, borderColor: "white" },
              ]}
              labelStyle={styles.buttonLabel}
            >
              Kích hoạt tài khoản định danh điện tử
            </Button>
            <View style={styles.footerHomeLogin}>
              <TouchableOpacity
                onPress={() => router.push("/drawer/register")}
              >
                <Text
                  style={{
                    textAlign: "right",
                    color: "#BF7177",
                    fontSize: 14,
                    fontFamily: FontSize.fontFamilyRegular,
                    fontWeight: "500",
                  }}
                >
                  Bạn chưa có tài khoản ?{" "}
                  <Text style={{ color: Colors.colorTextLogin }}>Đăng ký</Text>
                </Text>
              </TouchableOpacity>

              <Text
                style={{
                  textAlign: "right",
                  marginTop: 5,
                  color: "#BF7177",
                  fontSize: 14,
                  fontFamily: FontSize.fontFamilyRegular,
                  fontWeight: "500",
                }}
              >
                Hotline hỗ trợ:{" "}
                <Text style={{ color: Colors.colorTextLogin }}>1900.0368</Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
               justifyContent: "center",
              paddingHorizontal: 20,
              paddingBottom: 10
            }}
          >
            <View style={styles.footerHome}>
              <TouchableOpacity
                onPress={() => router.push("/drawer/policy")}
              >
                <Text
                  style={{
                    color: "#BF7177",
                    fontSize: 14,
                    fontFamily: FontSize.fontFamilyRegular,
                    fontWeight: "500"
                  }}
                >
                  Chính sách quyền riêng tư
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  color: "#BF7177",
                  fontSize: 14,
                  fontFamily: FontSize.fontFamilyRegular,
                  fontWeight: "500",
                }}
              >
                Phiên bản 2.1.9
              </Text>
            </View>
          </View>
        </View>
      </BackgroundImage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerHome: {
    flex: 1,
  },
  homeMain: {
    flex: 1,
  },
  home: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  homeText: {
    textAlign: "center",
    color: "white",
    fontFamily: lightTheme.fontSizes.fontFamilyRegular,
    fontWeight: "500",
    fontSize: 15,
    paddingHorizontal: 10,
  },
  button: {
    paddingVertical: 5,
    borderRadius: 10,
    marginVertical: 5,
  },
  buttonLabel: {
    color: "white",
    fontFamily: lightTheme.fontSizes.fontFamilyRegular,
    fontWeight: "bold",
    fontSize: lightTheme.fontSizes.medium,
  },
  footerHomeLogin: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-end",
    marginVertical: 10,
  },
  footerHome: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
