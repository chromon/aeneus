import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Setting = () => {
    return (
        <View>
            <Link href="/index" style={styles.fcolor}>index</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    fcolor: {
        fontSize: 20,
        color: 'red',
    },
});

export default Setting;