import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {Camera, CameraView} from 'expo-camera';

import {Ionicons} from '@expo/vector-icons/';


interface item {
    type: string,
    data: string
}

const QRScannerScreen = ({navigation}: any) => {
    const [hasPermission, setHasPermission] = useState<any>("");
    const [torch, setTorch] = useState(false);

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({type, data}: item) => {
        // Xử lý khi quét được mã QR
        console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
        // Có thể thêm logic navigate hoặc xử lý data ở đây
    };

    if (hasPermission === null) {
        return <View/>;
    }
    if (hasPermission === false) {
        return <Text>Không có quyền truy cập camera</Text>;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Quét mã QR</Text>
            </View>
            <View style={styles.cameraContainer}>
                <CameraView
                    style={styles.camera}
                >
                    <View style={styles.overlay}>
                        <View style={styles.unfocusedContainer}></View>
                        <View style={styles.middleContainer}>
                            <View style={styles.unfocusedContainer}></View>
                            <View style={styles.focusedContainer}>
                                {/* QR Frame Corners */}
                                <View style={[styles.cornerTopLeft, styles.corner]}/>
                                <View style={[styles.cornerTopRight, styles.corner]}/>
                                <View style={[styles.cornerBottomLeft, styles.corner]}/>
                                <View style={[styles.cornerBottomRight, styles.corner]}/>
                            </View>
                            <View style={styles.unfocusedContainer}></View>
                        </View>
                        <View style={styles.unfocusedContainer}></View>
                        <View style={styles.wrapBg}>
                            <View style={styles.bottomTextContainer}>
                                <Text style={styles.text}>
                                    Hãy đưa mã quét vào giữa khung này nhé
                                </Text>
                            </View>
                        </View>

                    </View>
                </CameraView>
            </View>
            <TouchableOpacity
                style={styles.torchButton}
                onPress={() => setTorch(!torch)}
            >
                <View style={{backgroundColor: 'white', borderRadius: 50}}>
                    <Ionicons
                        name={torch ? "flash" : "flash-off"}
                        size={26}
                        color="black"
                    />
                </View>

            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    backButton: {
        position: 'absolute',
        left: 15,
    },
    backText: {
        color: 'white',
        fontSize: 16,
    },
    header: {
        position: 'absolute',
        top: 100, // Điều chỉnh khoảng cách từ trên xuống
        width: '100%',
        alignItems: 'center',
        zIndex: 1, // Đảm bảo hiển thị trên camera
    },
    title: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
    cameraContainer: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    overlay: {
        flex: 1,
    },
    unfocusedContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    middleContainer: {
        flexDirection: 'row',
        height: 250,
    },
    focusedContainer: {
        flex: 8,
        position: 'relative',
    },
    corner: {
        position: 'absolute',
        width: 20,
        height: 20,
        borderColor: '#FFD700',
        borderWidth: 8,
    },
    cornerTopLeft: {
        top: 0,
        left: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
    },
    cornerTopRight: {
        top: 0,
        right: 0,
        borderLeftWidth: 0,
        borderBottomWidth: 0,
    },
    cornerBottomLeft: {
        bottom: 0,
        left: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
    },
    cornerBottomRight: {
        bottom: 0,
        right: 0,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
    bottomTextContainer: {
        backgroundColor: 'rgba(209,45,45,0.7)',
    },
    wrapBg: {
        backgroundColor: 'rgba(255,79,79,0.5)', // Màu đỏ với độ trong suốt 0.5
        // Các thuộc tính khác của View
        position: 'absolute',
        bottom: 200,
        width: '100%',
        paddingVertical: 10
    },
    text: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
    torchButton: {
        position: 'absolute',
        bottom: 120,
        alignSelf: 'center',
        padding: 10,
        borderRadius: 50,
        backgroundColor: 'rgba(246,243,243,0.5)',
    },
});

export default QRScannerScreen;