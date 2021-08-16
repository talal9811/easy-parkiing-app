import React, { useEffect, useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import database from '@react-native-firebase/database';
export default function ParkScreen(props) {
  const [isParked, setIsParked] = useState(true);
  const { title, onPressBack } = props;
  useEffect(() => {
    // database()
    //   .ref('/Meu/1')
    //   .on('value', snapshot => {

    //     console.log('User data: ', snapshot.val());
    //   });
    const onValueChange = database()
      .ref('/Meu/1')
      .on('value', snapshot => {
        setIsParked(snapshot.val().isParked === "true" ? true : false)
        console.log(snapshot.val().isParked === "true" ? true : false);
      });

    // Stop listening for updates when no longer required
    return () => database().ref('/Meu/1').off('value', onValueChange);

  }, []);

  return (
    <>
      <View style={styles.Container}>

        <Text style={{ fontWeight: "900", fontSize: 40, paddingBottom: 40, paddingTop: 20 }}>{title == 2 ? "MEU Parking" : "Abdali Parking"}</Text>
        <View style={styles.Row}>
          <View style={[styles.box, { backgroundColor: !isParked && title == 2 ? "#66f25a" : "#ff0000" }]}>
            <Text style={styles.parknumber}>1</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.parknumber}>2</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.parknumber}>3</Text>
          </View>
        </View>
        <View style={styles.Row}>
          <View style={[styles.box]}>
            <Text style={styles.parknumber}>4</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.parknumber}>5</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.parknumber}>6</Text>
          </View>
        </View>
        <View style={styles.Row}>
          <View style={[styles.box]}>
            <Text style={styles.parknumber}>7</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.parknumber}>8</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.parknumber}>9</Text>
          </View>
        </View>
        <View style={{ width: 300, paddingTop: 50 }}>
          <Button title="back" onPress={() => onPressBack()} />
        </View>
      </View>
    </>
  )

}
const styles = StyleSheet.create({
  Container: {
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 2,
    backgroundColor: "#66f25a",
    borderColor: "#f0cd36",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

  },
  title: {
    fontSize: 40,
    fontWeight: "900"
  },
  parknumber: {
    fontSize: 30,
    fontWeight: "900",
    color: "#fff"
  }

});
