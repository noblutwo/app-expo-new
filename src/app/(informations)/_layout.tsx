import React, {useState} from "react";
import {useRouter} from "expo-router";
import {Stack} from "expo-router/Stack";
import {StyleSheet, TouchableOpacity, ImageBackground, View} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import {HeaderTitle} from "@/components/HeaderTitle/HeaderTitle";
import {useAuth} from "@/context/AuthContext";
import AppImage, {imageSources} from "@components/Images/ImgReq";
import {hResponsive, wResponsive} from "@/constants/Colors";
import {ModalQrCode} from "@components/Modal/ModalQrCode";
import {HeaderTitleFamily} from "@components/HeaderTitle/HeaderTitleFamily";

export default function AuthLayout() {
    const router = useRouter();
    const {isLoggedIn} = useAuth();
    const [openModal, setOpenModal] = useState(false)
    const handler = () => {
        if (isLoggedIn) {
            router.back()
        } else {
            router.push('/drawer/login')
        }
    }
    return (
        <Stack screenOptions={{
            // headerLeft: () => null
        }}>
            <Stack.Screen
                name="residence"
                options={{
                    headerBackVisible: false,
                    headerTitle: () => <HeaderTitle title="Thông tin cư trú"/>,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.push('/drawer/tabs')} >
                            <Ionicons name="arrow-back" size={20} color="#424242" style={styles.marginBottom}/>
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <View>
                            <TouchableOpacity onPress={() => setOpenModal(true)}>
                                <AppImage source="qrCodeHeader" style={styles.item}/>
                            </TouchableOpacity>
                            <ModalQrCode open={openModal} setOpen={setOpenModal} image={"qrScan"}/>
                        </View>

                    ),
                    headerBackground: () => (
                        <View style={styles.headerBackgroundStyle}></View>   // Màu nền đỏ tại đây
                    ),
                }}
            />
            <Stack.Screen
                name="family"
                options={{
                    headerBackVisible: false,
                    headerTitle: () => <HeaderTitleFamily title="Thành viên khác trong hộ gia đình"/>,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => handler()} >
                            <Ionicons name="arrow-back" size={20} color="#424242" style={styles.marginBottom}/>
                        </TouchableOpacity>
                    ),
                    headerBackground: () => (
                        <ImageBackground
                            source={imageSources["bgHeaderFamily"]}
                            style={styles.headerBackground}
                        />

                    ),
                }}
            />
            <Stack.Screen
                name="driving"
                options={{
                    headerBackVisible: false,
                    headerTitle: () => <HeaderTitle title="Giấy phép lái xe"/>,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.push('/drawer/tabs')} >
                            <Ionicons name="arrow-back" size={20} color="#424242" style={styles.marginBottom}/>
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <View>
                            <TouchableOpacity onPress={() => setOpenModal(true)}>
                                <AppImage source="qrCodeHeader" style={styles.item}/>
                            </TouchableOpacity>
                            <ModalQrCode open={openModal} setOpen={setOpenModal} image={"qrScan"}/>
                        </View>

                    ),
                    headerBackground: () => (
                        <View style={styles.headerBackgroundStyle}></View>   // Màu nền đỏ tại đây
                    ),
                }}
            />
            <Stack.Screen
                name="idCard"
                options={{
                    headerBackVisible: false,
                    headerTitle: () => <HeaderTitle title="Xuất trình giấy tờ"/>,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.push('/drawer/tabs')} >
                            <Ionicons name="arrow-back" size={20} color="#424242" style={styles.marginBottom} />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <View>
                            <TouchableOpacity onPress={() => setOpenModal(true)}>
                                <AppImage source="qrCodeHeader" style={styles.item}/>
                            </TouchableOpacity>
                            <ModalQrCode open={openModal} setOpen={setOpenModal} image={"qrScan"}/>
                        </View>

                    ),
                    headerBackground: () => (
                        <View style={styles.headerBackgroundStyle}></View>   // Màu nền đỏ tại đây
                    ),
                }}
            />
            <Stack.Screen
                name="[user]"
                options={{
                    headerBackVisible: false,
                    headerTitle: () => <HeaderTitle title="Xuất trình giấy tờ"/>,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.push('/(informations)/driving')}
                                          >
                            <Ionicons name="arrow-back" size={20} color="#424242" style={styles.marginBottom}/>
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <View>
                            <TouchableOpacity onPress={() => setOpenModal(true)}>
                                <AppImage source="qrCodeHeader" style={styles.item}/>
                            </TouchableOpacity>
                            <ModalQrCode open={openModal} setOpen={setOpenModal} image={"qrScan"}/>
                        </View>

                    ),
                    headerBackground: () => (
                        <View style={styles.headerBackgroundStyle}></View>   // Màu nền đỏ tại đây
                    ),
                }}
            />
            <Stack.Screen
                name="cardCar"
                options={{
                    headerBackVisible: false,
                    headerTitle: () => <HeaderTitle title="Nhập thông tin tích hợp"/>,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.push('/(informations)/driving')}
                                          >
                            <Ionicons name="arrow-back" size={20} color="#424242" style={styles.marginBottom}/>
                        </TouchableOpacity>
                    ),
                    headerBackground: () => (
                        <ImageBackground
                            source={imageSources["bgHeaderLayout"]}
                            style={styles.backgroundImage}
                        />
                    ),
                }}
            />
        </Stack>
    );
}
const styles = StyleSheet.create({
    loadingContainer: {
        paddingRight: 10,
    },
    item: {
        // marginTop: 5,
        width: wResponsive(20),
        height: hResponsive(20),
        marginBottom: 30,
    },
    headerBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '35%',
        resizeMode: 'cover',
    },
    headerBackgroundStyle: {
        flex: 1,
        backgroundColor: '#f6f1ed',
        width: '100%',
        height: '100%',
    },
    marginBottom: {color: '#424242', marginBottom:30}
});