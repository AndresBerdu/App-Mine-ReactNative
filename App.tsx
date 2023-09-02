import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, Text, View, Pressable, ScrollView, Modal} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Login from './components/Login';
import Register from './components/Register';
import Lobby from './components/Lobby';
import News from './components/News';
import RegisterHours from './components/RegisterHours';

const App=()=>{
  
  const [loginModal, setLoginModal] = useState(false)
  const [registerModal, setRegisterModal] = useState(false)
  const [homeModal, setHomeModal] = useState(false)
  const [newsModal, setNewsModal] = useState(false)
  const [registerHoursModal, setRegisterHoursModal] = useState(false)
  const [userRegister, setUserRegister] = useState(false)
  const [logeo, setLogeo] = useState <string|null>(null)

  const PermitLogin = (name: string) =>{
    setLogeo(name)
    setLoginModal(false)
  }

  const PermitRegister = (name:string) =>{
    setLogeo(name)
    setRegisterModal(false)
  }

  const openRegisterModal = () => {
    setRegisterModal(true)
  }
  const closeRegisterModal = () =>{
    setRegisterModal(false)
  }
  const openLoginModal = () => {
    setLoginModal(!loginModal)
  }
  const closeLoginModal = () =>{
    setLoginModal(false)
  }
  const openHomeModal = () =>{
    setHomeModal(true)
  }
  const closeHomeModal = () =>{
    setHomeModal(false)
  }
  const openNewsModal = () =>{
    setNewsModal(true)
  }
  const closeNewsModal = () =>{
    setNewsModal(false)
  }
  const openRegisterHoursModal = () =>{
    setRegisterHoursModal(true)
  }
  const closeRegisterModalModal = () =>{
    setRegisterHoursModal(false)
  }

  return (
    
    <SafeAreaView style={style.contains}>
      <ScrollView>
        <LinearGradient colors={['#00F260','#0575E6']} style={{height: '100%'}}>
          <View style={style.SquereLogin}>
            <Text style={style.textTitlesh1}>WELCOME TO SYSTEM HOURS MINE</Text>
          </View>

          <View>
            <Text style={style.textTitleh2}>You Have Account?, Login Up To Out App And Register Your Hours</Text>
            {!userRegister && (
              <Pressable
                onPress={openLoginModal}>
              <Text style={style.buttonLogin}>Login Up</Text>
              </Pressable>
            )}
            
            <Text style={style.textTitleh2}>Do You Not Have Account?, Only Need Register And Later Login up</Text>
            {!userRegister && (
              <Pressable
              onPress={openRegisterModal}>
              <Text style={style.buttonRegister}>Sing Up</Text>
              </Pressable>
            )}
            
            <Modal visible={loginModal} animationType='none'>
                <Login openLogin={PermitLogin} closeLogin={closeLoginModal} openRegister={openRegisterModal} openHome={openHomeModal}/>
            </Modal>

            <Modal
              visible={registerModal}
              animationType='none'>
                <Register openRegister={openRegisterModal} closeRegister={closeRegisterModal} openLogin={openLoginModal}/>
            </Modal>

            <Modal
              visible={homeModal}
              animationType='none'>
                <Lobby openHome={openHomeModal} closeHome={closeHomeModal} openNews={openNewsModal} openRegisterHours={openRegisterHoursModal}/>
            </Modal>

            <Modal
              visible={newsModal}
              animationType='none'>
                <News openNews={openNewsModal} closeNews={closeNewsModal}></News>
            </Modal>

            <Modal
              visible={registerHoursModal}
              animationType='none'>
                <RegisterHours openRegisterHours={openRegisterHoursModal} closeRegisterHours={closeRegisterModalModal}/>
            </Modal>
            
          </View>      
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  contains:{
    flex: 1,
  },
  ViewCenter:{
    textAlign: 'center'
  },
  SquereLogin:{
    backgroundColor: 'white',
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
    color: 'white',
    marginTop: 40,
    marginHorizontal: 80,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  buttonLogin:{
    color: 'white',
    fontWeight: 'bold',
    backgroundColor:'#00F260',  
    borderRadius: 18,
    textAlign: 'center',
    padding: 10,
    marginTop: 28,
    marginHorizontal:100
  },
  buttonRegister:{
    color: 'white',
    fontWeight: 'bold',
    backgroundColor:'#0063C7',
    borderRadius: 18,
    textAlign: 'center',
    padding: 10,
    marginTop: 15,
    marginHorizontal: 100,
    marginVertical: 0|40,
  },
});

export default App;
