import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'

export default function Web() {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/header.png')}
                    style={styles.headerImage}
                    resizeMode="contain"
                />
            </View>
            <View>
                <View style={styles.steps}>
                    <Text style={styles.stepTitleText}>
                        第一步：
                    </Text>
                    <Text style={styles.stepContentText}>
                        将手机和电脑接入同一局域网或热点
                    </Text>
                </View>
                <View style={styles.steps}>
                    <Text style={styles.stepTitleText}>
                        第二步：
                    </Text>
                    <Text style={styles.stepContentText}>
                        在电脑浏览器上输入以下地址
                    </Text>
                    <View style={styles.linkView}>
                        <Ionicons name='globe-outline' style={styles.linkIcon} />
                        <Text style={styles.linkText}>
                            http://ipAddress:PORT
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    imageContainer: {
        alignItems: 'center',
    },
    headerImage: {
        height: Dimensions.get('window').height / 5,
        width: Dimensions.get('window').width * 9 / 10,
    },
    steps: {
        marginLeft: 10,
        marginTop: 20,
    },
    stepTitleText: {
        color: 'grey'
    },
    stepContentText: {
        marginTop: 10,
        fontSize: 16,
    },
    linkView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#5dd39e',
        borderRadius: 10,
        padding: 10,
        marginVertical: 15,
    },
    linkIcon: {
        color: 'white',
        marginRight: 10,
    },
    linkText: {
        color: 'white',
        fontWeight: 'bold',
    }
});