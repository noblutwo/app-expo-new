import {Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {Feather} from '@expo/vector-icons/';
import {FontSize} from "@/constants/Colors";
import React, {useState} from "react";
import {router} from "expo-router";

interface OpenBole {
    open: boolean;
    setOpen: (value: boolean) => void;
}

const CustomCheckbox = ({checked, onPress} : any) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.checkboxContainer}
        >
            <View style={[
                styles.checkbox,
                checked && styles.checkboxChecked
            ]}>
                {checked && (
                    <Feather
                        name="check"
                        size={14}
                        color="white"
                    />
                )}
            </View>
        </TouchableOpacity>
    );
};

function ModalPresent({open, setOpen}: OpenBole) {
    const [checked, setChecked] = useState<boolean>(false);
    const [checked2, setChecked2] = useState<boolean>(false);

    const handlerTick = () => {
        if (!checked && !checked2) return
        if (checked) {
            router.push("/(informations)/cccd")
            setOpen(false)
        }
        if (checked2) {
            router.push("/(informations)/info")
            setOpen(false)
        }
        if (checked2 && checked) {
            router.push("/(informations)/true")
            setOpen(false)
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
                            <View style={[styles.headerContainer, styles.gridContainer]}>
                                <Text style={styles.headerText}>
                                    Chọn giấy tờ muốn xuất trình
                                </Text>
                                <TouchableOpacity onPress={() => setOpen(false)}>
                                    <Feather name="x" size={24} color="black"/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.linedUser}/>

                            <View style={styles.gridContainer}>
                                <View style={styles.optionRow}>
                                    <Text style={styles.optionText}>
                                        Thẻ căn cước/CCCD
                                    </Text>
                                    <CustomCheckbox
                                        checked={checked}
                                        onPress={() => setChecked(!checked)}
                                    />
                                </View>
                                <View style={styles.linedUser}/>
                            </View>

                            <View style={styles.gridContainer}>
                                <View style={styles.optionRow}>
                                    <Text style={styles.optionText}>
                                        Thông tin cư trú
                                    </Text>
                                    <CustomCheckbox
                                        checked={checked2}
                                        onPress={() => setChecked2(!checked2)}
                                    />
                                </View>
                                <View style={styles.linedUser}/>
                            </View>

                            <TouchableOpacity
                                onPress={handlerTick}
                                style={styles.confirmButton}>
                                <Text style={styles.confirmButtonText}>Xác nhận</Text>
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
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    headerText: {
        fontSize: FontSize.textLowercase,
        fontWeight: '700',
    },
    optionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    optionText: {
        fontSize: 16,
    },
    confirmButton: {
        marginVertical: 30,
        backgroundColor: '#dd0000',
        marginHorizontal: '3%',
        borderRadius: 5,
    },
    confirmButtonText: {
        fontSize: FontSize.textLowercase,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 10,
        fontWeight: '700',
    },
    linedUser: {
        borderBottomWidth: 1,
        borderBottomColor: "#f1f1f1",
        flex: 1,
    },
    // Custom Checkbox styles
    checkboxContainer: {
        padding: 5, // Tăng vùng touch

    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#cccccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxChecked: {
        backgroundColor: '#f1ca00',
        borderColor: '#f1ca00',
    },
});

export default ModalPresent;