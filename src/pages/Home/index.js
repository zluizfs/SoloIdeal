import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';

import StatusBarColor from '../../components/StatusBar';

function Home({ navigation }) {
    return (
      <KeyboardAvoidingView>
        <StatusBarColor/>
      </KeyboardAvoidingView>
    );
  }

export default Home;