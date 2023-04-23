import React from 'react'
import { Text, View, Image } from 'react-native'
import Icons from 'react-native-vector-icons/Feather';
import IconContact from '../IconContact';

const Contact = () => {
    return(
        <View>
            <View style={{
                flexDirection: 'row',
                 padding: 30,
            }}>
                <Image
                    source={require('../../assets/images/profile.png')}
                    style={{
                        width: 71,
                        height: 71,
                        borderRadius: 50,
                        backgroundColor: 'black'
                    }}
                />

                <View style={{
                    flexDirection: 'column', 
                    itemsCenter: 'center', 
                    justifyContent: 'flex-start',
                    marginLeft: 15
                }}>
                    <Text style={{
                        fontFamily: 'Montserrat-Bold', 
                        fontSize: 18,
                        letterSpacing: -0.4,
                        color: '#334240'
                    }}>
                        Carolina Magalhães
                    </Text>

                    <View 
                        style={{
                            flexDirection: 'row', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            marginTop: 10,
                        }}
                    >
                        <Icons 
                            name="phone" 
                            size={12} 
                            color={'#41c455'} 
                        />
                        <Text style={{
                            marginLeft: 5, 
                            fontSize: 14, 
                            color: '#41c455', 
                            letterSpacing: -0.5, 
                            fontFamily: 'Montserrat-Bold'
                        }}>
                            Ligar para o profissional
                        </Text>
                    </View>
                </View>
            </View>

            <View style={{
                flexDirection:'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                paddingHorizontal: 50

                
            }}>
            
            <IconContact text='Reportar' color='#f70511'  icon='alert-triangle'/>
            <IconContact text='Avaliar' color='#07689F' icon='star' />

            </View>
        </View>
    )
}

export default Contact;