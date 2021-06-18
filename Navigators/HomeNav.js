import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../Components/Header';
import HomeScreen from '../Screens/HomeScreen';
import ShowScreen from '../Screens/ShowScreen';

const Tab = createStackNavigator();

function HomeNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#b34180',
        },
        headerTintColor: '#fff',
      }}>
      <Tab.Screen
        options={{header: () => <Header title="Science Quizzes" />}}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen name="Show" component={ShowScreen} />
    </Tab.Navigator>
  );
}

export default HomeNav;
