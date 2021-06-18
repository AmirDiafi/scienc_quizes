import React from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Divider, Subheading, Title} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './Stylesheets/CardStyles';
import {Root, Popup} from 'popup-ui';

class Card extends React.Component {
  state = {
    current_quiz_counter: 0,
    isDone: false,
    isCorrect: undefined,
    score: 0,
    isVisible: false,
  };

  handleSubmit = (item) => {
    const {current_quiz_counter, score} = this.state;
    const {data} = this.props;
    const current_quiz = data.quizzes[current_quiz_counter];
    const theAnswer = current_quiz?.answer;
    const theAnswerTow = current_quiz?.answerTow
      ? ', ' + current_quiz?.answerTow + ' .'
      : '';
    if (item === theAnswer) {
      this.setState({
        score: score + 1,
        isVisible: true,
        isCorrect: true,
      });
      Popup.show({
        type: 'Success',
        title: 'Correct',
        button: true,
        textBody: 'Congrats! Your choice is correct',
        buttonText: 'Continue',
        callback: () => {
          Popup.hide();
          setTimeout(() => {
            if (current_quiz_counter < this.props.data.quizzes?.length - 1) {
              this.setState({current_quiz_counter: current_quiz_counter + 1});
            } else {
              this.setState({isDone: true});
            }
          }, 0);
        },
      });
    } else {
      this.setState({
        score: score - 1,
        isVisible: true,
        isCorrect: false,
      });

      Popup.show({
        type: 'Danger',
        title: 'Wrong',
        button: true,
        textBody: `the correct one is ${theAnswer} ${theAnswerTow}`,
        buttonText: 'Continue',
        callback: () => {
          Popup.hide();
          setTimeout(() => {
            if (current_quiz_counter < this.props.data.quizzes?.length - 1) {
              this.setState({current_quiz_counter: current_quiz_counter + 1});
            } else {
              this.setState({isDone: true});
            }
          }, 0);
        },
      });
    }
  };

  OnRefresh = () => {
    this.setState({
      current_quiz_counter: 0,
      isDone: false,
      isCorrect: undefined,
      score: 0,
    });
  };

  render() {
    const {data, navigation} = this.props;
    const {isDone, score, current_quiz_counter} = this.state;
    let current_quiz =
      data.quizzes && data.quizzes[this.state.current_quiz_counter];

    let evaluation;
    let length = data.quizzes?.length;
    if (score >= length / 1.5) {
      evaluation = 'Excelent';
    } else if (score >= length / 2 && score < length / 1.5) {
      evaluation = 'Great Job';
    } else if (score < length / 2 && score >= length / 3) {
      evaluation = 'Weak';
    } else if (score < length / 3) {
      evaluation = 'So Weak (Bad)';
    }

    return (
      <Root>
        <ScrollView style={Styles.container}>
          <View style={Styles.imageContainer}>
            <ImageBackground
              blurRadius={5}
              borderRadius={15}
              style={Styles.image}
              source={{uri: data.image_source}}>
              <Text style={Styles.title}>{data.title}</Text>
              <View>
                <Text style={Styles.title}>
                  Quiz Number: {current_quiz_counter + 1} / {length}
                </Text>
                <Text
                  style={{
                    ...Styles.score,
                    textAlign: 'center',
                    backgroundColor: score <= 0 ? '#ff2e63cc' : '#34e63bcc',
                  }}>
                  Score: {score}
                </Text>
              </View>
            </ImageBackground>
          </View>
          {isDone ? (
            <View>
              <Title style={Styles.title}>Done</Title>
              <Subheading style={Styles.subheading}>
                Your Score is {score} / {length}
              </Subheading>
              <Subheading style={Styles.subheading}>
                Evaluation: {evaluation}
              </Subheading>
              <Divider />
              <View style={{alignItems: 'center', marginTop: 25}}>
                <LinearGradient
                  style={Styles.buttonDoneContainer}
                  colors={['#822659', '#b34180']}>
                  <TouchableNativeFeedback onPress={this.OnRefresh}>
                    <View style={Styles.buttonDone}>
                      <Text style={Styles.buttonDoneText}>
                        {score <= 10 ? 'Try Again' : 'Retry'}
                      </Text>
                      <MaterialCommunityIcons
                        color="#eaeaea"
                        name="refresh"
                        size={23}
                      />
                    </View>
                  </TouchableNativeFeedback>
                </LinearGradient>
                <LinearGradient
                  style={Styles.buttonDoneContainer}
                  colors={['#822659', '#b34180']}>
                  <TouchableNativeFeedback
                    onPress={() => navigation.navigate('Home')}>
                    <View style={Styles.buttonDone}>
                      <Text style={Styles.buttonDoneText}>Home</Text>
                      <MaterialCommunityIcons
                        color="#eaeaea"
                        name="home-outline"
                        size={23}
                      />
                    </View>
                  </TouchableNativeFeedback>
                </LinearGradient>
              </View>
            </View>
          ) : (
            <>
              <Subheading style={Styles.subheading}>
                {current_quiz?.quiz}
              </Subheading>
              {current_quiz?.choices?.map((item, index) => (
                <TouchableOpacity
                  style={{width: '100%'}}
                  key={index}
                  onPress={() => this.handleSubmit(item)}>
                  <LinearGradient
                    style={Styles.button}
                    colors={['#822659', '#b34180']}>
                    <View>
                      <Text style={Styles.buttonText}> {item} </Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              ))}
            </>
          )}
        </ScrollView>
      </Root>
    );
  }
}

export default Card;
