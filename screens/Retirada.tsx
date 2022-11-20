
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView,TextInput, Touchable, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { pathURL } from '../config/path';
import { styles } from './css/Styles';
import Indicadores from './Indicadores';
import {Picker} from '@react-native-picker/picker';



export default function TabTwoScreen() {

  const [selecioneProduto, setSelecioneProduto] = useState("Selecione um Produto");

  const [frmProduto, setFrmProduto] = useState("Selecione");
  const [frmQtd, setFrmQtd] = useState("1");
  const [lstQtd, setLstQtd] = useState(0);
  const [qtd,setQtd] = useState(1);
  const [listaProduto, setListaProduto] = useState([
    {
      idproduto: 0,
      nomeproduto: "selecionar",
      total: 1,
    },
  ]);

  useEffect(() => {
    fetch(`${pathURL}/estoque/listarprodutoestoque`)
      .then((response) => response.json())
      .then((produtos) => {
        setListaProduto(produtos);
        console.log(produtos)
      })
      .catch((erro) =>
        console.error(`Erro ao tentar carregar os produtos->${erro}`)
      );
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
      <Indicadores />



      <View style={{ flex: 3, backgroundColor: "#fff", padding: 10, paddingBottom: 30 }}>
        
      


        <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#000", paddingBottom: 10 }}>Realizar Retirada</Text>

        <Text  style={{fontSize:15, color:"black", padding:10,fontWeight:"bold"}}>Selecione o produto que deseja retirar</Text>

        <Picker
  selectedValue={selecioneProduto}
   style={{backgroundColor:"#eee",color:"black", width:"90%", marginLeft:"auto",marginRight:"auto"}}
  onValueChange={(itemValue, itemIndex) =>
    setSelecioneProduto(itemValue) 
  }>
    
    {
      listaProduto.map((itens, ix)=>(
        <Picker.Item label={itens.nomeproduto} value={itens.idproduto} key={ix}/>
      ))
    }
</Picker >


<Text style={{fontSize:15, color:"black", fontWeight:"bold", padding:10, marginTop:20}}>Quantidade a ser retirada</Text>
    <Picker selectedValue={qtd}
   style={{backgroundColor:"#eee",color:"black", width:"90%", marginLeft:"auto",marginRight:"auto"}}
   onValueChange={(itemValue, itemIndex) =>
     setQtd(itemValue) }>
      <Picker.Item label='1' value="1"/>
      <Picker.Item label='2' value="2"/>
      <Picker.Item label='3' value="3"/>
      <Picker.Item label='4' value="4"/>
      <Picker.Item label='5' value="5"/>
    </Picker>
    <TouchableOpacity style={{backgroundColor:'red', padding:10,marginTop:50, width:"50%", marginLeft:"auto", marginRight:"auto",borderRadius:20}} onPress={()=> {
      realizarRetirada(selecioneProduto,qtd) 
      }
      }>
      <Text  style={{fontSize:15, color:"white",textAlign:"center",padding:5}}>Realizar retirada</Text>
    </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}



function realizarRetirada(produto:any,qtd:any) {
  // Realizando o cadastro de uma nova entrada
  
  fetch(`${pathURL}/retirada/cadastro`, {
    method: "POST",
    mode: "cors",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      idproduto: produto,
      quantidade: qtd,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Retirada realizada.");
      console.log(data);
    })
    .catch((error) =>
      console.error(`Erro ao tentar cadastrar uma nova retirada -> ${error}`)
    );
}