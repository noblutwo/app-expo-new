import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import ResponsiveTextInput from "@/components/ResponsiveTextInput/ResponsiveTextInput";
import { Button } from "react-native-paper";
import { Colors } from "@/constants/Colors";
import AppImage from "@/components/Images/ImgReq";
import { useStyles } from "@/styles/styles";
import { router } from "expo-router";

const LoginScreen = () => {
  const globalStyles = useStyles();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <View style={globalStyles.containerLogin}>
      <Text style={globalStyles.titleLogin}>
        Vui lòng nhập thông tin đăng nhập để tiếp tục
      </Text>
      <View style={[globalStyles.contentLogin, { marginTop: 20 }]}>
        <View
          style={[
            globalStyles.rowTitleLogin,
            { alignItems: "center", justifyContent: "space-between" },
          ]}
        >
          <Text style={globalStyles.textLogin}>Số định danh cá nhân </Text>
          <View
            style={[
              globalStyles.rowTitleLogin,
              { alignItems: "center", justifyContent: "center" },
            ]}
          >
            <Text style={globalStyles.textLogin}>Hướng dẫn</Text>
            <AppImage
              source="iconQue"
              style={globalStyles.imageSliderIconLogin}
              resizeMode="contain"
            />
          </View>
        </View>
        <View>
          <ResponsiveTextInput
            placeholder="Nhập số định danh cá nhân"
            icon="profileLogin"
            value={username}
            onChangeText={setUsername}
            isPassword={false}
          />
          <Text style={globalStyles.textLogin}>Mật khẩu </Text>
          <ResponsiveTextInput
            placeholder="Nhập mật khẩu"
            icon="lockLogin"
            value={password}
            onChangeText={setPassword}
            isPassword={true}
          />
        </View>
        <Button
          onPress={() => {}}
          mode="outlined"
          style={[
            globalStyles.buttonLogin,
            {
              backgroundColor: Colors.colorButtonLogin,
              borderColor: "transparent",
              marginTop: 10,
            },
          ]}
          labelStyle={globalStyles.buttonLabelLogin}
        >
          Đăng nhập
        </Button>
      </View>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity onPress={() => router.push("/drawer/forgotPassword")}>
          <Text
            style={[
              globalStyles.textLogin,
              { fontWeight: "bold", color: Colors.colorTextLogin },
            ]}
          >
            Quên mật khẩu
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/drawer/register")}>
          <Text style={[globalStyles.textLogin, { marginVertical: 10 }]}>
            Bạn chưa có tài khoản?{" "}
            <Text style={{ color: Colors.colorTextLogin, fontWeight: "bold" }}>
              Đăng ký
            </Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/drawer/activateAccount")}>
          <Text style={globalStyles.textLogin}>
            Tài khoản đã được định danh điện tử ?{" "}
            <Text style={{ color: Colors.colorTextLogin, fontWeight: "bold" }}>
              Kích hoạt
            </Text>
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={[globalStyles.contentLayout, { justifyContent: "flex-end" }]}
      >
        <View
          style={{
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={[
              globalStyles.rowIconTitleLogin,
              { justifyContent: "space-evenly", gap: 6 },
            ]}
          >
            <View style={globalStyles.columnIconTitleLogin}>
              <AppImage
                source="iconBook"
                style={[globalStyles.imageSliderLogin, { marginBottom: 5 }]}
                resizeMode="contain"
              />
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={globalStyles.textLogin}>Hướng dẫn</Text>
                <Text style={globalStyles.textLogin}>sử dụng</Text>
              </View>
            </View>
            <View style={globalStyles.columnIconTitleLogin}>
              <AppImage
                source="iconQuestion"
                style={[globalStyles.imageSliderLogin, { marginBottom: 5 }]}
                resizeMode="contain"
              />
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={globalStyles.textLogin}>Câu hỏi</Text>
                <Text style={globalStyles.textLogin}>thường gặp</Text>
              </View>
            </View>
            <View style={globalStyles.columnIconTitleLogin}>
              <AppImage
                source="iconPhone"
                style={[globalStyles.imageSliderLogin, { marginBottom: 5 }]}
                resizeMode="contain"
              />
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={globalStyles.textLogin}>Hotline</Text>
                <Text style={globalStyles.textLogin}>hỗ trợ</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => router.push("/drawer/policy")}
            >
              <Text
                style={[
                  globalStyles.textLogin,
                  { marginVertical: 10, textDecorationLine: "underline" },
                ]}
              >
                Chính sách quyền riêng tư
              </Text>
            </TouchableOpacity>
            <Text
              style={[globalStyles.textLogin, { color: Colors.colorSilver }]}
            >
              Phiên bản 2.1.9
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
