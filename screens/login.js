import { View, Text, StyleSheet,Image, TextInput, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'

export default function login() {
   const [celular,setCelular] = useState();
   const [contraseña,setContraseña] = useState();

  return (
    <View style={styles.container}>
        <View style={styles.container2}>

            <Image style={styles.image} source={require('../assets/contacta.webp')}/>

            <TextInput 
                style={styles.input}
                placeholder='Número celular '
                keyboardType="numeric"
                value={celular}
                onChangeText={(text) => setCelular(text)}
            />
            <TextInput 
                style={styles.input}
                placeholder='Contraseña'
                value={contraseña}
                onChangeText={(text) => setContraseña(text)}
            />

            <TouchableOpacity style={styles.buton}>
                <Text style={styles.textbuton}>
                    Ingresar
                </Text>
            </TouchableOpacity>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dcdeeb',
        width: '100%',
        height: '100%',
    },
    container2:{
        width: '80%',
        height: 350,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderColor: '#00000035',
        borderWidth: 2,
        borderBottomWidth: 1,
        borderStartWidth: 0.5,
        borderEndWidth: 0.5,
        borderTopWidth: 0,
    },
    image:{
        marginTop:25,
        width: 200,
        height: 40,
    },
    input:{
        marginVertical:10,
        borderColor: '#c1c1c1',
        borderWidth: 2,
        width:'80%',
        height:50,
        borderRadius:100,
        padding: 10,
    },
    buton:{
        marginVertical:10,
        top:0,
        backgroundColor:'#5072de',
        borderColor: '#c1c1c199',
        borderWidth: 2,
        width:'80%',
        height: 50,
        borderRadius:100,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderStartWidth: 0.5,
        borderEndWidth: 0.5,
        borderTopWidth: 0,
    },
    textbuton:{
        color:'#ffffff',
        fontSize: 20
    }
})