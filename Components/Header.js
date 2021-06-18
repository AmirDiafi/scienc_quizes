import React from 'react'
import {Text, View} from 'react-native'
import Styles from './Stylesheets/HeaderStyles'
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient'
import {AdMobBanner} from 'react-native-admob'

class Header extends React.Component {
  render() {
    return (
      <View>
        <LinearGradient colors={['#822659', '#f1339b']} style={Styles.header}>
          <Animatable.Image
            animation="bounceIn"
            style={Styles.logo}
            source={require('../assets/images/logo.png')}
          />

          <Text style={Styles.title}> {this.props.title} </Text>
        </LinearGradient>
        <View
          style={{
            width: '100%',
            borderWidth: 5,
            borderColor: '#822659',
            overflow: 'hidden',
          }}>
          <AdMobBanner
            adSize="fullBanner"
            adUnitID="ca-app-pub-8967420236427435/3715487723"
            testDevices={[AdMobBanner.simulatorId]}
            onAdFailedToLoad={(error) => console.error(error)}
          />
        </View>
      </View>
    )
  }
}

export default Header
