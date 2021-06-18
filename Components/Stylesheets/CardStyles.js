import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  imageContainer: {
    marginBottom: 15,
  },
  image: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginVertical: 5,
    fontSize: 20,
    fontFamily: 'Dosis-Medium',
    color: '#252525',
    backgroundColor: 'rgba(255,255,255,.7)',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 30,
    textAlign: 'center',
  },
  score: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 10,
    fontFamily: 'Dosis-Medium',
    color: '#fff',
    fontSize: 20,
  },
  subheading: {
    textAlign: 'center',
    paddingHorizontal: 30,
    marginBottom: 15,
    fontSize: 19,
    fontFamily: 'Dosis-Medium',
  },
  button: {
    padding: 15,
    borderRadius: 50,
    marginTop: 5,
    width: '100%',
  },
  buttonText: {
    fontSize: 17,
    color: '#FFF',
    borderRadius: 50,
    fontFamily: 'Dosis-Medium',
  },
  buttonDoneContainer: {
    padding: 10,
    borderRadius: 30,
    margin: 5,
    width: 120,
  },
  buttonDone: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonDoneText: {
    fontSize: 17,
    fontFamily: 'Dosis-Medium',
    color: '#eaeaea',
  },
})

export default Styles
