import React, {useState, useRef, useEffect} from "react";
import {
    View,
    ScrollView,
    Dimensions,
    Text,
    StyleSheet,
    TouchableOpacity,
    NativeSyntheticEvent,
    NativeScrollEvent,
} from "react-native";
import AppImage from "@/components/Images/ImgReq";
import Checkbox from "expo-checkbox";
import {usePathname, useRouter} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const {width, height} = Dimensions.get("window");

type SlideItem = {
    source: string;
    title: string;
};

const slides: SlideItem[] = [
    {
        source: "vnp_image_1",
        title: "Định danh công dân trên môi trường kỹ thuật số",
    },
    {source: "vnp_image_2", title: "Thay thế các giấy tờ truyền thống"},
    {
        source: "vnp_image_3",
        title:
            "Cung cấp các tiện ích phát triển công dân số, chính phủ số, xã hội số",
    },
];

export default function LoginScreen() {
    const pathname = usePathname();
    useEffect(() => {
        if (pathname !== "/") return
        const checkLoginStatus = async () => {
            try {
                const isLoggedIn = await AsyncStorage.getItem('loginUser');
                if (isLoggedIn === 'true') {
                    router.push('/drawer/login');
                }
            } catch (error) {
                console.log('Error checking login status:', error);
            }
        };
        checkLoginStatus();
    }, []);
    const [isChecked, setChecked] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const router = useRouter()
    const scrollViewRef = useRef<ScrollView>(null);
    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        setActiveIndex(Math.round(index));
    };

    const scrollToIndex = (index: number) => {
        scrollViewRef.current?.scrollTo({x: index * width, animated: true});
    };

    // useEffect(() => {
    //   const timer = setInterval(() => {
    //     scrollToIndex((activeIndex + 1) % slides.length);
    //   }, 5000);
    //   return () => clearInterval(timer);
    // }, [activeIndex]);


    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <ScrollView
                    ref={scrollViewRef}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                >
                    {slides.map((item, index) => (
                        <View key={index} style={[styles.slide, {width: width}]}>
                            <AppImage
                                source={item.source}
                                style={styles.image}
                                resizeMode="contain"
                            />
                            <Text
                                numberOfLines={2}
                                ellipsizeMode={"tail"}
                                style={styles.title}
                            >
                                {item.title}
                            </Text>
                        </View>
                    ))}
                </ScrollView>
                <View style={styles.indicatorContainer}>
                    {slides.map((_, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => scrollToIndex(index)}
                            style={[
                                styles.indicator,
                                {
                                    width: index === activeIndex ? 15 : 5,
                                    height: 5,
                                    backgroundColor:
                                        index === activeIndex ? "#d6000a" : "#E5D9D9",
                                },
                            ]}
                        />
                    ))}
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity
                        onPress={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                    >
                        <AppImage
                            source={activeIndex > 0 ? "prev_active" : "prev_inactive"}
                            style={styles.imageSlider}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            scrollToIndex(Math.min(slides.length - 1, activeIndex + 1))
                        }
                    >
                        <AppImage
                            source={
                                activeIndex < slides.length - 1
                                    ? "next_active"
                                    : "next_inactive"
                            }
                            style={styles.imageSlider}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.bottomSection}>
                {
                    activeIndex === 2 && <>
                        <View style={styles.section}>
                            <Checkbox
                                style={styles.checkbox}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? "#F5C647" : undefined}
                            />
                            <View style={styles.sliderFooterText}>
                                <Text style={styles.paragraph} numberOfLines={2} ellipsizeMode="tail">
                                    Tôi đồng ý với <Text style={[styles.highlightText]}>Chính sách quyền riêng
                                    tư</Text> và <Text style={styles.highlightText}>Điều khoản sử dụng ứng dụng và dịch
                                    vụ</Text>
                                </Text>
                            </View>
                        </View>

                        <View style={styles.buttonContainerFooter}>
                            <TouchableOpacity
                                onPress={() => {
                                    if (isChecked) {
                                        router.push("/home")
                                    }
                                }}
                                style={[
                                    styles.buttonStart,
                                    {backgroundColor: isChecked ? "#d6000a" : "#E5E5E5"},
                                ]}
                                disabled={!isChecked}
                            >
                                <Text style={{
                                    textAlign: "center",
                                    fontFamily: 'sans-serif',
                                    fontWeight: 'bold',
                                    color: isChecked ? '#fff' : '#C5C5C5'
                                }}>Bắt đầu sử dụng</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    topSection: {
        flex: 3,
    },

    buttonStart: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 5,
    },

    bottomSection: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        marginHorizontal: 40,
    },

    slide: {
        width: width,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 100,
    },

    image: {
        width: width * 0.8,
        height: 280,
        marginTop: 40,
    },

    title: {
        fontSize: 15,
        textAlign: "center",
        marginTop: 40,
        fontWeight: "700",
        fontFamily: "sans-serif",
        paddingHorizontal: 10,
        width: 280,
    },

    indicatorContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 0,
        left: 0,
        bottom: 180,
    },

    indicator: {
        marginHorizontal: 3,
        borderRadius: 50,
    },

    buttonRow: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        gap: 20,
        marginBottom: 25,
    },

    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    loadingImage: {
        width: width,
        height: height,
    },

    sliderFooter: {
        flex: 2,
    },

    imageSlider: {
        height: 50,
        width: 50,
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
    },
    paragraph: {
        fontSize: 14,
        // color: "#4630EB",
    },
    checkbox: {
        color: "#C5C5C5",
        borderColor: "#C5C5C5"
    },
    sliderFooterText: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        color: "#000000",
    },
    buttonContainerFooter: {
        marginVertical: 20,
        width: "100%",
        marginHorizontal: 40,
        alignContent: "center",
        justifyContent: "center",
    },
    highlightText: {
        color: "#43A4F4",
    },
});
