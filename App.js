import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Routes from "./Src/Navigation/Routes"
import { NavigationContainer, useNavigation } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})