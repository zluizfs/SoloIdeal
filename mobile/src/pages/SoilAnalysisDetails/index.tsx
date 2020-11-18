import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Card, Title, TextInput, Switch } from 'react-native-paper';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";

import api from '../../services/api';
import StatusBarColor from '../../components/StatusBar';
import { Analysis } from '../../models/analise';
import styles from './styles';

const colors  = {
    colors: { primary: '#5AA861', underlineColor:'transparent' }
}

type RouteParamList = {
  analysis_id: string;
};

const SoilAnalysisDetails: React.FC = () => {
  const route = useRoute<RouteProp<Record<string, RouteParamList>, string>>();
  const [analysis, setAnalysis] = useState<Analysis>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadLocation() {
      setLoading(true)
      api.get<Analysis>(`/users/location/plots/analysis/${route.params.analysis_id}`)
      .then((response) => {
        setAnalysis(response.data);
      });
      setLoading(false)
    }
    loadLocation()
  },[]);

  const Macronutrientes = [
    { nutrientes: analysis?.fosforo, valores: 30, label: "Fosforo"},
    { nutrientes: analysis?.potassio, valores: 3, label: "Potássio"},
    { nutrientes: analysis?.calcio, valores: 40, label: "Cálcio"},
    { nutrientes: analysis?.magnesio, valores: 8, label: "Magnésio"},
    { nutrientes: analysis?.enxofre, valores: 15, label: "Enxofre"},
  ];

  const Micronutrients = [
    { quarter: 1, earnings: 1 },
    { quarter: 2, earnings: 2 },
    { quarter: 3, earnings: 3 },
    { quarter: 4, earnings: 2 },
    { quarter: 5, earnings: 2 },
    { quarter: 6, earnings: 2 },
  ]

    return (
      <SafeAreaView style={styles.container}>
      <StatusBarColor/>
        <View style={styles.header}>
          <Text style={styles.headerText}>Teste</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.infoTitle}>Dados da Análise</Text> 
          <ScrollView style={styles.scrollView}>
            <Text style={styles.infoSubTitle}>Macronutrientes</Text>  
            <VictoryChart width={370} theme={VictoryTheme.material}>
              <VictoryBar 
              data={Macronutrientes} 
              x="nutrients" 
              y="valores" 
              animate={{
                duration: 1000,
                onLoad: { duration: 2000 }
              }}
              />
          </VictoryChart>
            <Text style={styles.infoSubTitle}>Micronutrientes</Text> 
            <VictoryChart width={370} theme={VictoryTheme.material}>
              <VictoryBar 
              data={Micronutrients} 
              x="quarter" 
              y="earnings" 
              categories={{ x: ["Boro", "Cobre", "Cloro", "Ferro", "Molibdênio", "Zinco"] }}
              animate={{
                duration: 10000,
                onLoad: { duration: 2000 }
              }}
              />
            </VictoryChart>
          </ScrollView>
        </View>   
    </SafeAreaView>
  );
}

export default SoilAnalysisDetails;

