import React, {useEffect, useState} from 'react';
import {ImageBackground, Modal, StyleSheet, Text, View} from 'react-native';
import {imageSources} from '@components/Images/ImgReq';
import BackgroundImage from '@components/Images/BackgroundImage';
import {Feather} from '@expo/vector-icons';
import {wResponsive} from '@/constants/Colors';

interface QrCodeProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    title?: string;
    image: string;
}

export function ModalQrCode({open, setOpen, title, image}: QrCodeProps) {
    const [seconds, setSeconds] = useState(60);  // Khởi tạo với giá trị 60 giây

    useEffect(() => {
        if (open) {
            setSeconds(60);  // Set lại giá trị về 60 khi mở modal
        }
    }, [open]);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout> | null = null;
        if (open) {
            timer = setTimeout(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [seconds, open]);

    // Hàm định dạng giây theo yêu cầu
    const formatSeconds = (seconds: number) => {
        if (seconds >= 0) {
            return `00:${seconds < 10 ? `0${seconds}` : seconds}`;  // Hiển thị cho các giá trị không âm
        } else {
            return `00:-${Math.abs(seconds) < 10 ? `0${Math.abs(seconds)}` : Math.abs(seconds)}`;  // Hiển thị với số âm
        }
    };

    return (
        <View style={styles.container}>
            <Modal animationType="slide" transparent={true} visible={open} onRequestClose={() => setOpen(false)}>
                <BackgroundImage source={imageSources['bgScan']} style={styles.background}>
                    <View style={[{paddingVertical: 20}, styles.containerLayout]}>
                        <View style={{flexDirection: 'row', alignItems: 'center',paddingTop:28}}>
                            <Feather onPress={() => setOpen(false)} name="x" size={24} color="white" />
                            {title === 'qr_cccd' ? (
                                <Text style={styles.item}>QR code thẻ căn cước công dân</Text>
                            ) : (
                                <Text style={styles.item}>QR code định danh điện tử</Text>
                            )}
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                width: '100%',
                                top: -60,
                            }}
                        >
                            <View>
                                <View style={styles.wrapImage}>
                                    <ImageBackground source={imageSources[image]} style={styles.fullQr} />
                                </View>

                                {image === 'qrCccd' ? (
                                    ''
                                ) : (
                                    <View style={{flexDirection: 'row', justifyContent: 'center', paddingVertical: 25}}>
                                        <Text style={{color: 'white', fontWeight: '700',fontSize:14}}>Hiệu lực của QR code còn </Text>
                                        <Text style={{color: '#dcc913', fontWeight: '700'}}>{formatSeconds(seconds)}</Text>
                                    </View>
                                )}
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
        flex: 1,
    },
    containerLayout: {
        paddingHorizontal: '3%',
    },
    background: {
        width: '100%',
        height: '100%',
    },
    fullQr: {
        width: wResponsive(200),
        height: wResponsive(200),
    },
    wrapImage: {
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 150,
        borderWidth: 1,
        borderColor: '#eadf7e',
        width: wResponsive(260),
        height: wResponsive(260),
    },
    item: {
        color: 'white',
        fontWeight: '700',
        paddingHorizontal: 15,
    },
});