import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Keyboard,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ResponsiveTextInput from "@/components/ResponsiveTextInput/ResponsiveTextInput";
import { Button } from "react-native-paper";
import { Colors } from "@/constants/Colors";
import AppImage from "@/components/Images/ImgReq";
import { useStyles } from "@/styles/styles";
import { router } from "expo-router";
import { useFetchData } from "@/api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "@/context/AuthContext";
import LoadingPopup from "@/components/loading/LoadingPopup ";
import ErrorLogin from "@/components/loading/ErrorLogin";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const LoginScreen = () => {
  const { login, handlerNoticifation, isLoggedIn, isNoticifation } = useAuth();
  const scrollViewRef: any = useRef(null);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const globalStyles = useStyles();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [title, setTitle] = useState("");

  const validateUsername = useCallback((text: string) => {
    setUsername(text);
    setUsernameError(text.length < 3);
  }, []);

  const validatePassword = useCallback((text: React.SetStateAction<string>) => {
    setPassword(text);
  }, []);

  const { isUserFound } = useFetchData(username);
const handleLogin = useCallback(async () => {
    Keyboard.dismiss();
    validateUsername(username);
    validatePassword(password);
    if (username && password) {
      try {
        setLoading(true);
        await login(username, password);
        const userJson = await AsyncStorage.getItem("user");
        console.log(userJson,'>>>>>>>>>>>>>userJsonuserJson')
        console.log(isLoggedIn,'>>>>>>>>>>>>>isLoggedInisLoggedIn')
        if (userJson && isLoggedIn) {
            router.push("./tabs");
        } else {
          setIsError(true);
          setLoading(false);
        }
      } catch (error) {
        setIsError(true);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    } else {
      setIsError(true);
    }
  }, [username, password]);

  const handleFocus = (event: { nativeEvent: { target: any; text: any } }) => {
    const { target, text } = event.nativeEvent;
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: 0,
        animated: true,
      });
    }
    setScrollEnabled(true);
  };

  const handleBlur = () => {
    setScrollEnabled(false);
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: 0,
        animated: true,
      });
    }
  };


  useEffect(() => {
    if (username == "" && password == "") {
      return setTitle("Số định danh cá nhân và mật khẩu không được để trống");
    } else if (username != "" && password == "") {
      return setTitle("Số định danh cá nhân và mật khẩu không được để trống");
    }
    if (username && password) {
      if (!isUserFound) {
        return setTitle(
          `Tài khoản hoặc mật khẩu không đúng. vui lòng kiểm tra lại`
        );
      } else {
        return setTitle("Tài khoản hoặc mật khẩu không đúng. vui lòng kiểm tra lại");
      }
    }
  }, [username, password]);


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.content}>
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.scrollView}
          keyboardShouldPersistTaps="handled"
          scrollEnabled={scrollEnabled}
        >
          <View style={globalStyles.containerLogin}>
            <Text style={globalStyles.titleLogin}>
              {`Vui lòng nhập thông tin ${
                isNoticifation ? "đăng nhập" : "đăng ký"
              } để tiếp tục`}
            </Text>
            <View style={[globalStyles.contentLogin, { marginTop: 20 }]}>
              <View
                style={[
                  globalStyles.rowTitleLogin,
                  { alignItems: "center", justifyContent: "space-between" },
                ]}
              >
                <Text style={globalStyles.textLogin}>
                  Số định danh cá nhân{" "}
                </Text>
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
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <Text style={globalStyles.textLogin}>{`${
                  isNoticifation ? "Mật khẩu" : "Số điện thoại"
                }`}</Text>
                <ResponsiveTextInput
                  placeholder={
                    isNoticifation ? "Nhập mật khẩu" : "Nhập số điện thoại"
                  }
                  icon={isNoticifation ? "lockLogin" : "numberRegister"}
                  value={password}
                  onChangeText={setPassword}
                  isPassword={isNoticifation ? true : false}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </View>
              <Button
                onPress={() => (isNoticifation ? handleLogin() : "")}
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
                {isNoticifation ? "Đăng nhập" : "Đăng ký"}
              </Button>
              <LoadingPopup visible={loading} text="Đang xử lý..." />
              <ErrorLogin
              isModalVisible={isError}
              setModalVisible={setIsError}
              title={title}
            />
            </View>
            <View style={{ marginTop: 20 }}>
              {isNoticifation ? (
                <TouchableOpacity
                  onPress={() => router.push("/drawer/forgotPassword")}
                >
                  <Text
                    style={[
                      globalStyles.textLogin,
                      { fontWeight: "bold", color: Colors.colorTextLogin },
                    ]}
                  >
                    Quên mật khẩu
                  </Text>
                </TouchableOpacity>
              ) : (
                ""
              )}

              <TouchableOpacity
                onPress={() => {
                  if (isNoticifation) {
                    handlerNoticifation(false);
                    router.push("/drawer/login");
                  } else {
                    handlerNoticifation(true);
                  }
                }}
              >
                <Text style={[globalStyles.textLogin, { marginVertical: 10 }]}>
                  Bạn chưa có tài khoản?{" "}
                  <Text
                    style={{ color: Colors.colorTextLogin, fontWeight: "bold" }}
                  >
                    {isNoticifation ? "Đăng ký" : "Đăng nhập"}
                  </Text>
                </Text>
              </TouchableOpacity>
              {isNoticifation ? (
                <TouchableOpacity
                  onPress={() => router.push("/drawer/activateAccount")}
                >
                  <Text style={globalStyles.textLogin}>
                    Tài khoản đã được định danh điện tử ?{" "}
                    <Text
                      style={{
                        color: Colors.colorTextLogin,
                        fontWeight: "bold",
                      }}
                    >
                      Kích hoạt
                    </Text>
                  </Text>
                </TouchableOpacity>
              ) : (
                ""
              )}
            </View>

            <View
              style={[
                globalStyles.contentLayout,
                { justifyContent: "flex-end" },
              ]}
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
                      style={[
                        globalStyles.imageSliderLogin,
                        { marginBottom: 5 },
                      ]}
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
                      style={[
                        globalStyles.imageSliderLogin,
                        { marginBottom: 5 },
                      ]}
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
                      style={[
                        globalStyles.imageSliderLogin,
                        { marginBottom: 5 },
                      ]}
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
                    marginBottom: 60,
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
                    style={[
                      globalStyles.textLogin,
                      { color: Colors.colorSilver },
                    ]}
                  >
                    Phiên bản 2.1.10
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    height: SCREEN_HEIGHT,
  },
});
export default LoginScreen;
