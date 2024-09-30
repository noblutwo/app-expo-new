import {ImageBackground, Modal, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {imageSources} from "@components/Images/ImgReq";
import BackgroundImage from "@components/Images/BackgroundImage";
import {Feather} from '@expo/vector-icons';
import {hResponsive, wResponsive} from "@/constants/Colors";

export function ModalQrCode({open, setOpen}: any) {
    const [seconds, setSeconds] = useState(49);

    useEffect(() => {
        if (seconds > 0) {
            const timer = setTimeout(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);

            // Cleanup function to clear the timeout
            return () => clearTimeout(timer);
        }
    }, [seconds]);
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={open}
                onRequestClose={() => setOpen(false)}
            >
                <BackgroundImage
                    source={imageSources["bgScan"]}
                    style={styles.background}
                >
                    <View style={[{paddingVertical: 20}, styles.containerLayout]}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Feather onPress={() => setOpen(false)} name="x" size={24} color="white"/>
                            <Text style={{color: 'white', fontWeight: '700', paddingHorizontal: 15}}>QR code định danh
                                điện tử</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            width: '100%',
                            top: -30
                        }}>
                            <View>
                                <ImageBackground
                                    source={imageSources["qrScan"]}
                                    style={styles.fullQr}
                                />
                                <View style={{flexDirection: 'row', justifyContent: 'center', paddingVertical: 20}}>
                                    <Text style={{color: 'white', fontWeight: '700'}}>Hiệu lực của QR code còn </Text>
                                    <Text style={{color: '#dcc913', fontWeight: '700'}}>00:{seconds}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </BackgroundImage>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    // Giữ nguyên tất cả các styles như trong code gốc
    container: {
        flex: 1
    },

    containerLayout: {
        paddingHorizontal: '3%'
    },
    background: {
        width: '100%',
        height: '100%'
    },
    fullQr: {
        width: wResponsive(220),
        height: hResponsive(250)
    }


});