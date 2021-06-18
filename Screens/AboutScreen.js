import React from 'react'
import {Linking, ScrollView, Image, View, Text} from 'react-native'
import {Divider, Subheading, Title} from 'react-native-paper'

class AboutScreen extends React.Component {
  render() {
    return (
      <ScrollView
        style={{
          paddingHorizontal: 15,
        }}>
        <Title
          style={{
            marginVertical: 15,
            fontSize: 23,
            fontFamily: 'Dosis-Medium',
            textAlign: 'center',
          }}>
          About The App
        </Title>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
              marginBottom: 30,
            }}
            source={require('../assets/images/logo.png')}
          />
        </View>

        <Subheading
          style={{
            marginVertical: 15,
            fontSize: 19,
            textAlign: 'center',
            fontFamily: 'Dosis-Medium',
          }}>
          Take the challenge of our fun science quizzes for kids as well as a
          range of printable word searches and free puzzle worksheets. Enjoy
          quizzes on subjects such as chemistry, biology, physics, space, earth,
          animals, the human body and more. The quizzes offer great elementary
          science practice and the questions & answers can be used in
          conjunction with our other free online science resources. Questions
          range from easy to hard and are followed by a full list of answers so
          you can check how well you did. Learn interesting science facts and
          information and have some fun along the way. Get started by making use
          of all the great teaching ideas, fun trivia and free worksheets.
        </Subheading>
        <Divider />
        <Subheading
          style={{
            marginVertical: 15,
            fontSize: 19,
            textAlign: 'center',
            fontFamily: 'Dosis-Medium',
          }}>
          This Quizzes Made By ScienceKids
        </Subheading>
        <Subheading
          onPress={() => Linking.openURL('https://www.sciencekids.co.nz')}
          style={{
            marginVertical: 15,
            fontSize: 19,
            textAlign: 'center',
            fontFamily: 'Dosis-Medium',
            textDecorationColor: 'blue',
            textDecorationStyle: 'solid',
            color: 'blue',
            textDecorationLine: 'underline',
          }}>
          https://www.sciencekids.co.nz
        </Subheading>
        <Subheading
          style={{
            marginVertical: 15,
            fontSize: 19,
            textAlign: 'center',
            fontFamily: 'Dosis-Medium',
          }}>
          This App Made By <Text>Amir Diafi</Text>
        </Subheading>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              marginBottom: 30,
            }}
            source={{
              uri:
                'https://drive.google.com/uc?export=view&id=1eJb2Cl35Y-Ctx3x8UkDXtBV9owrvAjQx',
            }}
          />
        </View>
      </ScrollView>
    )
  }
}

export default AboutScreen
