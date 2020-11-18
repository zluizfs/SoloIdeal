import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { Title, Card } from 'react-native-paper';

import api from '../../services/api';
import { useAuth } from '../../contexts/auth';
import { Locals, Plots } from '../../models/analise';
import StatusBarColor from '../../components/StatusBar';
import Button from '../../components/Button';

import styles from './styles';

type RouteParamList = {
  local_id: string;
};

const LocationsDetails: React.FC = () => {
    const { user } = useAuth();
    const route = useRoute<RouteProp<Record<string, RouteParamList>, string>>();
    const navigation = useNavigation();
    const [locals, setLocal] = useState<Locals | null>(null);
    const [plots, setPlots] = useState<Plots[]>([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
      async function loadLocation() {
        setLoading(true)
        api.get<Locals>(`/users/location/${route.params.local_id}`)
        .then((response) => {
          setLocal(response.data);
        });
        setLoading(false)
      }
      loadLocation()
    },[]);

    useEffect(() => {
      async function loadAllPlots() {
          setLoading(true)
          navigation.addListener('focus', () => {
          api.get<Plots[]>(`/users/${user.id}/location/${route.params.local_id}/plots`)
          .then((response) => {
            setPlots(response.data);
          });
          setLoading(false)
        })
      }
      loadAllPlots()
    },[navigation]);

    return (
      <SafeAreaView style={styles.container}>
        <StatusBarColor/>
          <View style={styles.header}>
            <Text style={styles.headerText}>{locals?.nome}</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.infoTitle}>Talhões Cadastrados</Text>  
            <ScrollView style={styles.scrollView}>
              {plots.map((items => (
                <Card style={styles.card} key={items.id} onPress={() => navigation.navigate('AgriculturePlotsDetails', {plots_id: items.id, local_id: route.params.local_id})}>
                  <Card.Content>
                    <Title style={styles.cardTitle}>{items.nome}</Title>
                  </Card.Content>
                </Card>
              )))}
            </ScrollView>
          </View>   
          <View style={styles.footer}>
            <Button onPress={() => navigation.navigate('CreateAgriculturePlots', {local_id: route.params.local_id})} title="Cadastrar Talhão" backgroundColor="#5AA861" color="#FFF"/>
          </View>
      </SafeAreaView>
  );
}

export default LocationsDetails;

