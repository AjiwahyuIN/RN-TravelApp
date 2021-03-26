import 'react-native-gesture-handler';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/containers/pages/Home'
import Details from './src/containers/pages/Details'
import Liked from './src/containers/pages/Liked'
import Profile from './src/containers/pages/Profile'

import colors from './src/colors'
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from './src/colors';

Entypo.loadFont()
MaterialCommunityIcons.loadFont()

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator 
    tabBarOptions={{
      style: styles.tabBar,
      activeTintColor: COLORS.orange,
      inactiveTintColor: COLORS.gray,
      showLabel:false
    }}
    >
      <Tab.Screen 
      name='Home'
      component={Home}
      options={{
        tabBarIcon: ({color}) => (
          <Entypo name='home' size={32} color={color}/>
        )
      }}
      />
      <Tab.Screen 
      name='Liked'
      component={Liked}
      options={{
        tabBarIcon: ({color}) => (
          <Entypo name='heart' size={32} color={color}/>
        )
      }}
      />
      <Tab.Screen 
      name='Profile'
      component={Profile}
      options={{
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name='account' size={32} color={color}/>
        )
      }}
      />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown:false}}/>
        <Stack.Screen 
        name="Details"
        component={Details}
        options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  tabBar:{
    backgroundColor:COLORS.white,
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  }
})
export default App

