import { Text, View } from '../components/Themed';
import { TouchableOpacity, Alert, ScrollView } from 'react-native';
import { styles } from './css/Styles';
import Indicadores from './Indicadores';
import{Picker} from '@react-native-picker/picker';
import { useEffect, useState } from 'react';
import { pathURL } from '../config/path';


let produto = ""
let doador = 1
let qtd = ""
let dia = ""
let mes = ""
let ano = ""

export default function Doacao() {


  const [qtd,setQtd] = useState(1);
  const [selecioneProduto, setSelecioneProduto] = useState("Selecione um Produto");

  const [listaProduto, setListaProduto] = useState([
    {
      idproduto: 0,
      nomeproduto: "selecionar",
      total: 1,
    },
  ]);
  const [ dia , setDia] = useState("");
  const [ mes, setMes] = useState("");
  const [ano , setAno] = useState("");


useEffect(()=>{

  fetch(`${pathURL}/produto/listar`)
    .then((response) => response.json())
    .then((produtos) => {
      console.log("informacoes " + produtos);
      setListaProduto(produtos)
    })
    .catch((error) =>
      console.error(`Erro ao tentar carregar a lista de produtos -> ${error}`)
    );

  },[])

  return (
    <View style={styles.container}>
      <ScrollView>
      <Indicadores />

      <View style={{ flex: 3, backgroundColor: "#fff", padding: 10, paddingBottom: 30 }}>

        <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#000", paddingBottom: 10 }}>Realizar Doação</Text>

        <Text  style={{fontSize:15, color:"black", fontWeight:'bold', marginBottom:10}}>Selecione o produto que deseja doar</Text>
        <Picker style={{backgroundColor:"#eeeeee", marginBottom:20}}
  selectedValue={selecioneProduto}
   
  onValueChange={(itemValue, itemIndex) =>
    setSelecioneProduto(itemValue) 
  }>
    
    {
      listaProduto.map((itens, ix)=>(
        <Picker.Item label={itens.nomeproduto} value={itens.idproduto} key={ix}/>
      ))
    }
</Picker >


<Text style={{fontSize:15, color:"black", fontWeight:'bold', marginBottom:10}}>Quantidade a ser doada</Text>
    <Picker selectedValue={qtd} style={{backgroundColor:"#eeeeee", marginBottom:20}}
   
   onValueChange={(itemValue, itemIndex) =>
     setQtd(itemValue) }>
      <Picker.Item label='1' value="1"/>
      <Picker.Item label='2' value="2"/>
      <Picker.Item label='3' value="3"/>
      <Picker.Item label='4' value="4"/>
      <Picker.Item label='5' value="5"/>
    </Picker>
    

    <Text style={{fontSize:15, color:"black", fontWeight:'bold', marginBottom:10}}>Selecione a data de validade do produto</Text>


    <View style={{flexDirection:"row"}}>

<View style={{flex:1, backgroundColor:"#ffffff"}}>
    <Text style={{fontSize:15, color:"black"}}>Dia</Text>
    <Picker selectedValue={dia} 
     style={{backgroundColor:"#eeeeee"}}
      onValueChange={(itemValue, itemIndex) =>
      setDia(itemValue) }>
      <Picker.Item label='01' value="01"/>
      <Picker.Item label='02' value="02"/>
      <Picker.Item label='03' value="03"/>
      <Picker.Item label='04' value="04"/>
      <Picker.Item label='05' value="05"/>
      <Picker.Item label='06' value="06"/>
      <Picker.Item label='07' value="07"/>
      <Picker.Item label='08' value="08"/>
      <Picker.Item label='09' value="09"/>
      <Picker.Item label='10' value="10"/>
      <Picker.Item label='11' value="11"/>
      <Picker.Item label="12" value="12"/>
      <Picker.Item label="13" value="13"/>
      <Picker.Item label="14" value="14"/>
      <Picker.Item label="15" value="15"/>
      <Picker.Item label="16" value="16"/>
      <Picker.Item label="17" value="17"/>
      <Picker.Item label="18" value="18"/>
      <Picker.Item label="19" value="19"/>
      <Picker.Item label="20" value="20"/>
      <Picker.Item label="21" value="21"/>
      <Picker.Item label="22" value="22"/>
      <Picker.Item label="23" value="23"/>
      <Picker.Item label="24" value="24"/>
      <Picker.Item label="25" value="25"/>
      <Picker.Item label="26" value="26"/>
      <Picker.Item label="27" value="27"/>
      <Picker.Item label="28" value="28"/>
      <Picker.Item label="29" value="29"/>
      <Picker.Item label="30" value="30"/>
      <Picker.Item label="31" value="31"/>
    </Picker>

    </View>
    <View style={{flex:1}}>
    <Text style={{fontSize:15, color:"black"}}>Mês</Text>

    <Picker selectedValue={mes}
     style={{backgroundColor:"#eeeeee"}}
      onValueChange={(itemValue, itemIndex) =>
      setMes(itemValue) }>
      <Picker.Item label="01" value="01"/>
      <Picker.Item label="02" value="02"/>
      <Picker.Item label="03" value="03"/>
      <Picker.Item label="04" value="04"/>
      <Picker.Item label="05" value="05"/>
      <Picker.Item label="05" value="05"/>
      <Picker.Item label="06" value="06"/>
      <Picker.Item label="07" value="07"/>
      <Picker.Item label="08" value="08"/>
      <Picker.Item label="09" value="09"/>
      <Picker.Item label="10" value="10"/>
      <Picker.Item label="11" value="11"/>
      <Picker.Item label="12" value="12"/>
      
    </Picker>
    </View>
    <View style={{flex:1}}>
      
    <Text style={{fontSize:15, color:"black"}}>Ano</Text>
    <Picker selectedValue={ano} 
    style={{backgroundColor:"#eeeeee"}}
      onValueChange={(itemValue, itemIndex) =>
      setAno(itemValue) }>
      <Picker.Item label="2022" value="2022"/>
      <Picker.Item label="2023" value="2023"/>
      <Picker.Item label="2024" value="2024"/>
      <Picker.Item label="2025" value="2025"/>
      <Picker.Item label="2026" value="2026"/>
      <Picker.Item label="2027" value="2027"/>
      <Picker.Item label="2028" value="2028"/>
      <Picker.Item label="2029" value="2029"/>
      <Picker.Item label="2030" value="2030"/>
      
    </Picker>

    
    </View>

      </View>

      <TouchableOpacity style={{backgroundColor:'red', padding:10,marginTop:50, width:"50%", marginLeft:"auto", marginRight:"auto",borderRadius:20}} onPress={()=>{
       realizarDoacao(ano,mes,dia,produto,doador,qtd)
       Alert.alert(`Você selecionou -> Produto: ${selecioneProduto} e quantidade: ${qtd}`)}
      }>
      <Text  style={{fontSize:15, color:"white",textAlign:"center",padding:5}}>Realizar doação</Text>
    </TouchableOpacity>
    </View>
      </ScrollView>
    </View>
  );
}




function realizarDoacao(ano:any, mes:any, dia:any,produto:any,doador:any,qtd:any){
  const datavalidade = `${ano}-${mes}-${dia}`;

  fetch(`${pathURL}/doacao/cadastro`, {
    method: "POST",
    mode: "cors",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      idproduto: produto,
      iddoador: doador,
      quantidade: qtd,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Doação cadastrada.");
      console.log(data);
    })
    .catch((error) =>
      console.error(`Erro ao tentar cadastrar uma nova doaÃ§Ã£o -> ${error}`)
    );

  // Realizando o cadastro de uma nova entrada

  fetch(`${pathURL}/entrada/cadastro`, {
    method: "POST",
    mode: "cors",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      idproduto: produto,
      datavalidade: datavalidade,
      quantidade: qtd,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) =>
      console.error(`Erro ao tentar cadastrar uma nova entrada -> ${error}`)
    );

}