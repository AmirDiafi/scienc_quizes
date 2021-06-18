import React from 'react'
import {
  Image,
  StatusBar,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native'
import {Subheading, Title} from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {AdMobBanner} from 'react-native-admob'

class SpashNav extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#822659',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <StatusBar hidden />
        <Image
          style={{
            width: 150,
            height: 150,
            borderRadius: 150,
            marginBottom: 30,
          }}
          source={require('../assets/images/logo.png')}
        />
        <Subheading
          style={{
            fontSize: 23,
            color: '#eaeaea',
            fontFamily: 'Dosis-Medium',
          }}>
          Weloceme To
        </Subheading>
        <Title
          style={{
            fontSize: 26,
            color: '#FFF',
            fontFamily: 'Dosis-Medium',
            marginBottom: 40,
          }}>
          Science quizzes
        </Title>
        <TouchableNativeFeedback
          onPress={() => this.props.navigation.navigate('Home')}>
          <View
            style={{
              backgroundColor: '#f1339b',
              padding: 10,
              borderRadius: 30,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: 120,
            }}>
            <Text style={{color: '#FFF', fontSize: 17, marginRight: 10}}>
              Start
            </Text>
            <MaterialCommunityIcons color="#FFF" name="send" size={23} />
          </View>
        </TouchableNativeFeedback>

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            borderWidth: 5,
            borderColor: '#f1339b',
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

export default SpashNav
