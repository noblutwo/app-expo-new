import {StyleSheet, ScrollView, View, Text, ImageBackground} from "react-native";
import React from "react";
import {FontSize} from "@/constants/Colors";
import {useStyles} from "@/styles/styles";
import {imageSources} from "@/components/Images/ImgReq";
import BackgroundImage from "@/components/Images/BackgroundImage";

export default function LayoutService() {
    const golbalStyle = useStyles();
    return (
        <View style={styles.container}>
            <BackgroundImage source={imageSources["bgHeaderWallet"]} style={{height: 380}}>
                <View style={[styles.containerLayout,{paddingVertical:10,marginTop:20}]}>
                    <Text style={{fontSize:20,fontWeight:600}}>Ví giấy tờ</Text>
                </View>
            </BackgroundImage>
            <View style={styles.containerLayout}>
                <View style={{flexDirection:'row',paddingVertical:20}}>
                    <Text style={{color:'#a62c2c'}}>Tài khoản mức 2 </Text>
                    <ImageBackground
                        source={imageSources["iconVn"]}
                        style={[styles.icon,{marginLeft:5}]}
                    />
                </View>
                <Text>Tài khoản của bạn đã được định danh ở mức 3</Text>
            </View>
            <ScrollView style={golbalStyle.homeContainer}>

            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    containerLayout: {
        paddingHorizontal: '3%'
    },
    icon : {
        width:20,
        height:20
    }
});
