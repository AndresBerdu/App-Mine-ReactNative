import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Modal,
  Alert,
  View,
  Pressable,
} from 'react-native';


const Register = ({openLogin ,openRegister, closeRegister}) => {

  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [confirmpassword,setConfirmpassword] = useState('')

  const PermitRegister = () =>{
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}/;

    if(password !== confirmpassword){
      Alert.alert('Error Password','The passwords has not equals')
    }else{
      if(!password.match(passwordRegex)){
        Alert.alert('Error Password', 'Your password have not the handles')
      }else{
        openRegister (name,password)
        Alert.alert('Welcome','Your user has been register')
      }
    }
  }

  return (
    <LinearGradient colors={['#00F260','#0575E6']} style={{height: '100%'}}>
      <SafeAreaView style={style.contains}>
        <View style={style.SquereRegister}>
        <Text style={style.textTitlesh1}>JOB MINE</Text>
            
          <Text style={style.textTitleh2}>User Name:</Text>
            <TextInput style={style.input}
              placeholder='Enter Your User Name'
              value={name}
              onChangeText={setName}>
            </TextInput>
            
            <Text style={style.textTitleh2}>Password:</Text>
            <TextInput style={style.input}
              placeholder='Enter Your Password'
              value={password}
              onChangeText={setPassword}
              secureTextEntry>
            </TextInput> 

            <Text style={style.textTitleh2}>Confim Password:</Text>
            <TextInput style={style.input}
              placeholder='Enter Your Password'
              value={confirmpassword}
              onChangeText={setConfirmpassword}
              secureTextEntry>
            </TextInput> 

            <Pressable onPress={PermitRegister}>
              <Text style={style.buttonSave}>Save</Text>
            </Pressable>
              
          </View>

            <Pressable onPress={closeRegister}>
              <Text style={style.buttonSave}>Return Home</Text>
            </Pressable>

      </SafeAreaView>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
    contains:{
    flex: 1
    },
    SquereRegister:{
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
      backgroundColor:'#0063C7',  
      borderRadius: 18,
      textAlign: 'center',
      padding: 10,
      marginTop: 28,
      marginHorizontal:60
    },
});

export default Register;
