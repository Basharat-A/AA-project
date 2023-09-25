import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import options from '../screens/options';
import details from '../screens/Fscreen';

const MainStack = createStackNavigator();
const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="options" component={options} />
    </MainStack.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);
//npm install @react-navigation/stack
