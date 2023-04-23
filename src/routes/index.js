import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeatherIcons from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Plantoes from '../pages/Plantoes'
import Favoritos from '../pages/Favoritos'
import Home from '../pages/Home'
import MinhaConta from '../pages/MinhaConta'

const navIcons = {
    Favoritos: {name: 'heart', type: 'feather'},
    Plantoes: {name: 'clipboard-check-outline', type: 'material'},
    Home: {name: 'home', type: 'material'},
    'Minha Conta': {name: 'user', type: 'feather'},
};

const Tab = createBottomTabNavigator();

export default function Route() {
    return (
      <NavigationContainer>
        <Tab.Navigator 
            initialRouteName='Plantoes' 
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarStyle: {
                    display: 'flex',
                    height: 55,
                    borderTopWidth: 0,
                    paddingTop: 10,
                    paddingBottom: 10,
                    elevation: 1,
                },
                tabBarLabelStyle: {
                    fontFamily: 'Montserrat-Bold'
                },
                tabBarActiveBackgroundColor: 'white',
                tabBarInactiveBackgroundColor: 'white',
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: properties => {
                    const { focused } = properties;
                    const icon = navIcons[route.name];

                    return icon.type === 'material' 
                        ? (
                            <MaterialIcons
                                name={icon.name}
                                size={20}
                                color={focused ? 'green' : 'gray'}
                            />
                        ) :  (
                            <FeatherIcons
                                name={icon.name}
                                size={20}
                                color={focused ? 'green' : 'gray'}
                            />
                        )
                  },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Plantoes" options={{title: "Plantões"}} component={Plantoes} />
            <Tab.Screen name="Favoritos" component={Favoritos} />
            <Tab.Screen name="Minha Conta" component={MinhaConta} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

