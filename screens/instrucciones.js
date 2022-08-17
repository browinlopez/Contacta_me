import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

export default function instrucciones({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.cont2}>
        <Text style={styles.titulo}>
            Dependiendo el color del boton que se presiono, será el tiempo en el cual se atendera su solicitud
        </Text>

        <Text style={styles.textbuton2}>
            <Text style={styles.verde}>Verde:</Text> Si usted preciono el boton verde 
        </Text>
        <Text style={styles.textbuton2}>
        <Text style={styles.amarillo}>Amarillo:</Text> Si usted preciono el boton amarillo se le contestatara de una manera inmediata
        </Text>
        <Text style={styles.textbuton2}>
        <Text style={styles.rojo}>Rojo:</Text> Si usted presiona el botón rojo se contactatara a traves de una llamada con uno de nuestros asesores
        </Text>
      </View>
      <TouchableOpacity style={styles.btnHelp} onPress={()=>navigation.navigate('home')}>
        <Text style={styles.textbuton2}>
            Volver
        </Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        backgroundColor: '#dcdeeb'
    },
    cont2:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 400,
        backgroundColor: '#ffffff',
        borderRadius:34,
    },
    btnHelp:{
        width: '80%',
        height: 40,
        borderRadius:15,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
        backgroundColor:'#ffffff',
        borderColor:'#c1c1c1',
        borderBottomWidth:2,
        borderStartWidth: 0.5,
        borderEndWidth: 0.5,
        borderTopWidth: 0,
      },
      textbuton2:{
        color:'#00000060',
        fontWeight: 'bold',
        fontSize: 15
      },
      titulo:{
        color:'#9b9b9b',
        fontSize:20,
        fontWeight:'bold'
      },
      textbuton2:{
        color:'#00000060',
        fontWeight: 'bold',
        fontSize: 15,
        marginVertical:10
      },
      verde:{
        color:'green'
      },
      amarillo:{
        color:'yellow'
      },
      rojo:{
        color:'red'
    }
}) 