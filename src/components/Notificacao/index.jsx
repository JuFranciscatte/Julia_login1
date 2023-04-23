import React from "react";
import { Text, View, } from 'react-native'
import Icons from 'react-native-vector-icons/Feather';

const Notificacao = () => {
    return(
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 34,
                paddingTop: 20,
                paddingBottom: 10
            }}
        >
            <Icons 
                name="check" 
                size={14} 
                weight={50}
                color={'#424F4D'} 
            />
            <Text style={{fontSize: 16, fontFamily: 'Montserrat-Regular', marginLeft: 8, letterSpacing: -0.5}}>Solicitação <Text style={{color: '#424F4D', fontSize: 16, fontFamily: 'Montserrat-SemiBold', }}>aceita</Text></Text>

        </View>
    )

}


export default Notificacao;