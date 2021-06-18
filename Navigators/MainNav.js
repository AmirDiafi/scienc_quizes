import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import HomeNav from './HomeNav'
import AboutScreen from '../Screens/AboutScreen'
import SoundScreen from '../Screens/SoundScreen'

const Tab = createMaterialBottomTabNavigator()

class MainNav extends React.Component {
  _isMounted = false
  componentDidMount() {
    this._isMounted = true
    if (this._isMounted) {
      AsyncStorage.setItem('isFirstTime', 'true')
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }
  render() {
    return (
      <>
        <Tab.Navigator shifting={true}>
          <Tab.Screen
            name="Main"
            component={HomeNav}
            options={{
              tabBarColor: '#822659',
              tabBarLabel: 'Main',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons
                  size={24}
                  name="home-outline"
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Sound"
            component={SoundScreen}
            options={{
              tabBarColor: '#e36bae',
              tabBarLabel: 'About',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons size={24} name="music" color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="About"
            component={AboutScreen}
            options={{
              tabBarColor: '#b34180',
              tabBarLabel: 'About',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons
                  size={24}
                  name="information-outline"
                  color={color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </>
    )
  }
}

export default MainNav
