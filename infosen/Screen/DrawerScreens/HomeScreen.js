/**
 * Projeto infosen
 * ==> tela inicial na gaveta de navegação
 */

// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const HomeScreen = () => {
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
            BEM VINDO, ao InfoSen!
            {'\n\n'}
            
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          Veja ao menu ao lado as funcionalidades disponiveis neste app{'\n'}
          Projeto JS / React Native / NODE 
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          PROJETO InfoSenado
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
