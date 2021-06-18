/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'
import React from 'react'
import SplashNav from './Navigators/SplashNav'
import MainNav from './Navigators/MainNav'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
// import AsyncStorage from '@react-native-async-storage/async-storage'
import {StatusBar} from 'react-native'

const Stack = createStackNavigator()

class App extends React.Component {
  // _isMounted = false
  // state = {
  //   isFirstTime: false,
  // }

  // componentDidMount() {
  //   this._isMounted = true
  //   if (this._isMounted) {
  //     AsyncStorage.getItem('isFirstTime')
  //       .then((result) => this.setState({isFirstTime: Boolean(result)}))
  //       .catch((err) => console.log(err))
  //   }
  // }

  // componentWillUnmount() {
  //   this._isMounted = false
  // }

  render() {
    return (
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator headerMode={false}>
          <Stack.Screen name="Splash" component={SplashNav} />
          <Stack.Screen name="Home" component={MainNav} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App
