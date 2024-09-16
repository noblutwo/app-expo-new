import { Text, View } from "react-native";
import React, { useState } from "react";
import ResponsiveTextInput from "@/components/ResponsiveTextInput/ResponsiveTextInput";
import { Button } from "react-native-paper";
import { Colors } from "@/constants/Colors";
import { useStyles } from "@/styles/styles";

const LogoutScreen = () => {
  const globalStyles = useStyles();
  const [username, setUsername] = useState<string>("");
  const [numberPhone, setNumberPhone] = useState<string>("");
  return (
    <View style={globalStyles.containerLogin}>
      <Text style={globalStyles.titleLogin}>
        Kích hoạt tài khoản
      </Text>
      <View style={[globalStyles.contentLogin, { marginTop: 20 }]}>
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
            icon="numberLogout"
            value={numberPhone}
            onChangeText={setNumberPhone}
            isPassword={false}
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
          Gửi yêu cầu
        </Button>
      </View>
    </View>
  );
};

export default LogoutScreen;
