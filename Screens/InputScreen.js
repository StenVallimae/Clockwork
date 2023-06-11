import React, {useState} from 'react';
import {StyleSheet, Image, View, Text, TextInput, Button} from 'react-native';
import {validateInput} from '../helpers/validate';
import {handleTimeCalculation} from '../helpers/handleTimeCalculation';

const InputScreen = ({navigation}) => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [isStartTimeFocused, setIsStartTimeFocused] = useState(false);
  const [isEndTimeFocused, setIsEndTimeFocused] = useState(false);

  const focusStartTimeInput = () => {
    setIsStartTimeFocused(true);
  };
  const focusEndTimeInput = () => {
    setIsEndTimeFocused(true);
  };

  const handleBlur = () => {
    setIsEndTimeFocused(false);
    setIsStartTimeFocused(false);
  };

  let result;

  const handleCalculation = () => {
    if (validateInput(startTime, endTime)) {
      result = handleTimeCalculation(startTime, endTime);
      changeScreen();
      setStartTime('');
      setEndTime('');
    }
  };

  const changeScreen = () => {
    navigation.navigate('Result', {
      data: {
        dayTimeHours: result.day,
        nightTimeHours: result.night,
      },
      name: 'Result',
    });
  };

  return (
    <View style={styles.inputScreenContainer}>
      <Text style={styles.appTitle}>
        Clockwork
        <Image
          style={styles.titleImage}
          source={require('../assets/images/orange.png')}
        />
      </Text>

      <Text style={styles.text}>Sisesta algus- ja lõppkellaaeg:</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={[styles.textInput, isStartTimeFocused && styles.inputFocused]}
          placeholder="Näiteks: 16:45"
          value={startTime}
          onChangeText={text => setStartTime(text)}
          onFocus={focusStartTimeInput}
          onBlur={handleBlur}
          placeholderTextColor="#ffffff5f"
        />
        <TextInput
          style={[styles.textInput, isEndTimeFocused && styles.inputFocused]}
          placeholder="Näiteks: 00:30"
          value={endTime}
          onChangeText={text => setEndTime(text)}
          onFocus={focusEndTimeInput}
          onBlur={handleBlur}
          placeholderTextColor="#ffffff5f"
        />
      </View>
      <View style={styles.button}>
        <Button title="Arvuta" onPress={handleCalculation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    fontSize: 42,
    fontWeight: 700,
    marginBottom: 20,
    color: '#FFFFFF',
  },
  titleImage: {
    width: 52,
    height: 52,
  },
  text: {
    fontSize: 24,
    fontWeight: 400,
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 20,
    marginBottom: 30,
  },

  textInput: {
    color: '#FFFFFF',
    width: 150,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  inputFocused: {
    backgroundColor: '#f6f6f650',
  },
  button: {
    width: 150,
  },
});

export default InputScreen;
