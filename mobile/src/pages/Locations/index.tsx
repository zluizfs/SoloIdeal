import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, ScrollView, Text } from 'react-native';
import { Appbar, Card, Title } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";

import api from '../../services/api';
import { useAuth } from '../../contexts/auth';
import { Locals } from '../../models/analise';

import StatusBarColor from '../../components/StatusBar';
import styles from './styles';
import { Item } from 'react-native-paper/lib/typescript/src/components/List/List';

type LocalsProps = {
  id: number;
  nome: string;
}

const Locations: React.FC<LocalsProps> = () => {
    const navigation = useNavigation();
    const { user } = useAuth();
    const [locals, setLocal] = useState<Locals[]>([]);
    
    useEffect(() => {
      async function loadAllLocations() {
        navigation.addListener('focus', () => {
          api.get<Locals[]>(`/users/${user.id}/location`)
          .then((response) => {
            setLocal(response.data);
          });
        })
      }
      loadAllLocations()
    },[navigation]);
    
    return (
       <SafeAreaView style={styles.container}>
         <StatusBarColor/>
         <Appbar.Header
            statusBarHeight={1}
            theme={{ colors: { primary: '#5AA861' }}}
            dark
            >
            <Appbar.Content title="Propriedades" /> 
            <Appbar.Action icon="plus" onPress={() => navigation.navigate('CreateLocations')}/>
          </Appbar.Header>

            <ScrollView style={styles.scrollView}>
              {locals.map((items => (
                <Card style={styles.card} key={items.id} onPress={() => navigation.navigate('LocationsDetails', {local_id: items.id})}>
                  <Card.Content>
                    <Title style={styles.cardTitle}>{items.nome}</Title>
                  </Card.Content>
                </Card>
              )))}
            </ScrollView>

        </SafeAreaView>
    );
  }

export default Locations;