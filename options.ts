import React from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default () => {
  const [text, onChangeText] = React.useState('Type here');

  return (
    <View>
      <Text
        style={{
          color: '#000000',
          fontSize: 20,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        Hotels
      </Text>
    </View>
  );
};
