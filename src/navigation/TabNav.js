import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ToDo from '../screen/Todo'
import Star from '../screen/Star'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faStar } from '@fortawesome/free-solid-svg-icons'

const Tab = createBottomTabNavigator()

const TabNav = () => {

  
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false,tabBarStyle:{height:80},headerShown: false}}>
        <Tab.Screen name='Todo' component={ToDo} options={{
            tabBarIcon: ({color}) => (
              <FontAwesomeIcon icon={faHome}
                color={color}
                size={35}
              />
            ),
          }}/>
        <Tab.Screen name='Star' component={Star} options={{
            tabBarIcon: ({color}) => (
              <FontAwesomeIcon icon={faStar}
                color={color}
                size={35}
              />
            ),
          }}/>
    </Tab.Navigator>
  )
}

export default TabNav

const styles = StyleSheet.create({})