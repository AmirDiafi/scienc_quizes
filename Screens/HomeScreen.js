import React from 'react'
import {StatusBar, View} from 'react-native'
import {FlatList} from 'react-native-gesture-handler'
import CardView from '../Components/CardView'
import data from '../assets/data.json'

class HomeScreen extends React.Component {
  state = {
    data: data.data,
  }

  render() {
    const {navigation} = this.props
    return (
      <View
        style={{
          paddingVertical: 10,
        }}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={this.state.data}
          renderItem={({item}) => (
            <CardView navigation={navigation} data={item} />
          )}
        />
      </View>
    )
  }
}

export default HomeScreen
