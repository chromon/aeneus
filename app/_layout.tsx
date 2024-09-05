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
                    headerRight: () => <HeaderRight />
                }} />
            <Stack.Screen
                name="(pages)/send"
                options={{
                    title: 'Send',
                    headerShown: true,
                    headerShadowVisible: false,
                }} />
            <Stack.Screen
                name="(pages)/receive"
                options={{
                    title: 'Receive',
                    headerShown: true,
                    headerShadowVisible: false,
                }} />
            <Stack.Screen
                name="(pages)/setting"
                options={{
                    title: 'Setting',
                    headerShown: true,
                    headerShadowVisible: false,
                }} />
            <Stack.Screen
                name="(pages)/share"
                options={{
                    title: 'Share',
                    headerShown: true,
                    headerShadowVisible: false,
                }} />

            <Stack.Screen name="+not-found" options={{ title: 'Screen Not Found' }} />
        </Stack>
    )
}