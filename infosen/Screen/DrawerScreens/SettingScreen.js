/**
 * Projeto infosen
 * ==> acesso a uma tela de configuração - teste
 */

// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            ACESSO EM MAIS ALGUMA FUNCIONALIDADE
            {'\n\n'}
            ?????????????? ?????????
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          TESTE TESTE ABC 123 - PROJETO USANDO TECNOLOGIAS JS NODE REACT NATIVE {'\n'}
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          Projeto InfoSen
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
