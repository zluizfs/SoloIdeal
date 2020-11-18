import React from 'react';
import { View, Text, Image} from 'react-native';

import StatusBarColor from '../../components/StatusBar';
import Button from '../../components/Button';
import styles from './styles';

import { useAuth } from '../../contexts/auth'

const UserAccont: React.FC = () => {

  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <StatusBarColor/>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/img/default-user.jpg')}
            style={styles.imageSize} 
          />
        </View>
        <Text style={styles.headerText}>{user.nome}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.infoTitle}>Informações Pessoais</Text>

      <View style={styles.content}>
        <Text style={styles.infoSubTitle}>Nome</Text>
        <Text style={styles.infoContent}>{user.nome}</Text>
      </View> 

      <View style={styles.content}>
        <Text style={styles.infoSubTitle}>E-mail</Text>
        <Text style={styles.infoContent}>{user.email}</Text>
      </View>
     
      <View style={styles.buttonContainer}>
        <Button title="Editar Informações" backgroundColor="#5AA861" color="#FFF"/>
      </View>
      </View>
    </View>
  );
};

export default UserAccont;