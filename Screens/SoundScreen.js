import React from 'react'
import {
  SafeAreaView,
  TouchableNativeFeedback,
  View,
  Animated,
  Easing,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Sound from 'react-native-sound'
import Header from '../Components/Header'
import {Title} from 'react-native-paper'

let whoosh = new Sound('sound.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error)
    return
  }
})

class SoundScreen extends React.Component {
  constructor(props) {
    super(props)
    this.spinValue = new Animated.Value(0)
    this.state = {
      isPlay: false,
      currentTime: 0,
      tickInterval: null,
      duration: whoosh.getDuration(),
    }
    // Enable playback in silence mode
    Sound.setCategory('Playback', true)
    whoosh.setNumberOfLoops(100000)
  }

  spin() {
    if (this.state.isPlay) {
      this.spinValue.setValue(0)
      Animated.timing(this.spinValue, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => this.spin())
    } else {
      this.spinValue.setValue(0)
      Animated.timing(this.spinValue).stop()
      console.log('stopped')
    }
  }

  tick() {
    whoosh.getCurrentTime((seconds) => {
      if (this.tickInterval) {
        this.setState({
          currentTime: seconds,
        })
      }
    })
  }

  playSound = () => {
    const {isPlay} = this.state
    this.setState({isPlay: !isPlay})
    if (!isPlay) {
      this.tickInterval = setInterval(() => {
        this.tick()
      }, 250)
      setTimeout(() => this.spin(), 0)
      // Play the sound with an onEnd callback()
      whoosh.play((success) => {
        if (success) {
          clearInterval(this.tickInterval)
          this.tickInterval = null
          this.setState({isPlay: false, currentTime: 0})
          console.log('Finished Successfully')
        } else {
          console.log('playback failed due to audio decoding errors')
        }
      })
    } else {
      this.setState({isPlay: false})
      whoosh.pause()
      setTimeout(() => this.spin(), 0)
    }
  }

  handleVolume = (type) => {
    const currentVolume = whoosh.getVolume()
    if (type === 'low' && currentVolume > 0) {
      whoosh.setVolume(currentVolume - 0.2)
    } else if (type === 'high' && currentVolume < 1) {
      whoosh.setVolume(currentVolume + 0.2)
    }
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    })
    const {currentTime, duration, isPlay} = this.state
    return (
      <LinearGradient colors={['rgb(62, 18, 42)', '#e36bae']} style={{flex: 1}}>
        <Header title="Science for kids" />
        <SafeAreaView
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: 10,
            flex: 1,
          }}>
          <Animated.Image
            source={require('../assets/images/sound.jpg')}
            style={{
              width: 260,
              height: 260,
              borderRadius: 200,
              padding: 10,
              transform: [{rotate: spin}],
            }}
          />

          <Title
            style={{
              marginTop: 15,
              marginBottom: 50,
              color: '#eaeaea',
              fontFamily: 'Dosis-Medium',
            }}>
            Calm music - keep calm
          </Title>
          <View
            style={{
              width: '100%',
              padding: 10,
            }}>
            <View
              style={{
                width: '100%',
                backgroundColor: 'rgb(62, 18, 42)',
                borderRadius: 30,
              }}>
              <View
                style={{
                  height: 5,
                  borderRadius: 30,
                  backgroundColor: '#f1339b',
                  width: `${
                    currentTime === duration
                      ? 0
                      : (currentTime / duration) * 100
                  }%`,
                }}></View>
            </View>
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              width: '100%',
            }}>
            <View>
              <TouchableNativeFeedback onPress={() => this.handleVolume('low')}>
                <MaterialCommunityIcons
                  name="volume-medium"
                  size={35}
                  color="rgb(62, 18, 42)"
                />
              </TouchableNativeFeedback>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                padding: 10,
                backgroundColor: 'rgb(62, 18, 42)',
                borderRadius: 100,
                width: 70,
                height: 70,
              }}>
              <TouchableNativeFeedback onPress={this.playSound}>
                <MaterialCommunityIcons
                  name={!isPlay ? 'play' : 'pause'}
                  size={40}
                  color="#eaeaea"
                />
              </TouchableNativeFeedback>
            </View>
            <View>
              <TouchableNativeFeedback
                onPress={() => this.handleVolume('high')}>
                <MaterialCommunityIcons
                  name="volume-high"
                  size={35}
                  color="rgb(62, 18, 42)"
                />
              </TouchableNativeFeedback>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    )
  }
}

export default SoundScreen
