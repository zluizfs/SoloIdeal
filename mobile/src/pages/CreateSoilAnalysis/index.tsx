import React, { useState, useRef } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native';
import { Card, Title, TextInput, Switch } from 'react-native-paper';
import { Formik, FormikHelpers } from 'formik';
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import * as Yup from "yup";

import api from '../../services/api';
import { useAuth } from '../../contexts/auth';
import StatusBarColor from '../../components/StatusBar';
import Button from '../../components/Button';

import styles from './styles';

const colors  = {
    colors: { primary: '#5AA861', underlineColor:'transparent' }
}

interface FormValues {
  numero: string;
  data: string;
  ph: string;
  nitrogenio: string;
  fosforo: string;
  potassio: string;
  calcio: string;
  magnesio: string;
  enxofre: string;
  boro: string;
  cobre: string;
  cloro: string;
  ferro: string;
  molibdenio: string;
  zinco: string;
}

type RouteParamList = {
  plot_id: string;
  local_id: string;
};

const AnalysisValidation = Yup.object().shape({
  numero: Yup.number().required("Campo obrigatório!").min(1, "Mínimo de 1 caracter!"),
  data: Yup.string().required("Campo obrigatório!").min(1, "Mínimo de 1 caracter!"),
  ph: Yup.number(),
  nitrogenio: Yup.number(),
  fosforo: Yup.number(),
  potassio: Yup.number(),
  calcio: Yup.number(),
  magnesio: Yup.number(),
  enxofre: Yup.number(),
  boro: Yup.number(),
  cobre: Yup.number(),
  cloro: Yup.number(),
  ferro: Yup.number(),
  molibdenio: Yup.number(),
  zinco: Yup.number(),
});

