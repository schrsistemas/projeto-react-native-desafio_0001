/**
 * Projeto infosen
 * ==> tela inicial
 */

// Import React and Component
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet, Image, Text} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('user_id').then(value =>
        navigation.replace(value === null ? 'Auth' : 'DrawerNavigationRoutes'),
      );
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../Image/splash.png')}
        style={{width: '80%', resizeMode: 'contain', margin: 0}}
      />
            <Text
              style={styles.textLogo}>
              InfoSen 
            </Text>
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  textLogo: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 36,
    alignSelf: 'center',
    padding: 8,
  },
});
