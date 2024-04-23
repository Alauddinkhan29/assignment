import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import List from '../Screens/List';
import ListDetails from '../Screens/ListDetails';

const rootStack = createNativeStackNavigator();

const Routes = () => {
    return (
        <rootStack.Navigator initialRouteName='list' screenOptions={{ headerShown: false }}>
            <rootStack.Screen name='list' component={List} ></rootStack.Screen>
            <rootStack.Screen name='listDetail' component={ListDetails} ></rootStack.Screen>
        </rootStack.Navigator>
    )
}

export default Routes

const styles = StyleSheet.create({})