import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import ResponsiveTextInput from "@/components/ResponsiveTextInput/ResponsiveTextInput";
import { Button } from "react-native-paper";
import { Colors } from "@/constants/Colors";
import { useStyles } from "@/styles/styles";
import { router } from "expo-router";
import { useAuth } from "@/context/AuthContext";

const ActivateScreen = () => {
  const globalStyles = useStyles();
  const [username, setUsername] = useState<string>("");
  const [numberPhone, setNumberPhone] = useState<string>("");
  const { login, handlerNoticifation, isLoggedIn, isNoticifation } = useAuth();
  return (
    <View style={globalStyles.containerLogin}>
      <Text style={globalStyles.titleLogin}>Quên mật khẩu</Text>
      <View style={[globalStyles.contentLogin, {flex:1,marginTop: 20}]}>
        <View>
          <ResponsiveTextInput
            placeholder="Số định danh cá nhân"
            icon="profileLogout"
            value={username}
            onChangeText={setUsername}
            isPassword={false}
          />
          <ResponsiveTextInput
            placeholder="Số điện thoại"
            icon="forgotPassword"
            value={numberPhone}
            onChangeText={setNumberPhone}
            isPassword={false}
          />
        </View>
        <View style={[globalStyles.contentLogin, {flex:1, alignItems:'center', justifyContent:'flex-end'}]}>
         <Button
          onPress={() => {}}
          mode="outlined"
          style={[
            globalStyles.buttonLogin,
            {
              backgroundColor: Colors.colorButtonLogin,
              borderColor: "transparent",
              marginTop: 10,
              width: "100%"
            },
          ]}
          labelStyle={globalStyles.buttonLabelLogin}
        >
          Gửi yêu cầu
        </Button>
        <View>
        <TouchableOpacity
              onPress={() =>{
                // handlerNoticifation()
                router.push("/drawer/login")
              } }
            >

         <Text style={[globalStyles.textLogin, { marginVertical: 10 }]}>
          Bạn đã có tài khoản?{" "}
          <Text style={{ color: Colors.colorTextLogin, fontWeight: "bold" }}>
            Đăng nhập
          </Text>
        </Text>     
            </TouchableOpacity>
        
      </View>  
        </View>
       
      </View>
    </View>
  );
};

export default ActivateScreen;
