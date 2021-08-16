// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import { firebase } from '@react-native-firebase/database';
import React, { useEffect, useState } from 'react';
//import {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
}
  from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ParkScreen from "./screens/parkScreen"
function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [park, setPark] = useState(null);
  useEffect(() => {
  }, [park]);
  useEffect(() => {

  }, []);
  function onPressPark(parkId) {
    setPark(parkId)
  }
  function onPressBackCallback() {
    setPark(null)
  }
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      {park == null ?
        <View style={styles.Container}>
          <View style={styles.Row}>
            <Text style={styles.easy}>EASY</Text>
            <Text style={styles.parking}>PARKING</Text>
            <View style={{ width: 270, paddingTop: 20 }}>
              <View style={{ width: 270, paddingTop: 20 }}>
                <Button title="MEU Parking" onPress={() => onPressPark(2)} color="#2c2061" />
              </View>
              <View style={{ width: 270, height: 100, paddingTop: 20 }}>
                <Button title="Abdali Parking" onPress={() => onPressPark(1)} color="#f0cd36" />
              </View>
            </View>
          </View>
        </View>
        :
        <ParkScreen onPressBack={() => onPressBackCallback()} title={park} />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  Row: {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  easy: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2c2061',
  },
  parking: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f0cd36',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
