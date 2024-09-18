import {Colors, FontSize} from "@/constants/Colors";
import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TouchableWithoutFeedback,
    Dimensions
} from "react-native";
// import AppImage from "@/components/Logo/ImgReq";
import {openURL} from "expo-linking";
import React, {useState} from "react";
import Checkbox from 'expo-checkbox';

const windowWidth = Dimensions.get('window').width;

interface ContactProps {
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalResidence({modalVisible, setModalVisible}: ContactProps) {
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <View style={styles.modalBackground}>
                        <TouchableWithoutFeedback>
                            <View style={styles.modalContainer}>
                                <View style={styles.containerLayout}>
                                    <Text style={styles.titleText}>Nhập passcode</Text>
                                </View>
                                <View style={styles.appLineBig}/>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    containerLayout: {
        paddingHorizontal: '3%'
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',

    },
    modalContainer: {
        width: '100%',
        paddingVertical: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
    },


    titleText: {
        fontSize: FontSize.textLowercase,
        fontWeight: '700',
        marginBottom: 20,
    },


    appLineBig: {
        height: 3, // Chiều cao của gạch ngang
        backgroundColor: '#e3e3e3', // Màu gạch ngang
        marginVertical: 15,
    },
});
