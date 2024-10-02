import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import AppImage from '../Images/ImgReq';

export default function HeaderLeft() {
  const router = useRouter();
  const pathname = usePathname();

  const handlePress = () => {
    if (pathname === "/drawer/login") {
      router.back();
    } else {
      router.push("/drawer/login");
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <AppImage source="header_back" style={styles.item} resizeMode="cover" />
    </TouchableOpacity>
  );
}

// Sử dụng trong cấu hình header
export const HeaderOptions = {
  headerLeft: () => <HeaderLeft />,
};

const styles = StyleSheet.create({
    item: {
        width: 40,
        height: 30,
    },
    headerBackground: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    headerBackgroundPolicy: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
});