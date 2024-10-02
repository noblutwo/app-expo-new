import {ImageBackground, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View} from "react-native";
import {LayoutNotFound} from "@components/NotFound/LayoutNotFound";
import {SceneMap, TabView} from "react-native-tab-view";
import React, {useState} from "react";
import {imageSources} from "@components/Images/ImgReq";
import {hResponsive} from "@/constants/Colors";
import BackgroundImage from "@components/Images/BackgroundImage";
import {Button} from "react-native-paper";
import ModalPresent from "@components/Modal/ModalPresent";

const Daxacthuc = () => {
    const [open, setOpen] = useState(false)
    return (
        <View style={{flex: 1}}>
            <View style={[{
                backgroundColor: '#fff',
                justifyContent: 'space-between',
                flex: 1,
            }, styles.containerLayout]}>
                <LayoutNotFound styleHeight={50} title={"Chưa có thông tin"}/>
                <View style={{marginVertical: 40}}>
                    <TouchableOpacity onPress={() => setOpen(true)}>
                        <Button style={{backgroundColor: '#df0000', borderRadius: 5}} textColor="white">Xuất trình giấy
                            tờ</Button>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginVertical: 10}}>
                        <Button style={{backgroundColor: '#ffd3d3', borderRadius: 5}} textColor="#df0000">Thêm giấy phép
                            lái xe</Button>
                    </TouchableOpacity>
                </View>
            </View>
            <ModalPresent open={open} setOpen={setOpen}/>
        </View>
    );

};

const Choxacthuc = () => (
    <View style={[{flex: 1, backgroundColor: '#fff'}, styles.containerLayout]}>
        <LayoutNotFound styleHeight={50} title={"Chưa có thông tin"}/>
    </View>
);

const khongdat = () => (
    <View style={[{flex: 1, backgroundColor: '#fff'}, styles.containerLayout]}>
        <LayoutNotFound styleHeight={50} title={"Chưa có thông tin"}/>
    </View>
);

const renderScene = SceneMap({
    1: Daxacthuc,
    2: Choxacthuc,
    3: khongdat,
});

function Driving() {
    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key: 1, title: 'Đã xác thực'},
        {key: 2, title: 'Chờ xác thực'},
        {key: 3, title: 'Xác thực không đạt'},
    ]);

    const handleTabPress = (tabIndex: number) => {
        setIndex(tabIndex);
    };
    return (
        <View style={{flex: 1}}>
            <BackgroundImage source={imageSources["bgTienIch"]} style={{height: hResponsive(50)}}>
                <View style={[styles.containerLayout, {flexDirection: 'row'}]}>
                    {routes.map((item, indexId) => (
                        <Text
                            onPress={() => handleTabPress(indexId)}
                            key={item.key} // Sử dụng item.key thay vì indexId
                            style={[styles.itemTitle, index === indexId ? styles.itemTab : styles.itemTabWhite]} // So sánh với kiểu số
                        >
                            {item.title}
                        </Text>
                    ))}
                </View>
            </BackgroundImage>
            <TabView
                navigationState={{index, routes}}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{width: layout.width}}
                renderTabBar={() => null}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    containerLayout: {
        paddingHorizontal: '3%'
    },
    itemTab: {
        backgroundColor: '#ea0000',
        color: 'white',
        fontWeight: '700',

    },
    itemTabWhite: {
        backgroundColor: '#ffffff',

    },
    itemTitle: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
        margin: 5
    }


});
export default Driving