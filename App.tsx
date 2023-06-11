import * as React from 'react';

import InputScreen from './Screens/InputScreen';
import OutputScreen from './Screens/OutputScreen';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ImageBackground, StyleSheet} from 'react-native';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const headerOptions = {
  headerStyle: {
    backgroundColor: '#36485c',
  },
  headerTintColor: '#fff',
};

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <ImageBackground
      source={require('./assets/images/mountains.jpg')}
      style={styles.backgroundImage}>
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator>
          <Stack.Screen
            options={headerOptions}
            name="Clockwork"
            component={InputScreen}
          />
          <Stack.Screen
            options={headerOptions}
            name="Result"
            component={OutputScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});

export default App;
