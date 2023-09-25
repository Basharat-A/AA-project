import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';

export default ({usenavigation}) => {
  const [text, onChangeText] = React.useState('Type here');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E5F3FD'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Fscreen')}
        style={{
          flexDirection: 'row',
          backgroundColor: '#E5F3FD',
        }}>
        <View
          style={{
            backgroundColor: '#023020',
            height: 150,
            justifyContent: 'center',
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
          }}>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 20,
              textAlign: 'center',
            }}>
            Profile
          </Text>
          <TouchableOpacity
            onPress={() => {
              // const navigation = useNavigation();
              console.log('details');
            }}>
            {/* ...your button content */}
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20, marginLeft: 20}}>
          <Text style={{fontSize: 20, color: '#023020', fontWeight: 'bold'}}>
            Your Account
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#ffffff',
            height: 50,
            borderRadius: 10,
            marginLeft: 20,
            marginRight: 20,
            justifyContent: 'center',
            marginTop: 10,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../assests/images/fo.jpg')}
            style={{
              width: 30,
              height: 30,
              borderRadius: 5,
              marginTop: 10,
            }}
          />

          <View
            style={{
              marginRight: 100,
              justifyContent: 'center',
            }}>
            <Text style={{marginLeft: 10, color: '#023020'}}>
              Compamny information
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#ffffff',
            height: 50,
            borderRadius: 10,
            marginLeft: 20,
            marginRight: 20,
            justifyContent: 'center',
            marginTop: 10,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../assests/images/pre.jpg')}
            style={{
              width: 30,
              height: 30,
              borderRadius: 5,
              marginTop: 10,
            }}
          />
          <View
            style={{
              marginRight: 175,
              justifyContent: 'center',
            }}>
            <Text style={{marginLeft: 10, color: '#023020'}}>Preference</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#ffffff',
            height: 50,
            borderRadius: 10,
            marginLeft: 20,
            marginRight: 20,
            justifyContent: 'center',
            marginTop: 10,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../assests/images/fo.jpg')}
            style={{
              width: 30,
              height: 30,
              borderRadius: 5,
              marginTop: 10,
            }}
          />

          <View
            style={{
              marginRight: 100,
              justifyContent: 'center',
            }}>
            <Text style={{marginLeft: 10, color: '#023020'}}>
              Compamny information
            </Text>
          </View>
        </View>
        <View style={{marginTop: 20, marginLeft: 20}}>
          <Text style={{fontSize: 20, color: '#023020', fontWeight: 'bold'}}>
            Support
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#ffffff',
            height: 50,
            borderRadius: 10,
            marginLeft: 20,
            marginRight: 20,
            justifyContent: 'center',
            marginTop: 10,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../assests/images/help.jpg')}
            style={{
              width: 30,
              height: 30,
              borderRadius: 5,
              marginTop: 10,
            }}
          />
          <View
            style={{
              marginRight: 210,
              justifyContent: 'center',
            }}>
            <Text style={{marginLeft: 10, color: '#023020'}}>Help</Text>
          </View>
        </View>
        <View style={{marginTop: 20, marginLeft: 20}}>
          <Text style={{fontSize: 20, color: '#023020', fontWeight: 'bold'}}>
            Language
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#ffffff',
            height: 50,
            borderRadius: 10,
            marginLeft: 20,
            marginRight: 20,
            justifyContent: 'center',
            marginTop: 10,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../assests/images/lang.png')}
            style={{
              width: 30,
              height: 30,
              borderRadius: 5,
              marginTop: 10,
            }}
          />
          <View
            style={{
              marginRight: 175,
              justifyContent: 'center',
            }}>
            <Text style={{marginLeft: 10, color: '#023020'}}>Language</Text>
          </View>
        </View>
        <View style={{marginTop: 20, marginLeft: 20}}>
          <Text style={{fontSize: 20, color: '#023020', fontWeight: 'bold'}}>
            Log out
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
