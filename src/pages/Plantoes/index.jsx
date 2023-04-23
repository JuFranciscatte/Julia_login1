import React from 'react'
import { Text, View, Image } from 'react-native'
import Icons from 'react-native-vector-icons/Feather';

import Header from '../../components/Header'
import Notificacao from '../../components/Notificacao';
import Line from '../../components/Line';
import Contact from '../../components/Contact';


const Plantoes = () => {
  return(
    <View>
        
        <Header />

        <Notificacao />

        <Line />

        <Contact />
                
        <View style={{
            width: 400, 
            height: 0.35, 
            backgroundColor: '#b8b7b7',
            marginTop: 22
        }}/>

    
    </View>
  )
}

export default Plantoes;