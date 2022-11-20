import React from "react";
import { View, Text, ScrollView } from 'react-native';
import { styles } from './css/Styles';
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { pathURL } from "../config/path";


export default function Indicadores() {
    const [dt24, setDt24] = React.useState(0);
    const [dtincio, setDtInicio] = React.useState(0);
    const [rt24, setRt24] = React.useState(0);
    const [rtinicio, setRtinicio] = React.useState(0);


    React.useEffect(() => {

        fetch(`${pathURL}/doacao/totaldoado24`)
            .then((response) => response.json())
            .then((produtos) => {
                console.log(produtos);
                setDt24(produtos[0].total);
            })
            .catch((error) =>
                console.error(
                    `Erro ao tentar carregar o total de produtos doados 24h-> ${error}`
                )
            );

        fetch(`${pathURL}/doacao/totaldoadoinicio`)
            .then((response) => response.json())
            .then((produtos) => {
                console.log(`doacao inicio -> ${produtos[0].total} `);
                setDtInicio(produtos[0].total)
            })
            .catch((error) =>
                console.error(
                    `Erro ao tentar carregar o total de produtos doados 24h-> ${error}`
                )
            );


        fetch(`${pathURL}/retirada/totaldoado24`)
            .then((response) => response.json())
            .then((produtos) => {
                console.log(`doacao inicio -> ${produtos[0].total} `);
                setRt24(produtos[0].total)

            })
            .catch((error) =>
                console.error(
                    `Erro ao tentar carregar o total de produtos doados 24h-> ${error}`
                )
            );

        fetch(`${pathURL}/retirada/totaldoadoinicio`)
            .then((response) => response.json())
            .then((produtos) => {
                console.log(`doacao inicio -> ${produtos[0].total} `);
                setRtinicio(produtos[0].total)

            })
            .catch((error) =>
                console.error(
                    `Erro ao tentar carregar o total de produtos doados 24h-> ${error}`
                )
            );


    })







    return (
        <View style={{ height: 400}}>

            <View style={{ flexDirection:'row', flexWrap:'wrap' }}>

                <View style={styles.doados24}>
                    <Text style={{ fontSize: 15, color: "white", fontWeight: "bold" }}>
                        {dt24}
                    </Text>
                    <Text style={{ fontSize: 15, color: "white" }}>
                        Alimentos doados nas últimas 24 horas
                    </Text>
                    <MaterialIcons name="shopping-bag" size={40} color="rgba(255,255,255,0.5)" style={{ textAlign: "right" }} />
                </View>

                <View style={styles.doadosinicio}>
                    <Text style={{ fontSize: 15, color: "white", fontWeight: "bold" }}>
                        {dtincio}
                    </Text>
                    <Text style={{ color: "white", fontSize: 15 }}>
                        Alimentos doados desde o início da campanha
                    </Text>
                    <Ionicons name="podium" size={40} color="rgba(255,255,255,0.5)" style={{ textAlign: "right" }} />
                </View>
                </View>
                <View style={{ flexDirection:'row', flexWrap:'wrap' }}>

                <View style={styles.retirados24}>
                    <Text style={{ fontSize: 15, color: "white", fontWeight: "bold" }}>
                        {rt24}
                    </Text>
                    <Text style={{ color: "white", fontSize: 15 }}>
                        Doações retiradas nas últimas 24 horas
                    </Text>
                    <Ionicons name="basket-sharp" size={40} color="rgba(255,255,255,0.5)" style={{ textAlign: "right" }} />
                </View>

                <View style={styles.retiradosinicio}>
                    <Text style={{ fontSize: 15, color: "white", fontWeight: "bold" }}>
                        {rtinicio}
                    </Text>
                    <Text style={{ color: "white", fontSize: 15 }}>
                        Doações retiradas desde o início da campanha
                    </Text>
                    <Ionicons name="podium" size={40} color="rgba(255,255,255,0.5)" style={{ textAlign: "right" }} />
                </View>
                </View>

        </View>
    )
}


