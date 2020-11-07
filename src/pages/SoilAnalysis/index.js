import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Title, TextInput, Switch } from 'react-native-paper';

import StatusBarColor from '../../components/StatusBar';
import Button from '../../components/Button';

import styles from './styles';

const SignUp = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
    <SafeAreaView style={styles.container}>
      <StatusBarColor/>
      <ScrollView style={styles.scrollView}>
        <View style={styles.footer}>
          <Title>Macronutrientes</Title>
          <TextInput
            label="Nitrogenio"
            mode="flat"
            style={styles.input}
            theme={{ colors: { primary: '#5AA861', underlineColor:'transparent'}}}
          />
          <TextInput
            label="Fósforo"
            mode="flat"
            style={styles.input}
            theme={{ colors: { primary: '#5AA861', underlineColor:'transparent'}}}
            
          />
          <TextInput
            label="Potássio"
            mode="flat"
            style={styles.input}
            theme={{ colors: { primary: '#5AA861', underlineColor:'transparent'}}}
          />
          <TextInput
            label="Cálcio"
            mode="flat"
            style={styles.input}
            theme={{ colors: { primary: '#5AA861', underlineColor:'transparent'}}}
          />
           <TextInput
            label="Magnésio"
            mode="flat"
            style={styles.input}
            theme={{ colors: { primary: '#5AA861', underlineColor:'transparent'}}}
          />
           <TextInput
            label="Enxofre"
            mode="flat"
            style={styles.input}
            theme={{ colors: { primary: '#5AA861', underlineColor:'transparent'}}}
          />
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          <View style={styles.buttonBox}>
            <Button title="Fazer análise" color= "#FFF"/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


export default SignUp;