const CreateSoilAnalysis: React.FC = () => {
    const { user } = useAuth();
    const navigation = useNavigation();
    const route = useRoute<RouteProp<Record<string, RouteParamList>, string>>();
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const ShowCurrentDate = () => {
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();

      return(year + '/' + month + '/' + date);
    }

    const [date, setDate] = useState(ShowCurrentDate);
    const numRef = useRef<typeof TextInput | any >(null);
    const phRef = useRef<typeof TextInput | any >(null);
    const nitrogenioRef = useRef<typeof TextInput | any >(null);
    const fosforoRef = useRef<typeof TextInput | any >(null);
    const potassioRef = useRef<typeof TextInput | any >(null);
    const calcioRef = useRef<typeof TextInput | any >(null);
    const magnesioRef = useRef<typeof TextInput | any >(null);
    const enxofreRef = useRef<typeof TextInput | any >(null);
    const boroRef = useRef<typeof TextInput | any >(null);
    const cobreRef = useRef<typeof TextInput | any >(null);
    const cloroRef = useRef<typeof TextInput | any >(null);
    const ferroRef = useRef<typeof TextInput | any >(null);
    const molibdenioRef = useRef<typeof TextInput | any >(null);
    const zincoRef = useRef<typeof TextInput | any >(null);
    const initialValues: FormValues = {
      numero: "0",
      data: ShowCurrentDate(),
      ph: "0",
      nitrogenio: "0",
      fosforo: "0",
      potassio: "0",
      calcio: "0",
      magnesio: "0",
      enxofre: "0",
      boro: "0",
      cobre: "0",
      cloro: "0",
      ferro: "0",
      molibdenio: "0",
      zinco: "0",
    };

    async function AnalysisCreate(
      formValues: FormValues,
      formikHelpers: FormikHelpers<FormValues>
      ) {
      try {
        await api.post(`/users/${user.id}/location/${route.params.local_id}/plots/${route.params.plot_id}/analysis/create`, formValues);
        formikHelpers.resetForm();
        navigation.navigate("AgriculturePlotsDetails");
        ToastAndroid.show("Análise cadastrada com sucesso.", ToastAndroid.SHORT);
      } catch (error) {
        ToastAndroid.show("Algo deu errado, tente novamente!", ToastAndroid.SHORT);
      }
    }

    return (
    <SafeAreaView style={styles.container}>
      <StatusBarColor/>
      <Formik
          initialValues={initialValues}
          validationSchema={AnalysisValidation}
          onSubmit={(values, formikHelpers) => AnalysisCreate(values, formikHelpers)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (

          <ScrollView style={styles.scrollView}>

            <Card style={styles.card}>
              <Title style={styles.title}>Dados da análise</Title>
              <TextInput
                label="Número da análise"
                mode="flat"
                style={styles.input}
                theme={colors}
                ref={numRef}
                value={values.numero}
                onChangeText={handleChange("numero")}
              />
              <TouchableOpacity>
                <Text>Data</Text>
                <Text>{date}</Text>
              </TouchableOpacity>
            </Card>

            <View style={styles.switch}>
              <Text style={styles.switchSub}>Incluir Micronutrientes?</Text>
              <Switch 
                value={isSwitchOn} 
                onValueChange={onToggleSwitch}
                color='#5AA861'
              />
            </View>

            <Card style={styles.card}>

              <Title style={styles.title}>pH</Title>
              <TextInput
                label="PH"
                mode="flat"
                style={styles.input}
                theme={colors}
                ref={phRef}
                value={values.ph}
              />

              <Title style={styles.title}>Macronutrientes</Title>
              <TextInput
                label="Nitrogenio"
                mode="flat"
                style={styles.input}
                theme={colors}
                ref={nitrogenioRef}
                value={values.nitrogenio}
              />
              <TextInput
                label="Fósforo"
                mode="flat"
                style={styles.input}
                theme={colors}
                ref={fosforoRef}
                value={values.fosforo}
              />
              <TextInput
                label="Potássio"
                mode="flat"
                style={styles.input}
                theme={colors}
                ref={potassioRef}
                value={values.potassio}
              />
              <TextInput
                label="Cálcio"
                mode="flat"
                style={styles.input}
                theme={colors}
                ref={calcioRef}
                value={values.calcio}
              />
              <TextInput
                label="Magnésio"
                mode="flat"
                style={styles.input}
                theme={colors}
                ref={magnesioRef}
                value={values.magnesio}
              />
              <TextInput
                label="Enxofre"
                mode="flat"
                style={styles.input}
                theme={colors}
                ref={enxofreRef}
                value={values.enxofre}
              />

            </Card>

            {isSwitchOn ? ( 
            <View>
              <Card style={styles.card} >
                <Title style={styles.title}>Micronutrientes</Title>
                <TextInput
                  label="Boro"
                  mode="flat"
                  style={styles.input}
                  theme={colors}
                  ref={boroRef}
                  value={values.boro}
                />
                <TextInput
                  label="Cobre"
                  mode="flat"
                  style={styles.input}
                  theme={colors}
                  ref={cobreRef}
                  value={values.cobre}
                />
                <TextInput
                  label="Cloro"
                  mode="flat"
                  style={styles.input}
                  theme={colors}
                  ref={cloroRef}
                  value={values.cloro}
                />
                <TextInput
                  label="Ferro"
                  mode="flat"
                  style={styles.input}
                  theme={colors}
                  ref={ferroRef}
                  value={values.ferro}
                />
                <TextInput
                  label="Molibdênio"
                  mode="flat"
                  style={styles.input}
                  theme={colors}
                  ref={magnesioRef}
                  value={values.molibdenio}
                />
                <TextInput
                  label="Zinco"
                  mode="flat"
                  style={styles.input}
                  theme={colors}
                  ref={zincoRef}
                  value={values.zinco}
                />
              </Card>
            </View> 
            ) : null }
            <View style={styles.buttonBox}>
              <Button onPress={handleSubmit} title="Fazer análise" backgroundColor="#5AA861" color= "#FFF"/>
            </View>
          </ScrollView>
          )}
        </Formik>
    </SafeAreaView>
  );
}

export default CreateSoilAnalysis;

