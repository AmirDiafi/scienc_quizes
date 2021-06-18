import React from 'react'
import {View} from 'react-native'
import Card from '../Components/Card'
import {AdMobBanner} from 'react-native-admob'

class ShowScreen extends React.Component {
  render() {
    const {route, navigation} = this.props
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            borderWidth: 5,
            borderColor: '#822659',
            overflow: 'hidden',
          }}>
          <AdMobBanner
            adSize="fullBanner"
            adUnitID="ca-app-pub-3996937784782964/9276534653"
            testDevices={[AdMobBanner.simulatorId]}
            onAdFailedToLoad={(error) => console.error(error)}
          />
        </View>
        <Card navigation={navigation} data={route?.params} />
      </View>
    )
  }
}

export default ShowScreen
