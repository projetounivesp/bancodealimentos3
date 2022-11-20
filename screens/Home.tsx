import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { pathURL } from '../config/path';
import { RootTabScreenProps } from '../types';
import { styles } from './css/Styles';
import Indicadores from './Indicadores';

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {

  const [estoque, setEstoque] = useState([]);
  const [carregado, setCarregado] = useState(true);

  useEffect(() => {
    fetch(`${pathURL}/estoque/listarprodutoestoque`)
      .then((response) => response.json())
      .then((produtos) => {
        console.log(produtos);
        setEstoque(produtos)
        setCarregado(false);
      }
      ).catch((error) => console.error(`Erro ao carregar a api -> ${error}`))
  }, [])

  return (
    <View style={styles.container}>
        <SafeAreaView>
          <ScrollView>
      <Indicadores />
      <View style={{ flex: 3, backgroundColor: "#fff", padding: 10, paddingBottom: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#000", paddingBottom: 10 }}>Produtos em Estoque</Text>
            {carregado ? (<ActivityIndicator size={50} color="rgb(255, 194, 0)" />) : (

              estoque.map((itens, ix) => (
                <View key={ix} style={{ backgroundColor: "#fff", paddingBottom: 20 }}>
                  <Text style={styles.texto1}>{itens.nomeproduto}</Text>
                  <View style={{ flexDirection: 'row', backgroundColor: "#fff" }}>
                    <Text style={{ width: itens.total * 5, backgroundColor: cor[ix], padding: 5 }} />
                    <Text style={styles.texto1}>{itens.total}</Text>
                  </View>
                </View>

              )))
            }
          
      </View>
      </ScrollView>
        </SafeAreaView>
    </View>
  );
}
let cor = [
  "#c62828",
  "#64b5f6",
  "#7b1fa2",
  "#009688",
  "#01579b",
  "#cddc39",
  "#ffa726",
  "#ff6f00",
  "#c62828",
  "#64b5f6",
  "#7b1fa2",
  "#009688",
  "#01579b",
  "#cddc39",
  "#ffa726",
  "#ff6f00",
  "#c62828",
  "#64b5f6",
  "#7b1fa2",
  "#009688",
  "#01579b",
  "#cddc39",
  "#ffa726",
  "#ff6f00",
  "#c62828",
  "#64b5f6",
  "#7b1fa2",
  "#009688",
  "#01579b",
  "#cddc39",
  "#ffa726",
  "#ff6f00",
  "#c62828",
  "#64b5f6",
  "#7b1fa2",
  "#009688",
  "#01579b",
  "#cddc39",
  "#ffa726",
  "#ff6f00",
  "#c62828",
  "#64b5f6",
  "#7b1fa2",
  "#009688",
  "#01579b",
  "#cddc39",
  "#ffa726",
  "#ff6f00",
  "#c62828",
  "#64b5f6",
  "#7b1fa2",
  "#009688",
  "#01579b",
  "#cddc39",
  "#ffa726",
  "#ff6f00",
  "#c62828",
  "#64b5f6",
  "#7b1fa2",
  "#009688",
  "#01579b",
  "#cddc39",
  "#ffa726",
  "#ff6f00",
  "#c62828",
  "#64b5f6",
  "#7b1fa2",
  "#009688",
  "#01579b",
  "#cddc39",
  "#ffa726",
  "#ff6f00",
  "#c62828",
  "#64b5f6",
  "#7b1fa2",
  "#009688",
  "#01579b",
  "#cddc39",
  "#ffa726",
  "#ff6f00",
  "#c62828",
  "#64b5f6",
  "#7b1fa2",
  "#009688",
  "#01579b",
  "#cddc39",
  "#ffa726",
  "#ff6f00",
];
