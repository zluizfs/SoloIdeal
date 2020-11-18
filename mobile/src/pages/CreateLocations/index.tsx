import React, { useRef } from 'react';
import { View, Text, SafeAreaView, ScrollView, ToastAndroid } from 'react-native';
import { Card, Title, TextInput } from 'react-native-paper';
import { Formik, FormikHelpers } from 'formik';
import { useNavigation } from "@react-navigation/native";
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

const PlotsValidation = Yup.object().shape({
  nome: Yup.string().required("Campo obrigatório!").min(1, "Mínimo de 1 caracter!")
});

const CreateLocations: React.FC = () => {
    const { user } = useAuth();
    const navigation = useNavigation();
    const nomeRef = useRef<typeof TextInput | any >(null)
    const initialValues: FormValues = {
      nome: ""
    };

    async function LocationCreate(
      formValues: FormValues,
      formikHelpers: FormikHelpers<FormValues>
      ) {
      try {
        await api.post(`/users/${user.id}/location/create`, formValues);
        formikHelpers.resetForm();
        navigation.navigate("Locations");
        ToastAndroid.show("Propriedade cadastrada com sucesso.", ToastAndroid.SHORT);
      } catch (error) {
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
          onSubmit={(values, formikHelpers) => LocationCreate(values, formikHelpers)}
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
                <Button onPress={handleSubmit} title="Criar Propriedade" backgroundColor="#5AA861" color= "#FFF"/>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CreateLocations;

