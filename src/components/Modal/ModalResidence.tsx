import React, {useState, useEffect} from 'react';
import {Modal, StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import {FontAwesome6} from '@expo/vector-icons';
import {Colors, FontSize, hResponsive, pResponsive, wResponsive} from "@/constants/Colors";
import {router} from "expo-router";

export default function ModalResidence({modalVisible, setModalVisible}: any) {
    const [code, setCode] = useState<any>([]);
    const codeLength = Array(6).fill(0);
    const [indexNumber, setIndexNumber] = useState(0)
    useEffect(() => {
        if (code.length === 6) {
            console.log("code", code.length)
            router.push("/favorites/residenceInformation")
        }
    }, [code]);

    const onPress = (prop: any) => {
        if (prop === "delete") {
            setCode((prevArray: any) => {
                const newArray = prevArray.slice(0, -1);
                console.log("After delete:", newArray);
                return newArray;
            });
        } else {
            setCode((prevArray: any) => {
                const newArray = [...prevArray, prop];
                console.log("Updated code:", newArray);
                return newArray;
            });
        }
    };
    const renderCodeDots = () => (
        <View style={styles.codeView}>
            {codeLength.map((_, index) => (
                <View key={index} style={styles.codeContainer}>
                    <View
                        style={[styles.codeEmpty, {backgroundColor: code[index] !== undefined ? '#d8b113' : '#cfcfcf'}]}/>
                </View>
            ))}
        </View>
    );

    const renderNumberPad = () => (
        <View style={{backgroundColor: '#dcdcdc', paddingVertical: 20}}>
            {[
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
                [null, 0, 'delete']
            ].map((row, rowIndex) => (
                <View key={rowIndex} style={styles.numberRow}>
                    {row.map((item, colIndex) => (
                        <TouchableOpacity onPress={() => onPress(item)} key={colIndex}
                                          style={item === 'delete' ? styles.deleteButton : item !== null ? styles.numberButton :
                                              styles.emptyButton}>
                            {item === 'delete' ? (
                                <FontAwesome6 name="delete-left"
                                              size={pResponsive(24)}
                                              color="black"
                                              style={{textAlign: 'center'}}
                                />
                            ) : item !== null ? (
                                <Text style={styles.numberText}>{item}</Text>
                            ) : null}
                        </TouchableOpacity>
                    ))}
                </View>
            ))}
        </View>
    );

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
                                {renderCodeDots()}
                                <View style={{backgroundColor: "#f6f6f6", paddingVertical: 20}}>
                                    <Text style={{textAlign: 'center'}}>Quên passcode</Text>
                                </View>
                                {renderNumberPad()}
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    // Giữ nguyên tất cả các styles như trong code gốc
    container: {flex: 1},
    containerLayout: {paddingHorizontal: '3%'},
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
        height: 3,
        backgroundColor: '#e3e3e3',
    },
    codeView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        marginVertical: 40
    },
    codeContainer: {
        borderWidth: 2,
        borderColor: '#d1d1d1',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: wResponsive(25),
        height: hResponsive(25),
        marginHorizontal: 5
    },
    codeEmpty: {
        width: wResponsive(15),
        height: hResponsive(15),
        borderRadius: 15,
    },
    numberRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    numberButton: {
        backgroundColor: '#fff',
        width: '32%',
        paddingVertical: 15,
        borderRadius: 5
    },
    numberText: {
        textAlign: 'center',
        fontSize: pResponsive(FontSize.textBigLetters),
        fontWeight: '700'
    },
    deleteButton: {
        width: '32%',
        paddingVertical: 15,
        borderRadius: 5
    },
    emptyButton: {
        width: '32%',
        paddingVertical: 15,
    },

});