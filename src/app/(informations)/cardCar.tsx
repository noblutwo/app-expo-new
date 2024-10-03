import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {Entypo, Feather} from '@expo/vector-icons';
import Checkbox from "expo-checkbox";
import {FontSize} from "@/constants/Colors";

function CardCar() {
    const [text, onChangeText] = useState('Giấy phép lái xe');
    const [text1, onChangeText1] = useState('');
    const [text2, onChangeText2] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={{justifyContent: 'space-between', flex: 1, backgroundColor: 'white'}}>
            <View style={styles.container}>
                <View style={{marginVertical: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text>Loại thông tin</Text>
                        <Entypo name="dot-single" size={24} color="red" style={{bottom: 6}}/>
                    </View>
                    <View style={[styles.inputContainer, isFocused && styles.focusedInput]}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            placeholderTextColor="#999"  // Optional: Change placeholder color
                        />
                        <View style={{backgroundColor: '#a1a1a1', borderRadius: 50, marginHorizontal: 10, padding: 1}}>
                            <Feather name="x" size={12} color="white"/>
                        </View>
                        <View style={{backgroundColor: '#e3e3e3', borderRadius: 50}}>
                            <Entypo name="chevron-small-down" size={20} color="black"/>
                        </View>
                    </View>
                </View>

                <View style={{marginVertical: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text>Số giấy phép</Text>
                        <Entypo name="dot-single" size={24} color="red" style={{bottom: 6}}/>
                    </View>

                    <View style={[styles.inputContainer, isFocused && styles.focusedInput]}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText1}
                            value={text1}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            placeholder="Nhập thông tin"
                            placeholderTextColor="#999"  // Optional: Change placeholder color
                        />

                    </View>
                </View>
                <View style={{marginVertical: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text>Hạng</Text>
                        <Entypo name="dot-single" size={24} color="red" style={{bottom: 6}}/>
                    </View>

                    <View style={[styles.inputContainer, isFocused && styles.focusedInput]}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText2}
                            value={text2}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            placeholder="Chọn thông tin"
                            placeholderTextColor="#999"  // Optional: Change placeholder color
                        />

                        <View style={{backgroundColor: '#e3e3e3', borderRadius: 50}}>
                            <Entypo name="chevron-small-down" size={20} color="black"/>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor: '#ececec', paddingTop: 20}}>
                <View style={[{flexDirection: 'row', alignItems: 'center',paddingHorizontal:"3%"}]}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? "#F5C647" : undefined}
                    />
                    <Text style={{paddingHorizontal: 10}}>Tôi xác nhận các thông tin ở trên là đúng</Text>
                </View>
                <TouchableOpacity

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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: "3%",

    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ececec',  // Set border color to white
        borderRadius: 5,
        height: 50,
        paddingHorizontal: 5,
    },
    focusedInput: {
        // No additional styles needed for focused input
    },
    input: {
        flex: 1,
        height: '100%',
        padding: 15,
        color: 'black',  // Ensure text color is visible
        backgroundColor: 'transparent',  // Ensure background is transparent
    },
    icon: {
        marginHorizontal: 10,
    },
    checkbox: {
        color: "#C5C5C5",
        borderColor: "#C5C5C5"
    },
});

export default CardCar;