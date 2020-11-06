import React from 'react';
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';

import StatusBarColor from '../../components/StatusBar';

const Header = () => (
  <Appbar.Header
    statusBarHeight={1}
    theme={{ colors: { primary: '#5AA861', underlineColor:'transparent'}}}
    dark
    >
    <Appbar.Content title="Análises" /> 
    <Appbar.Action icon="plus" style={{}} />
  </Appbar.Header>
)

const Home = () => {
    return (
       <View>
         <Header/>
         <StatusBarColor/>
       </View>
    );
  }

export default Home;