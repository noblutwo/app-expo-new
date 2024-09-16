import React from "react";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
} from "react-native";

export interface AppImageProps {
  source:"vnp_image_1" | "rofileLogout" | "bg_head" | "iconCamera" | "iconHomeActive" | "noti_unread_active" | "noti_unread_inactive" | "setting_active" | "setting_inactive" | "iconHomeInActive" | "iconWalletActive" | "iconWalletInActive" | "forgotPassword" | "numberRegister" | "numberLogout" |"profileLogin" | "lockLogin" | "vnp_image_2" | "iconQue" | "iconBook" | "iconPhone" | "iconQuestion" | "vnp_image_3" | "bg_pick" | "next_active" | "next_inactive" | "prev_active" | "prev_inactive" | " bglogin" | "headerBackground" | "header_back" | "header" | string;

  style?: StyleProp<ImageStyle>;
  resizeMode?: "cover" | "contain" | "stretch" | "repeat" | "center";
}

export const imageSources: { [key: string]: ImageSourcePropType } = {
  vnp_image_1: require("../../assets/images/src_assets_images_vnp_image_1.png"),
  vnp_image_2: require("../../assets/images/src_assets_images_vnp_image_2.png"),
  vnp_image_3: require("../../assets/images/src_assets_images_vnp_image_3.png"),
  bg_pick: require("../../assets/images/src_assets_images_vnp_bg_pick_mode.png"),
  next_active: require("../../assets/images/src_assets_images_vnp_ico_ic_nex_active.png"),
  next_inactive: require("../../assets/images/src_assets_images_vnp_ico_ic_next_inactive.png"),
  prev_active: require("../../assets/images/src_assets_images_vnp_ico_ic_prev_active.png"),
  prev_inactive: require("../../assets/images/src_assets_images_vnp_ico_ic_prev_inactive.png"),
  bglogin: require("../../assets/images/src_assets_images_vnp_bglogin.png"),
  headerBackground: require("../../assets/images/src_assets_images_vnp_header_home_bg_2.png"),
  header_back: require("../../assets/images/src_assets_images_vnp_header_back.png"),
  header: require("../../assets/images/src_assets_images_home_frame7209.png"),
  iconBook: require("../../assets/images/src_assets_images_ico_ic_hdsd_ny.png"),
  iconQuestion: require("../../assets/images/src_assets_images_ico_ic_faq_ny.png"),
  iconPhone: require("../../assets/images/src_assets_images_ico_ic_hotline_ny.png"),
  iconQue: require("../../assets/images/src_assets_images_ico_ic_help_red.png"),
  profileLogin: require("../../assets/images/src_assets_images_ico_ic_login_idnumber.png"),
  lockLogin: require("../../assets/images/src_assets_images_ico_ic_login_pass.png"),
  profileLogout: require("../../assets/images/src_assets_images_vnp_ico_ic_login_cccd.png"),
  numberLogout: require("../../assets/images/src_assets_images_vnp_ico_ic_login_mobile.png"),
  numberRegister: require("../../assets/images/src_assets_images_ico_ic_login_phone.png"),
  forgotPassword: require("../../assets/images/src_assets_images_vnp_ico_ic_login_mobile.png"),
  iconCamera: require("../../assets/images/src_assets_images_vnp_ico_ic_home_scan.png"),
  iconHomeActive: require("../../assets/images/src_assets_images_ico_ic_home_active.png"),
  iconHomeInActive: require("../../assets/images/src_assets_images_ico_ic_home_inactive.png"),
  iconWalletActive: require("../../assets/images/src_assets_images_ico_ic_wallet_active.png"),
  iconWalletInActive: require("../../assets/images/src_assets_images_ico_ic_wallet_inactive.png"),
  noti_unread_active: require("../../assets/images/src_assets_images_ico_ic_noti_unread_active.png"),
  noti_unread_inactive: require("../../assets/images/src_assets_images_ico_ic_noti_unread_inactive.png"),
  setting_active: require("../../assets/images/src_assets_images_ico_ic_setting_active.png"),
  setting_inactive: require("../../assets/images/src_assets_images_ico_ic_setting_inactive.png"),
  bg_head: require("../../assets/images/src_assets_images_vnp_header_home_bg.png"),
};

const AppImage: React.FC<AppImageProps> = ({
  source,
  style,
  resizeMode = "cover",
}) => {
  let imageSource: ImageSourcePropType;

  if (typeof source === "string" && source.startsWith("http")) {
    imageSource = { uri: source };
  } else {
    imageSource = imageSources[source];

    if (!imageSource) {
      console.warn(`Image source "${source}" not found.`);
      return null;
    }
  }

  return (
    <Image
      source={imageSource}
      style={[styles.image, style]}
      resizeMode={resizeMode}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    // borderRadius:100
  },
});

export default AppImage;
