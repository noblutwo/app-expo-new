import React, {useEffect, useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import {FontAwesome6} from '@expo/vector-icons';
import {FontSize, hResponsive, pResponsive, wResponsive} from "@/constants/Colors";
import {router} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ModelProps {
    modalVisible: boolean,
    setModalVisible: (modalVisible: boolean) => void
}


export default function ModalResidence({modalVisible, setModalVisible}: ModelProps) {
    const [code, setCode] = useState<any>([]);
    const codeLength = Array(6).fill(0);
    const [open, setOpen] = useState(false)
    const [wrongPass, setWrongPass] = useState(5)
    const textErr = [
        {textWrong: `Passcode không chính xác, Nhập sai quá 5 lần sẽ bị khóa passcode sang ngày hôm sau. Còn ${wrongPass} lần thử`},
        {textWrong: 'Vui lòng thử lại vào ngày mai'}
    ]
    const resetPassErrorAt00 = async () => {
        const now = new Date();
        const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        const timeUntilMidnight = nextMidnight.getTime() - now.getTime();

        setTimeout(async () => {
            await AsyncStorage.setItem('passErr', '5');
            setWrongPass(0);
            resetPassErrorAt00(); // Set up the next day's reset
        }, timeUntilMidnight);
    };

    const selectPasscode = async () => {
        // await AsyncStorage.setItem('passErr', '5');
        const userString = await AsyncStorage.getItem('user') as string;
        const user = JSON.parse(userString);
        const numberErr = await AsyncStorage.getItem('passErr');
        if (Number(numberErr) <= 0) {
            setWrongPass(0);
            setOpen(true)
            return;
        }

        if (user?.passcode) {
            const passcodeArray = user.passcode.split('').map(Number);
            const isEqual = passcodeArray.length === code.length &&
                passcodeArray.every((value: any, index: number) => value === code[index]);

            if (isEqual) {
                await AsyncStorage.setItem('passErr', '5');
                router.push("/(informations)/residence");
                return;
            }

            if (code.length === 6) {
                setOpen(true);
                const newNumberErr = Math.max(0, Number(numberErr) - 1);
                await AsyncStorage.setItem('passErr', newNumberErr.toString());
                setWrongPass(newNumberErr);
                setCode([]);
            }
        }
    };

    useEffect(() => {
        selectPasscode()
    }, [code]);
    const onPress = (prop: any) => {
        if (prop === "delete") {
            setCode((prevArray: any) => {
                return prevArray.slice(0, -1);
            });
        } else {
            setCode((prevArray: any) => {
                return [...prevArray, prop];
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
                                {open &&
                                    <View style={{
                                        backgroundColor: "#ffdcdc",
                                        paddingVertical: 15,
                                        paddingHorizontal: 20
                                    }}>
                                        <Text
                                            style={{color: '#ff4141'}}>{wrongPass === 0 ? textErr[1]?.textWrong : textErr[0]?.textWrong}</Text>
                                    </View>
                                }

                                <View style={{backgroundColor: "#f6f6f6", paddingVertical: 15}}>
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