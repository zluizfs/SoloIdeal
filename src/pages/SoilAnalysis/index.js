import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Card, Title, TextInput, Switch } from 'react-native-paper';

import StatusBarColor from '../../components/StatusBar';
import Button from '../../components/Button';

import styles from './styles';

const colors  = {
    colors: { primary: '#5AA861', underlineColor:'transparent' }
}

const SoilAnalysis = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
    <SafeAreaView style={styles.container}>
      <StatusBarColor/>
      <ScrollView style={styles.scrollView}>

        <Card style={styles.card}>
          <Title style={styles.title}>Dados da análise</Title>
          <TextInput
            label="Nome do talhão"
            mode="flat"
            style={styles.input}
            theme={colors}

          />
        </Card>

        <Card style={styles.card}>

          <Title style={styles.title}>pH</Title>
          <TextInput
            label="PH"
            mode="flat"
            style={styles.input}
            theme={colors}
          />

          <Title style={styles.title}>Macronutrientes</Title>
          <TextInput
            label="Nitrogenio"
            mode="flat"
            style={styles.input}
            theme={colors}
          />
          <TextInput
            label="Fósforo"
            mode="flat"
            style={styles.input}
            theme={colors}
          />
          <TextInput
            label="Potássio"
            mode="flat"
            style={styles.input}
            theme={colors}
          />
          <TextInput
            label="Cálcio"
            mode="flat"
            style={styles.input}
            theme={colors}
          />
           <TextInput
            label="Magnésio"
            mode="flat"
            style={styles.input}
            theme={colors}
          />
           <TextInput
            label="Enxofre"
            mode="flat"
            style={styles.input}
            theme={colors}
          />

        </Card>

        <Card style={styles.card}>

          <Title style={styles.title}>Micronutrientes</Title>
          <TextInput
            label="Boro"
            mode="flat"
            style={styles.input}
            theme={colors}
          />
          <TextInput
            label="Cobre"
            mode="flat"
            style={styles.input}
            theme={colors}
          />
          <TextInput
            label="Cloro"
            mode="flat"
            style={styles.input}
            theme={colors}
          />
          <TextInput
            label="Ferro"
            mode="flat"
            style={styles.input}
            theme={colors}
          />
           <TextInput
            label="Molibdênio"
            mode="flat"
            style={styles.input}
            theme={colors}
          />
           <TextInput
            label="Zinco"
            mode="flat"
            style={styles.input}
            theme={colors}
          />

        </Card>

        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          <View style={styles.buttonBox}>
            <Button title="Fazer análise" color= "#FFF"/>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}


export default SoilAnalysis;

