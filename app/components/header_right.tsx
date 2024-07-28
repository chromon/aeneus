import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity } from 'react-native'

export default function HeaderRight() {

    const handlePress = () => {
        console.log('Icon Button Pressed');
    };

    return (
        <TouchableOpacity onPress={handlePress} activeOpacity={0.5}>
            <Ionicons name='share-outline' size={24}/>
        </TouchableOpacity>
    )
}
