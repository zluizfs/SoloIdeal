import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { Title, Paragraph, Card } from 'react-native-paper';

import api from '../../services/api';
import { useAuth } from '../../contexts/auth';
import { Plots, Analysis } from '../../models/analise';
import StatusBarColor from '../../components/StatusBar';
import Button from '../../components/Button';

import styles from './styles';

type RouteParamList = {
  local_id: string;
  plots_id: string;
};

const LocationsDetails: React.FC = () => {
    
    const { user } = useAuth();
    const route = useRoute<RouteProp<Record<string, RouteParamList>, string>>();
    const navigation = useNavigation();
    const [plots, setPlots] = useState<Plots>();
    const [analysis, setAnalysis] = useState<Analysis[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      async function loadLocation() {
        setLoading(true)
        api.get<Plots>(`/users/location/plots/${route.params.plots_id}`)
        .then((response) => {
          setPlots(response.data);
        });
        setLoading(false)
      }
      loadLocation()
    },[]);

    useEffect(() => {
      async function loadAllAnalysis() {
          setLoading(true)
          navigation.addListener('focus', () => {
          api.get<Analysis[]>(`/users/${user.id}/location/${route.params.local_id}/plots/${route.params.plots_id}/analysis`)
          .then((response) => {
            setAnalysis(response.data);
          });
          setLoading(false)
        })
      }
      loadAllAnalysis()
    },[navigation]);

    return (
      <SafeAreaView style={styles.container}>
        <StatusBarColor/>
          <View style={styles.header}>
            <Text style={styles.headerText}>{plots?.nome}</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.infoTitle}>Análises Cadastradas</Text>  
            <ScrollView style={styles.scrollView}>
              {analysis.map((items => (
                <Card style={styles.card} key={items.id} onPress={() => navigation.navigate('SoilAnalysisDetails', {analysis_id: items.id})}>
                  <Card.Content>
                    <Title style={styles.cardTitle}>Número da Análise: {items.numero}</Title>
                    <Paragraph>Data: {items.data}</Paragraph>
                  </Card.Content>
                </Card>
              )))}
            </ScrollView>
          </View>   
          <View style={styles.footer}>
            <Button onPress={() => navigation.navigate('CreateSoilAnalysis')} title="Nova análise" backgroundColor="#5AA861" color="#FFF"/>
          </View>
      </SafeAreaView>
  );
}

export default LocationsDetails;

