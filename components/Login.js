import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View, Pressable, ScrollView, Modal, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Lobby from './Lobby';

const Login = ({openLogin, closeLogin, openRegister, openHome}) => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    
    const PermitLogin = () =>{
        if(name && password){
            openHome(name)
        }else{
            Alert.alert('Error Login', 'You not have Account or the field was void')
        }
    }

  return (
    <LinearGradient colors={['#00F260','#0575E6']} style={{height: '100%'}}>
        <SafeAreaView style={style.contains}>
            <ScrollView>
                <View style={style.SquereLogin}>
                    <Text style={style.textTitlesh1}>JOB MINE</Text>
                    
                    <Text style={style.textTitleh2}>User Name:</Text>
                    <TextInput 
                        style={style.input}
                        placeholder='Enter Your User Name'
                        value={name}
                        onChangeText={setName}>
                    </TextInput>

                    <Text style={style.textTitleh2}>Password:</Text>
                    <TextInput
                        style={style.input}
                        placeholder='Enter Your Password'
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry>
                    </TextInput>
                       
                    <Pressable
                        onPress={PermitLogin}>                     
                        <Text style={style.buttonLogin}>Login Up</Text>
                    </Pressable>
                    
                    <Pressable
                        onPress={openRegister}>
                        <Text style={style.buttonRegister}>Sign Up</Text>
                    </Pressable>
                    <Text style={style.textRegister}>Do you not have account? Register now!</Text>

                </View>

                <Pressable onPress={closeLogin}>
                    <Text style={style.buttonRegister}>Return Home</Text>
                </Pressable>

            </ScrollView>
        </SafeAreaView>
    </LinearGradient> 
  )
}


const style = StyleSheet.create({
    contains:{
        flex: 1
    },
        SquereLogin:{
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
    buttonRegister:{
        color: 'white',
        fontWeight: 'bold',
        backgroundColor:'#0063C7',
        borderRadius: 18,
        textAlign: 'center',
        padding: 10,
        marginTop: 20,
        marginHorizontal: 60,
    },
    textRegister:{
        color: '#101010',
        textAlign: 'center',
        marginTop: 5
    }
})

export default Login;
