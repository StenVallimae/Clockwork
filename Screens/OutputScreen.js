import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ResultScreen = ({route, navigation}) => {
  const {data} = route.params;

  const changeScreen = () => {
    navigation.navigate('Clockwork', {
      name: 'Clockwork',
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Öö: {data.nightTimeHours} tundi</Text>
      <Text style={styles.text}>Päev: {data.dayTimeHours} tundi</Text>
      <Button title="Tagasi" onPress={changeScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 30,
  },
});

export default ResultScreen;
