import React, { useState, useRef }  from 'react';
import { View, Text, SafeAreaView, ScrollView, ToastAndroid } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import { TextInput } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";

import api from '../../services/api';
import StatusBarColor from '../../components/StatusBar';
import Button from '../../components/Button';
import styles from './styles';

interface FormValues {
  nome: string;
  email: string;
  senha: string;
}

const SignUpValidation = Yup.object().shape({
  nome: Yup.string().required("Campo obrigatório!"),
  email: Yup.string().email("Email inválido!").required("Campo obrigatório!"),
  senha: Yup.string()
    .min(6, "Mínimo seis caracteres!")
    .required("Campo obrigatório!")
});

const SignUp: React.FC = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const nomeRef = useRef<typeof TextInput | any >(null);
    const emailRef = useRef<typeof TextInput | any>(null);
    const senhaRef = useRef<typeof TextInput | any>(null);
    const initialValues: FormValues = {
      nome: "",
      email: "",
      senha: ""
    };

    async function SignUpPress(
      formValues: FormValues,
      formikHelpers: FormikHelpers<FormValues>
      ) {
      try {
        setLoading(true);
        await api.post("/users/create", formValues);
        setLoading(false);
        formikHelpers.resetForm();
        navigation.navigate("SignIn");
        ToastAndroid.show("Usuário cadastrado com sucesso", ToastAndroid.SHORT);
      } catch (error) {
        setLoading(false);
        ToastAndroid.show("Algo deu errado, tente novamente!", ToastAndroid.SHORT);
      }
    }
    
    return (
    <SafeAreaView style={styles.container}>
      <StatusBarColor/>
      <View style={styles.footer}>
        <ScrollView style={styles.scrollView}>
          <Formik
            initialValues={initialValues}
            validationSchema={SignUpValidation}
            onSubmit={(values, formikHelpers) => SignUpPress(values, formikHelpers)}
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
                <Text style={styles.infoText}>Digite os dados abaixo para efetuar o cadastro.</Text>
                <TextInput
                  label="Nome"
                  mode="flat"
                  style={styles.input}
                  theme={{ colors: { primary: '#5AA861' }}}
                  value={values.nome}
                  ref={nomeRef}
                  onChangeText={handleChange("nome")}
                />

                <TextInput
                  label="E-mail"
                  mode="flat"
                  style={styles.input}
                  theme={{ colors: { primary: '#5AA861'}}}
                  value={values.email}
                  ref={emailRef}
                  onChangeText={handleChange("email")}
                />

                <TextInput
                  label="Senha"
                  mode="flat"
                  style={styles.input}
                  theme={{ colors: { primary: '#5AA861'}}}
                  secureTextEntry={true}
                  autoCapitalize="none"
                  value={values.senha}
                  ref={senhaRef}
                  onChangeText={handleChange("senha")}
                />

                <TextInput
                  label="Confirme a senha"
                  mode="flat"
                  style={styles.input}
                  theme={{ colors: { primary: '#5AA861'}}}
                  secureTextEntry={true}
                  autoCapitalize="none"
                />

                <View style={styles.buttonBox}>
                  <Button onPress={handleSubmit} title="Cadastre-se" backgroundColor="#5AA861" color= "#FFF"/>
                </View>
              </View>
            )}
            </Formik>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
}


export default SignUp;

