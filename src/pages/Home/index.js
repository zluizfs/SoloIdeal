import React from 'react';
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';

import StatusBarColor from '../../components/StatusBar';

const Header = ({ navigation }) => (
  <Appbar.Header
    statusBarHeight={1}
    theme={{ colors: { primary: '#5AA861', underlineColor:'transparent'}}}
    dark
    >
    <Appbar.Content title="Análises" /> 
    <Appbar.Action icon="plus" onPress={() => navigation.navigate('SoilAnalysis')}/>
  </Appbar.Header>
)

const Home = ({ navigation }) => {
    return (
       <View>
         <StatusBarColor/>
         <Appbar.Header
            statusBarHeight={1}
            theme={{ colors: { primary: '#5AA861', underlineColor:'transparent'}}}
            dark
            >
            <Appbar.Content title="Análises" /> 
            <Appbar.Action icon="plus" onPress={() => navigation.navigate('SoilAnalysis')}/>
          </Appbar.Header>
       </View>
    );
  }

export default Home;