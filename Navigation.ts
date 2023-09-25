import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import options from '../screens/options';
import Home from '../screens/Home';

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="options"
      component={options}
      options={{headerShown: false}}
    />
    <MainStack.Screen name="details" component={Home} />
    <MainStack.Screen name="Hotels" component={options} />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);
