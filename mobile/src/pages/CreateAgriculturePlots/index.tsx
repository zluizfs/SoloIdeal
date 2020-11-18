import React, { useState, useRef } from 'react';
import { View, Text, SafeAreaView, ScrollView, ToastAndroid } from 'react-native';
import { Card, Title, TextInput } from 'react-native-paper';
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
  nome: string;
}

type RouteParamList = {
  local_id: string;
};

const PlotsValidation = Yup.object().shape({
  nome: Yup.string().required("Campo obrigatório!")
    .min(1, "Mínimo de 2 caracteres!")
    .required("Campo obrigatório!")
});

const CreateAgriculturePlots: React.FC = () => {
    const { user } = useAuth();
    const navigation = useNavigation();
    const route = useRoute<RouteProp<Record<string, RouteParamList>, string>>();
    const [loading, setLoading] = useState(false);
    const nomeRef = useRef<typeof TextInput | any >(null)
    const initialValues: FormValues = {
      nome: ""
    };

    async function PlotCreate(
      formValues: FormValues,
      formikHelpers: FormikHelpers<FormValues>
      ) {
      try {
        setLoading(true);
        await api.post(`/users/${user.id}/location/${route.params.local_id}/plots/create`, formValues);
        setLoading(false);
        formikHelpers.resetForm();
        navigation.navigate("LocationsDetails");
        ToastAndroid.show("Talhão cadastrado com sucesso.", ToastAndroid.SHORT);
      } catch (error) {
        setLoading(false);
        ToastAndroid.show("Algo deu errado, tente novamente!", ToastAndroid.SHORT);
      }
    }

    return (
    <SafeAreaView style={styles.container}>
      <StatusBarColor/>
      <ScrollView style={styles.scrollView}>
        <Formik
          initialValues={initialValues}
          validationSchema={PlotsValidation}
          onSubmit={(values, formikHelpers) => PlotCreate(values, formikHelpers)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <Card style={styles.card}>
                <Title style={styles.title}>Dados do Talhão</Title>
                <TextInput
                  label="Nome"
                  mode="flat"
                  style={styles.input}
                  ref={nomeRef}
                  theme={colors}
                  value={values.nome}
                  onChangeText={handleChange("nome")}
                />
              </Card>
            
              <View style={styles.buttonBox}>
                <Button onPress={handleSubmit} title="Criar Talhão" backgroundColor="#5AA861" color= "#FFF"/>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CreateAgriculturePlots;

