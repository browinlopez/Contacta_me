import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

export default function instrucciones({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.cont2}>
        <Text style={styles.titulo}>
        Dependiendo el color del botón que se presionó, será el tiempo en el cual se atenderá su solicitud
        </Text>
      <View>
        <Text style={styles.textbuton2}>
            <Text style={styles.verde}>VERDE:</Text> Si usted presionó el botón verde, un asesor se comunicara con usted en el transcurso del dia.
        </Text>
        <Text style={styles.textbuton2}>
        <Text style={styles.amarillo}>AMARILLO:</Text>  Si usted presionó el botón amarillo se le contestataria de una manera inmediata.
        </Text>
        <Text style={styles.textbuton2}>
        <Text style={styles.rojo}>ROJO:</Text>Si usted presiona el botón rojo se comunicará a través de una llamada con uno de nuestros asesores.
        </Text>
      </View>
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
        height: 50,
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
      titulo:{
        color:'#00000060',
        fontSize:20,
        fontWeight:'bold',
        textAlign: 'center',
        bottom:30
      },
      textbuton2:{
        color:'#00000060',
        fontWeight: 'bold',
        fontSize: 13,
        marginVertical:10,
        padding:5
      },
      verde:{
        color:'#398e3d'
      },
      amarillo:{
        color:'#fec107'
      },
      rojo:{
        color:'#d32f2e'
    }
})