import React from 'react'
import {View, ImageBackground, TouchableNativeFeedback} from 'react-native'
import {Subheading, Title} from 'react-native-paper'
import Styles from './Stylesheets/CardViewStyles'

class CardView extends React.Component {
  render() {
    const {data, navigation} = this.props
    return (
      <ImageBackground
        borderRadius={15}
        blurRadius={1}
        style={Styles.container}
        source={{uri: data.image_source}}>
        <TouchableNativeFeedback
          onPress={() => navigation.navigate('Show', data)}>
          <View style={Styles.content}>
            <Title style={Styles.title}> {data.title} </Title>
            <Subheading style={Styles.subheading}> {data.desc} </Subheading>
          </View>
        </TouchableNativeFeedback>
      </ImageBackground>
    )
  }
}

export default CardView
