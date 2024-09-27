import {Keyboard, SafeAreaView, Text,StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View, ScrollView, Dimensions} from "react-native";
import React, {useCallback, useRef, useState} from "react";
import ResponsiveTextInput from "@/components/ResponsiveTextInput/ResponsiveTextInput";
import {Button} from "react-native-paper";
import {Colors} from "@/constants/Colors";
import AppImage from "@/components/Images/ImgReq";
import {useStyles} from "@/styles/styles";
import {router} from "expo-router";
import {useAuth} from "@/context/AuthContext";
import { useFetchData } from "@/api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";


const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const RegisterScreen = () => {
  const { login } = useAuth();
  const globalStyles = useStyles();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isRegister, setIsRegister] = useState<boolean>(true)

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);

// keyboar
const scrollViewRef: any = useRef(null);
const [scrollEnabled, setScrollEnabled] = useState(false);
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
        if (userJson) {
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
                {`Vui lòng nhập thông tin ${isRegister ? 'đăng nhập' : 'đăng ký'} để tiếp tục`}
            </Text>
            <View style={[globalStyles.contentLogin, {marginTop: 20}]}>
                <View
                    style={[
                        globalStyles.rowTitleLogin,
                        {alignItems: "center", justifyContent: "space-between"},
                    ]}
                >
                    <Text style={globalStyles.textLogin}>Số định danh cá nhân </Text>
                    <View
                        style={[
                            globalStyles.rowTitleLogin,
                            {alignItems: "center", justifyContent: "center"},
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
                    <Text
                        style={[globalStyles.textLogin, {marginBottom: 20}]}>{`${isRegister ? 'Mật khẩu' : 'Số điện thoại'}`} </Text>
                    <ResponsiveTextInput
                        placeholder={isRegister ? "Nhập mật khẩu" : "Nhập số điện thoại"}
                        icon={isRegister ? "lockLogin" : "numberRegister"}
                        value={password}
                        onChangeText={setPassword}
                        isPassword={false}
                    />
                </View>
                <Button
                    onPress={() => handleLogin()}
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
                    {isRegister ? 'Đăng nhập' : 'Đăng ký'}
                </Button>
            </View>
            <View style={{marginTop: 10}}>
                {isRegister ? (<TouchableOpacity onPress={() => router.push("/drawer/forgotPassword")}>
                    <Text
                        style={[
                            globalStyles.textLogin,
                            {fontWeight: "bold", color: Colors.colorTextLogin},
                        ]}
                    >
                        Quên mật khẩu
                    </Text>
                </TouchableOpacity>) : ''}
                <TouchableOpacity onPress={() => isRegister ? setIsRegister(false) : router.push("/drawer/login")}>
                    <Text style={[globalStyles.textLogin, {marginVertical: 10}]}>
                        Bạn đã có tài khoản?{" "}
                        <Text style={{color: Colors.colorTextLogin, fontWeight: "bold"}}>
                            {isRegister ? 'Đăng ký' : 'Đăng nhập'}
                        </Text>
                    </Text>
                </TouchableOpacity>
                {isRegister ? (<TouchableOpacity onPress={() => router.push("/drawer/activateAccount")}>
                    <Text style={globalStyles.textLogin}>
                        Tài khoản đã được định danh điện tử ?{" "}
                        <Text style={{color: Colors.colorTextLogin, fontWeight: "bold"}}>
                            Kích hoạt
                        </Text>
                    </Text>
                </TouchableOpacity>) : ''}
            </View>

            <View
                style={[globalStyles.contentLayout, {justifyContent: "flex-end"}]}
            >
                <View style={{flex:1, flexDirection: "column", alignContent: 'center', justifyContent: 'flex-end', paddingBottom:60}}>
                    <View
                        style={[
                            globalStyles.rowIconTitleLogin,
                            {justifyContent: 'space-evenly', gap: 6},
                        ]}
                    >
                        <View style={globalStyles.columnIconTitleLogin}>
                            <AppImage
                                source="iconBook"
                                style={[globalStyles.imageSliderLogin, {marginBottom: 5}]}
                                resizeMode="contain"
                            />
                            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={globalStyles.textLogin}>Hướng dẫn</Text>
                                <Text style={globalStyles.textLogin}>sử dụng</Text>
                            </View>

                        </View>
                        <View style={globalStyles.columnIconTitleLogin}>
                            <AppImage
                                source="iconQuestion"
                                style={[globalStyles.imageSliderLogin, {marginBottom: 5}]}
                                resizeMode="contain"
                            />
                            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={globalStyles.textLogin}>Câu hỏi</Text>
                                <Text style={globalStyles.textLogin}>thường gặp</Text>
                            </View>
                        </View>
                        <View style={globalStyles.columnIconTitleLogin}>
                            <AppImage
                                source="iconPhone"
                                style={[globalStyles.imageSliderLogin, {marginBottom: 5}]}
                                resizeMode="contain"
                            />
                            <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={globalStyles.textLogin}>Hotline</Text>
                                <Text style={globalStyles.textLogin}>hỗ trợ</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                        <Text style={[globalStyles.textLogin, {marginVertical: 10}]}>Chính sách quyền riêng tư</Text>
                        <Text style={[globalStyles.textLogin, {color: Colors.colorSilver}]}>Phiên bản 2.1.9</Text>
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
})
export default RegisterScreen;
