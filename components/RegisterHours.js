import React, { useState } from 'react'
import { Modal, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const RegisterHours = ({openRegisterHours, closeRegisterHours}) => {
  return (

    <LinearGradient colors={['#00F260','#0575E6']} style={{height: '100%'}}>
        <SafeAreaView>
            <View style={style.Squerelobby}>
                <Text style={style.textTitlesh1}>Register Hours</Text>

                <Text style={style.textTitleh2}>Select The Day:</Text>
                <TextInput style={style.input}
                    placeholder='Enter Your Day'>
                </TextInput>
                <Text style={style.textTitleh2}>Start Hour:</Text>
                <TextInput style={style.input}
                    placeholder='Enter Your Start Hour'>
                </TextInput>

                <Pressable onPress={closeRegisterHours}>
                    <Text style={style.buttonSave}>Save</Text>
                </Pressable>
            </View>

            <Pressable onPress={closeRegisterHours}>
                <Text style={style.buttonReturn}>Return Lobby</Text>
            </Pressable>
        </SafeAreaView>
    </LinearGradient>
  )
}

const style = StyleSheet.create({
    contains:{
    flex: 1
    },
    Squerelobby:{
      backgroundColor: 'white',
      borderRadius: 20,
      margin: 30,
      textAlign:'center',
      padding: 20,
    },
    input:{
      backgroundColor: '#D4D4D4',
      padding: 10,
      margin: 10,
      borderRadius: 18,   
      flexDirection: 'row',
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
      color: '#1F1F1F',
      marginLeft: 15,
      marginTop: 20,
      fontWeight: 'bold',
    },
    buttonSave:{
      color: 'white',
      fontWeight: 'bold',
      backgroundColor:'#00F260',  
      borderRadius: 18,
      textAlign: 'center',
      padding: 10,
      marginTop: 28,
      marginHorizontal:60
    },
    buttonReturn:{
        color: 'white',
        fontWeight: 'bold',
        backgroundColor:'#0063C7',  
        borderRadius: 18,
        textAlign: 'center',
        padding: 10,
        marginTop: 28,
        marginHorizontal:60
      },
});

export default RegisterHours
