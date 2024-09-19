import {ScrollView, StyleSheet, Text, View} from "react-native";
import {usePathname} from "expo-router";
import {lightTheme} from "@/styles/theme";

function ResidenceScreen() {
    const currentPath = usePathname();
    console.log("Current path:", currentPath);
    return (
        <ScrollView style={styles.container}>
            <View>
                <View>
                    <Text>Thông tin hành chính</Text>

                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});

export default ResidenceScreen