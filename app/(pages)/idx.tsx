import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Idx() {
    return (
        <View>
            <Link href="/home" style={styles.fcolor}>Home</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    fcolor: {
        fontSize: 20,
        color: 'red',
    },
});