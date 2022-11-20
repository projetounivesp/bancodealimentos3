import { Text, View } from '../components/Themed';
import { styles } from './css/Styles';
import Indicadores from './Indicadores';
import { ScrollView } from 'react-native';
export default function Sobre() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Indicadores />
      <View style={{ flex: 3, backgroundColor: "#fff", padding: 10, paddingBottom: 30 }}>

        <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#000000", paddingBottom: 10 }}> Sobre</Text>
        <Text style={{fontSize:15, fontWeight:"bold", color: "#000000"}}>Projeto: Banco de Alimentos</Text>

        <Text style={{fontSize:15, fontWeight:"bold", color: "#000000"}}>Projeto Integrador em Computação II - PJI-240-T003</Text>
            
        <Text style={{fontSize:15, fontWeight:"bold", color: "#000000"}}>Polo Jambeiro - São Paulo</Text>
        <Text style={{fontSize:15,fontWeight:'bold',paddingVertical:10, color: "#000000"}}>Objetivo</Text>
        <Text style={{textAlign:'justify', lineHeight:30, color: "#000000"}}>
            Este projeto é parte integrante da disciplina de Projeto Integrador
            em Computação II - PJI-240-T003 - realizada no 2º bimestre de 2022
            na Univesp - Universidade Virtual do Estado de São Paulo
            </Text>
            <Text style={{fontSize:15, paddingVertical:20, lineHeight:30, textAlign:'justify', color: "#000000"}}>
            O projeto tem como objetivo desenvolver um software através de um
            framework web, utilizando noções de banco de dados e realizando
            controle de versão, visando auxiliar a administração de um
            condomínio em sua campanha de doação de alimentos. O aplicativo,
            além das funcionalidades de cadastro de banco de dados, irá
            identificar os produtos mais doados a fim de subsidiar a
            administração dos condomínios com informações que possam ajudá-los a
            promover o engajamento dos moradores em doações em produtos com
            maior necessidade dos condôminos e com isto reduzir estoque de
            produtos e o risco de perdas por vencimento de validade.
            </Text>
            
            <Text style={{fontSize:15,fontWeight:"bold", color: "#000000"}}>Time de desenvolvimento</Text>
            
            <Text style={{paddingVertical:10, color: "#000000"}}>
            Tathiane Costa Pereira - Polo Jambeiro - São Paulo
            </Text>
            <Text style={{paddingVertical:10, color: "#000000"}}>
            Edilson Jesus da Silva - Polo Jambeiro - São Paulo
            </Text>
            <Text style={{paddingVertical:10, color: "#000000"}}>
            Eduardo Gonçalves Gama - Polo Jambeiro - São Paulo
            </Text>
            <Text style={{paddingVertical:10, color: "#000000"}}>
            José Ocimar Alves de Freitas - Polo Jambeiro - São Paulo
            </Text>
            <Text style={{paddingVertical:10, color: "#000000"}}>
            Danilo Eiji Ito - Polo Bragança Paulista
            </Text>
            <Text style={{paddingVertical:10, color: "#000000"}}>
            Leandro Soares - Jambeiro - São Paulo
            </Text>
            <Text style={{paddingVertical:10, color: "#000000"}}>
            Leoni Duarte Antunes - Jambeiro - São Paulo
            </Text>
            <Text style={{paddingVertical:10, color: "#000000"}}>
            Robson Augusto Arcanjo de Brito - Jambeiro - São Paulo
            </Text>
      </View>
      </ScrollView>
    </View>
  );
}
