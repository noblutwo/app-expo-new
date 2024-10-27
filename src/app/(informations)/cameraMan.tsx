import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {Camera} from 'expo-camera';
import {BarCodeScanner} from 'expo-barcode-scanner';
import {Ionicons} from '@expo/vector-icons';

const QRScannerScreen = ({navigation}) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [torch, setTorch] = useState(false);

    useEffect(() => {
        (async () => {
            const {status} = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({type, data}) => {
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
                <BarCodeScanner
                    style={styles.camera}
                    type={BarCodeScanner.Constants.Type.back}
                    barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                    onBarCodeScanned={handleBarCodeScanned}
                    torchMode={torch ? 'on' : 'off'}
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
                        <View style={styles.bottomTextContainer}>
                            <Text style={styles.text}>
                                Hãy đưa mã quét vào giữa khung này nhé
                            </Text>
                        </View>
                    </View>
                </BarCodeScanner>
            </View>
            <TouchableOpacity
                style={styles.torchButton}
                onPress={() => setTorch(!torch)}
            >
                <Ionicons
                    name={torch ? "flash" : "flash-outline"}
                    size={24}
                    color="white"
                />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    header: {
        height: 60,
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    backButton: {
        position: 'absolute',
        left: 15,
    },
    backText: {
        color: 'white',
        fontSize: 16,
    },
    title: {
        color: 'white',
        fontSize: 18,
        flex: 1,
        textAlign: 'center',
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
        position: 'absolute',
        bottom: 80,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    text: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
    torchButton: {
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
        padding: 15,
        borderRadius: 50,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
});

export default QRScannerScreen;