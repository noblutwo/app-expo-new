import {ImageBackground, Modal, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {imageSources} from "@components/Images/ImgReq";
import BackgroundImage from "@components/Images/BackgroundImage";
import {Feather} from '@expo/vector-icons';
import {wResponsive} from "@/constants/Colors";

interface QrCodeProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    title?: string;
    image: string;
}

export function ModalQrCode({open, setOpen, title, image}: QrCodeProps) {
    const [seconds, setSeconds] = useState(30);

    useEffect(() => {
        if (open) {
            setSeconds(30);
        }
    }, [open]);

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        if (seconds > 0 && open) {
            timer = setTimeout(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [seconds, open]);
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
                            {title === 'qr_cccd' ?
                                <Text style={styles.item}>QR code thẻ căn
                                    cước công dân</Text> :
                                <Text style={styles.item}>QR code định
                                    danh điện tử</Text>}
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            width: '100%',
                            top: -30,
                        }}>
                            <View>
                                <View style={styles.wrapImage}>
                                    <ImageBackground
                                        source={imageSources[image]}
                                        style={styles.fullQr}
                                    />
                                </View>

                                {image === "qrCccd" ? "" :
                                    <View style={{flexDirection: 'row', justifyContent: 'center', paddingVertical: 20}}>
                                        <Text style={{color: 'white', fontWeight: '700'}}>Hiệu lực của QR code
                                            còn </Text>
                                        <Text style={{
                                            color: '#dcc913',
                                            fontWeight: '700'
                                        }}>00:{seconds < 10 ? `0${seconds}` : seconds}</Text>
                                    </View>
                                }
                            </View>
                        </View>
                    </View>
                </BackgroundImage>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
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
        width: wResponsive(160),
        height: wResponsive(160),
    },
    wrapImage: {
        backgroundColor: 'white',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 150,
        borderWidth: 1,
        borderColor: "#eadf7e",
        width: wResponsive(210),
        height:wResponsive(210)
    },
    item: {
        color: 'white',
        fontWeight: '700',
        paddingHorizontal: 15
    }
});