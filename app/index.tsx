import React from 'react'
import {
    Dimensions, StyleSheet, Text, TouchableOpacity, View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import ListView from './components/list_view';

export default function Index() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>文件传输</Text>
            </View>
            <View style={styles.transferView}>
                <TouchableOpacity style={[styles.transferBtn, styles.transferBtnColor]} activeOpacity={0.8}>
                    <Text style={styles.transferText}>我要发送</Text>
                    <Text style={styles.transferTextWhite}>发送文件到手机</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.transferBtn} activeOpacity={0.8}>
                    <Text style={styles.transferText}>我要接收</Text>
                    <Text style={styles.transferTextWhite}>从手机接收文件</Text>
                </TouchableOpacity>
            </View>
            <ListView/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: Dimensions.get('window').height / 5,
    },
    titleText: {
        fontSize: 32,
    },
    transferView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: Dimensions.get('window').height / 5,
        marginBottom: 40,
    },
    transferBtn: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: Dimensions.get('window').width / 2 - 40,
        height: Dimensions.get('window').height / 5 - 40,
        backgroundColor: '#ff99c8',
        borderRadius: 10,
        padding: 20,
    },
    transferText: {
        fontSize: 22,
        marginVertical: 10,
        color: 'white',
    },
    transferTextWhite: {
        color: 'white',
    },
    transferBtnColor: {
        backgroundColor: '#00bbf9',
    },
});
