import React from 'react';
import { View, Text, Image} from 'react-native';

import StatusBarColor from '../../components/StatusBar';
import Button from '../../components/Button';
import styles from './styles';

import { useAuth } from '../../contexts/auth'

const UserAccont = () => {

  const {user} = useAuth();

  return (
    <View style={styles.container}>
      <StatusBarColor/>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/img/default-user.jpg')}
            style={styles.imageSize} 
            resizeMode="contain"
          />
        </View>
        <Text style={styles.headerText}>{user?.name}</Text>
        <Text style={styles.jobTitle}>Estudante</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.infoTitle}>Informações Pessoais</Text>
      <View style={styles.content}>
        <Text style={styles.infoSubTitle}>Nome</Text>
        <Text style={styles.infoContent}>Luiz Fernando</Text>
      </View> 
      <View style={styles.content}>
        <Text style={styles.infoSubTitle}>Email</Text>
        <Text style={styles.infoContent}>zluizfs@outlook.com</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.infoSubTitle}>Atividade</Text>
        <Text style={styles.infoContent}>Estudante</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Editar Informações" color="#FFF"/>
      </View>
      </View>
    </View>
  );
};

export default UserAccont;