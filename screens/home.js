import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import React, {useState} from 'react'
import * as Linking from "expo-linking";
import axios from "axios"
import { useAuth } from '../AuthContext';


export default function home({navigation}) {

  const alertaV = () => {
    axios({
        method :"POST",
        url:"http://54.162.179.163/contactame/action/api_alerta.php",
        data:{
            celular,
            color:"Verde"
        },
    })
    .then((res) => {
       console.log(res.data);
    })
    .catch((e) => {
       alert(e.message);
    })
}

const alertaA = () => {
  axios({
      method :"POST",
      url:"http://54.162.179.163/contactame/action/api_alerta.php",
      data:{
          celular,
          color:"Amarille"
      },
  })
  .then((res) => {
     console.log(res.data);
  })
  .catch((e) => {
     alert(e.message);
  })
  

}

const alertaR = () => {
  axios({
      method :"POST",
      url:"http://54.162.179.163/contactame/action/api_alerta.php",
      data:{
          celular,
          color:"Rojo"
      },
  })
  .then((res) => {
     console.log(res.data);
  })
  .catch((e) => {
     alert(e.message);
  })
  
  Linking.openURL(`tel:${emergencia}`)
}

 const logout = () => {
  
  

 }


  const [color, setColor] =useState("")
  const [user] = useAuth();
 
  const nombre = 'JESUS JARABA'
  const celular = user.celular
  const emergencia = '+573009109978'


  
  return (
    <View style={styles.container}>
      <View style={styles.cabecera}>
        <View style={styles.cabecerarow}>
          <Text style={styles.text1}>Nombre:</Text>
          <Text style={styles.text2}> {user.nombre} </Text>
        </View>
        <View style={styles.cabecerarow}>
          <Text style={styles.text1}>Número:</Text>
          <Text style={styles.text2} > {user.celular} </Text>
        </View>
        <View style={styles.cabecerarow}>
          <Text style={styles.text1}>Dispostivo:</Text>
          <Text style={styles.text2}>My app</Text>
        </View>
   
      </View>
      <View style={styles.botones}>
        <Text style={styles.titulo}>TeleAsistencia</Text>
        <View style={styles.cabecerarow2}>
          <TouchableOpacity style={styles.btnAmarillo} onPress={alertaA}>
          <TextInput 
                style={styles.input}
                value={color}
                onChangeText={(text) => setColor(text)}
                disabled
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnVerde} onPress={alertaV}>
          <TextInput 
                style={styles.input}
                value={color}
                onChangeText={(text) => setColor(text)}
                
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnRojo} onPress={alertaR}>
          <Text style={styles.textbuton1}>Llamada de emergencia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnHelp} onPress={()=>navigation.navigate('instrucciones')}>
          <Text style={styles.textbuton2}>¿ Cómo usar los botones ?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCs} onPress={logout}>
          <Text style={styles.textbuton2}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dcdeeb',
    width: '100%',
    height: '100%',
    },
  cabecera:{
    alignSelf: 'center',
    padding: 40,
    width:'100%',
    height:200,
    backgroundColor: 'transparent',
  },
  botones:{
    width: '80%',
    height: 500,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    marginVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderStartWidth: 0.5,
    borderEndWidth: 0.5,
    borderTopWidth: 0,
    borderColor: '#01010158'
  },
  titulo:{
    color:'#9b9b9b',
    fontSize:25,
    fontWeight:'bold'
  },
  cabecerarow:{
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical:10
  },
  cabecerarow2:{
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical:10,
    width: '80%',
  },
  text1:{
    color:'#000000',
    fontSize: 15,
    fontWeight:'bold',
  },
  text2:{
    color:'#00000060',
    fontSize: 15,
    fontWeight:'bold'
  },
  btnAmarillo:{
    width: 100,
    height: 100,
    borderRadius:100,
    backgroundColor:'#fec107',
    marginVertical: 10
  },
  btnVerde:{
    width: 100,
    height: 100,
    borderRadius:100,
    backgroundColor:'#398e3d'
  },
  btnRojo:{
    width: 150,
    height: 150,
    borderRadius:200,
    backgroundColor:'#d32f2e',
    justifyContent: 'center',
    alignItems: 'center',

  },
  btnHelp:{
    width: '80%',
    height: 40,
    borderRadius:15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    backgroundColor:'#dcdeeb80',
    borderColor:'#c1c1c1',
    borderBottomWidth:2,
    borderStartWidth: 0.5,
    borderEndWidth: 0.5,
    borderTopWidth: 0,
  },
  btnCs:{
    width: '50%',
    height: 40,
    borderRadius:15,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    backgroundColor:'#dcdeeb80',
    borderColor:'#c1c1c1',
    borderBottomWidth:2,
    borderStartWidth: 0.5,
    borderEndWidth: 0.5,
    borderTopWidth: 0,
  },
  textbuton1:{
    color:'#ffffff',
    fontWeight: 'bold',
    fontSize: 20
  },
  textbuton2:{
    color:'#00000060',
    fontWeight: 'bold',
    fontSize: 15
  },
  input:{
    width:0,
    height:0
  }
})