import React from "react";
import { View, Text } from "react-native";
import Icons from 'react-native-vector-icons/Feather';

const IconContact = (props) => {
    return(
        <>
            <View style={{
                flexDirection:'column',
                alignItems:'center',
            }}>
                <Icons 
                    name= {props.icon}
                    size={25} 
                    color= {props.color}
                />
                <Text style={{
                    color:`${props.color}`,
                    fontFamily: 'Montserrat-Bold',
                    fontSize: 14
                }}>
                    {props.text}
                </Text>
            </View>
        </>
    )
}

export default IconContact;