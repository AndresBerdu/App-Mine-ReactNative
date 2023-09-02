import React from 'react'
import { Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Lobby=({openHome, closeHome, openNews, openRegisterHours})=> {
  
  return (
    <LinearGradient colors={['#00F260','#0575E6']} style={{height: '100%'}}>
        <SafeAreaView style={style.contains}>
            <View style={style.SquereHome}>
              <Text style={style.textTitlesh1}>HELLO MINER </Text>
              <Text style={style.textTitleh2}>Please Select The Option</Text>

              <Pressable onPress={openNews}>
                <Text style={style.buttonLogin}>News</Text>
              </Pressable>

              <Pressable onPress={openRegisterHours}>
                  <Text style={style.buttonLogin}>Register Hours</Text>
              </Pressable>

              <Pressable onPress={closeHome}>
                <Text style={style.buttonLogueOut}>Logue Out</Text>
              </Pressable>
            </View>
        </SafeAreaView>
    </LinearGradient>
  )
}
 
const style = StyleSheet.create({
  contains:{
      flex: 1
  },
      SquereHome:{
      backgroundColor: 'white',
      borderRadius: 20,
      margin: 30,
      textAlign:'center',
      padding: 20,
  },
  textTitlesh1:{
      color: '#1F1F1F',
      fontSize: 45,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 'auto',
      marginTop: 20,
  },
  textTitleh2:{
    fontSize: 20,
    color: '#1F1F1F',
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonLogin:{
      color: 'white',
      fontWeight: 'bold',
      backgroundColor:'#00F260',  
      borderRadius: 18,
      textAlign: 'center',
      padding: 10,
      marginTop: 28,
      marginHorizontal:60
  },
  buttonLogueOut:{
    color: 'white',
    fontWeight: 'bold',
    backgroundColor:'#0063C7',  
    borderRadius: 18,
    textAlign: 'center',
    padding: 10,
    marginTop: 28,
    marginHorizontal:60
},
})
export default Lobby
