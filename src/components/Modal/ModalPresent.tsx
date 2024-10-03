import {Modal, Pressable, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {Feather} from '@expo/vector-icons/';
import {FontSize} from "@/constants/Colors";
import {Button, Checkbox} from "react-native-paper";
import React, {useState} from "react";
import {router} from "expo-router";


interface OpenBole {
    open: boolean;
    setOpen: (value: boolean) => void;
}

function ModalPresent({open, setOpen}: OpenBole) {
    const [checked, setChecked] = useState<boolean>(false);
    const [checked2, setChecked2] = useState<boolean>(false);

    const handlerTick = () => {
        if (!checked && !checked2) return
        if (checked) {
            router.push("/(informations)/hihi")
        } else {
            console.log("hihi")
        }
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={open}
            onRequestClose={() => setOpen(false)}
        >
            <TouchableWithoutFeedback onPress={() => setOpen(false)}>
                <View style={styles.modalBackground}>
                    <TouchableWithoutFeedback>
                        <View style={styles.modalContainer}>
                            <View style={[{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingVertical: 15
                            }, styles.gridContainer]}>
                                <Text style={{fontSize: FontSize.textLowercase, fontWeight: 700}}>
                                    Chọn giấy tờ muốn xuất trình
                                </Text>
                                <Feather name="x" size={24} color="black"/>
                            </View>
                            <View style={styles.linedUser}/>
                            <View style={styles.gridContainer}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingVertical: 15
                                }}>
                                    <Text>
                                        Thẻ căn cước/CCCD
                                    </Text>
                                    <Checkbox
                                        color={"#f1ca00"}
                                        status={checked ? 'checked' : 'unchecked'}
                                        onPress={() => {
                                            setChecked(!checked);
                                        }}
                                    />
                                </View>
                                <View style={styles.linedUser}/>
                            </View>
                            <View style={styles.gridContainer}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingVertical: 15
                                }}>
                                    <Text>
                                        Thông tin cư trú
                                    </Text>
                                    <Checkbox
                                        color={"#f1ca00"}
                                        status={checked2 ? 'checked' : 'unchecked'}
                                        onPress={() =>
                                            setChecked2(!checked2)
                                        }
                                    />
                                </View>
                                <View style={styles.linedUser}/>
                            </View>
                            <TouchableOpacity
                                onPress={handlerTick}
                                style={[{marginVertical: 30, backgroundColor: '#dd0000', marginHorizontal: '3%'}]}>
                                <Text style={{
                                    fontSize: FontSize.textLowercase,
                                    color: 'white',
                                    textAlign: 'center',
                                    paddingVertical: 10,
                                    fontWeight: 700
                                }}>Xác nhận</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    gridContainer: {
        paddingHorizontal: "3%",
    },
    modalContainer: {
        width: "100%",

        backgroundColor: 'white',
        elevation: 5,
    },
    titleText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 20,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    cancelButton: {
        backgroundColor: '#efefef',
        paddingVertical: 15,
        borderRadius: 20,
    },
    cancelButtonText: {
        textAlign: 'center',
        fontSize: 16,
    },
    option: {
        alignItems: 'center',
    },
    linedUser: {
        borderBottomWidth: 1,
        borderBottomColor: "#f1f1f1",
        flex: 1,
    },
});

export default ModalPresent;