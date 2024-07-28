import { Stack } from 'expo-router'
import React from 'react'
import HeaderRight from './components/header_right'

export default function Layout() {
    return (
        <Stack screenOptions={{
            headerShown: false,
            headerShadowVisible: false,
        }}>
            <Stack.Screen
                name="(pages)/web"
                options={{
                    title: '网页传输',
                    headerShown: true,
                    headerShadowVisible: false,
                    headerRight: () => <HeaderRight/>
                }} />
            <Stack.Screen
                name="(pages)/idx"
                options={{
                    title: 'Idx',
                    headerShown: true,
                    headerShadowVisible: false,
                }} />
            <Stack.Screen
                name="(pages)/home"
                options={{
                    title: 'Home',
                    headerShown: true,
                    headerShadowVisible: false,
                }} />
        </Stack>
    )
}