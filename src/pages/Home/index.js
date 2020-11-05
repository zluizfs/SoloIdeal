import React from 'react';
import { View, Text} from 'react-native';

import StatusBarColor from '../../components/StatusBar';

const Home = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <StatusBarColor/>
        <Text>Home - Será exibido as análises de solo aqui.</Text>
      </View>
    );
  }

export default Home;