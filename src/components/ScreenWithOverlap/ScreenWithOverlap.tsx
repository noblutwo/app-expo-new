import React, {useEffect, useRef, useState} from "react";
import {View, StyleSheet, Dimensions, FlatList, NativeSyntheticEvent, NativeScrollEvent} from "react-native";
import AppImage from "@/components/Images/ImgReq";
import {useStyles} from "@/styles/styles";

const {width: screenWidth} = Dimensions.get('window');

interface SlideItem {
    source: string;
    title: string;
}

const slides: SlideItem[] = [
    {
        source: "home_cthtdbll",
        title: "Định danh công dân trên môi trường kỹ thuật số",
    },
    {
        source: "home_vneid_add",
        title: "Thay thế các giấy tờ truyền thống"
    },
    {
        source: "home_ctdbll",
        title: "Cung cấp các tiện ích phát triển công dân số, chính phủ số, xã hội số",
    },
];

const SliderLayOutHome: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const flatListRef = useRef<FlatList<SlideItem> | null>(null);
    const globalStyle = useStyles();

    const renderItem = ({item}: { item: SlideItem }) => (
        <View style={styles.slide}>
            <AppImage source={item?.source} style={styles.image} resizeMode="cover"/>
        </View>
    );

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        setActiveIndex(Math.round(index));
    };

    useEffect(() => {
        const timer = setInterval(() => {
            if (flatListRef.current) {
                if (activeIndex < slides.length - 1) {
                    flatListRef.current.scrollToIndex({index: activeIndex + 1, animated: true});
                } else {
                    flatListRef.current.scrollToIndex({index: 0, animated: true});
                }
            }
        }, 5000);
        return () => clearInterval(timer);
    }, [activeIndex]);

    return (
        <View style={styles.sliderContainer}>
            <FlatList
                ref={flatListRef}
                data={slides}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    sliderContainer: {
        height: 160, // Fixed height
        width: '100%',
        backgroundColor: 'black',
        borderRadius: 20,
        overflow: 'hidden', // This ensures the child elements respect the container's border radius
    },
    slide: {
        width: screenWidth,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        // width: '100%',
        height: '100%',
        width: screenWidth,
        aspectRatio: 16 / 6,
        // borderRadius: 20,
    },
});

export default SliderLayOutHome;