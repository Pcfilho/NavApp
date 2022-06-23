import { View, Text, Button } from 'react-native'
import React from 'react'
import { BaseNavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Routes } from '../routes';

type StackParamList = {
    screenA : undefined;
    screenB : undefined;
}

export default function ScreenA() {
    function openScreen() {
        navigation.navigate('screenB');
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center' }}>
            
            <Button
                title='Ir para a tela B'
                onPress={openScreen}
            />

        </View>
    )
}