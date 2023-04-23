import React from 'react';
import { Text, View, StatusBar } from 'react-native'
import Icons from 'react-native-vector-icons/Feather';

const Header = () => {
    return(
        <>
            <StatusBar backgroundColor={'#006557'}/>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#006557',
                height: 83,
                padding: 30,
            }}>
                <Icons 
                    name="arrow-left" 
                    size={30} 
                    color={'#FFFFFF'} 
                />
                <Text 
                    style={{
                    color: '#FFFFFF', 
                    fontFamily: 'Montserrat-SemiBold', 
                    fontSize: 20
                    }}
                >
                    Plantões
                </Text>
                <Text style={{width:25}}></Text>
            </View>
        </>
    )
}

export default Header;