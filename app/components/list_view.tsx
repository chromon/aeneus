import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react'
import {
    Dimensions, FlatList, GestureResponderEvent,
    StyleSheet, Text, TouchableOpacity, View
} from 'react-native'

export default function ListView() {

    const router = useRouter();

    const handlePress = (path: string) => {
        router.push(`/${path}`);
    };

    return (
        <View style={styles.list}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} onPress={() => handlePress(item.path)} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

type ItemProps = {
    title: string,
    onPress: (event: GestureResponderEvent) => void
};

const Item: React.FC<ItemProps> = ({ title, onPress }: ItemProps) => (
    <TouchableOpacity onPress={onPress} style={styles.listItem} activeOpacity={0.8}>
        <Text style={styles.listItemText}>{title}</Text>
        <Ionicons color={'white'} name='chevron-forward-outline' size={16} />
    </TouchableOpacity>
);

const DATA = [
    {
        id: '0',
        title: '网页传文件',
        path: 'web',
    },
    {
        id: '1',
        title: '已发送内容',
        path: 'home',
    },
    {
        id: '2',
        title: '已接收内容',
        path: 'idx',
    },
    {
        id: '3',
        title: '设置',
        path: 'home',
    },
    {
        id: '4',
        title: '分享',
        path: 'home',
    },
];

const styles = StyleSheet.create({
    list: {
        height: Dimensions.get('window').height * 3 / 5,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#5dd39e',
        borderRadius: 10,
        padding: 20,
        marginVertical: 8,
    },
    listItemText: {
        fontSize: 16,
        color: 'white',
    },
});