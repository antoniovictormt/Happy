import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { OrphanageDetails, OrphanagesMap, OrphanageData, SelectMapPosition } from './pages/index';
import Header from './components/Header';


const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#f2f3f5' }
      }}>
        <Screen name="OrphanagesMap" component={OrphanagesMap} />

        <Screen
          name="OrphanageDetails"
          component={OrphanageDetails}
          options={{
            headerShown: true,
            header: (props) => <Header title="Orfanato" {...props} />
          }} />

        <Screen
          name="OrphanageData"
          component={OrphanageData}
          options={{
            headerShown: true,
            header: (props) => <Header title="Formulário de Cadastro" {...props} />
          }} />

        <Screen
          name="SelectMapPosition"
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: (props) => <Header title="Selecione o orfanato no mapa" {...props} />
          }} />

      </Navigator>
    </NavigationContainer>
  )
}
