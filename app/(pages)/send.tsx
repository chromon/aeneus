import { FlatList, GestureResponderEvent, StyleSheet, Text, View } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type IconType = 'file' | 'image' | 'clipboard-text'

interface DataItem {
    id: string;
    title: string;
    type: IconType;
    size: string;
  }

const DATA: DataItem[] = [
    {
        id: '0',
        title: '文本',
        type: 'clipboard-text',
        size: '23MB',
    },
    {
        id: '1',
        title: '图片',
        type: 'image',
        size: '23MB',
    },
    {
        id: '2',
        title: '文件',
        type: 'file',
        size: '23MB',
    },
];

type ItemProps = {
    id: string,
    title: string,
    type: IconType,
    size: string,
    onPress: (event: GestureResponderEvent) => void
};

const Item: React.FC<ItemProps> = ({ title, size, type, onPress }: ItemProps) => (
    <View style={styles.listItem}>
        <MaterialCommunityIcons name={type} size={40} color="#00bbf9" />
        <View style={styles.listBody}>
            <Text style={styles.listTitle}>{title}</Text>
            <Text style={styles.listSubTitle}>{size}</Text>
        </View>
        <MaterialCommunityIcons name="check-circle-outline" size={24} color="#00bbf9" />
    </View>
);

const Send = () => {

    const handlePress = (id: string) => {
        console.log(id);
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={
                    ({ item }) => <Item 
                        id={item.id} title={item.title} size={item.size} 
                        type={item.type} onPress={() => handlePress(item.id)} 
                    />
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 20,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#5dd39e',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    listBody: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        marginHorizontal: 20,
    },
    listTitle: {
        fontSize: 16,
        marginBottom: 5,
    },
    listSubTitle: {
        fontSize: 12,
    }
});

export default Send;