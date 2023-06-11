import {Alert} from 'react-native';

export const validateInput = (startTime, endTime) => {
  if (startTime === '' || endTime === '') {
    Alert.alert('Viga', 'Palun sisestage algus- ja lõppkellaaeg.');
    return false;
  }

  const timeValidationRegex = /^([01][0-9]|2[0-3]):[0-5][0-9]$/;

  if (
    !startTime.match(timeValidationRegex) ||
    !endTime.match(timeValidationRegex)
  ) {
    console.log(startTime, endTime);
    Alert.alert(
      'Viga',
      'Kellaaeg peab olema vormingus HH:MM (näiteks 10:30 või 22:15).',
    );
    return false;
  }

  const startMinutes = parseInt(startTime.split(':')[1], 10);
  const endMinutes = parseInt(endTime.split(':')[1], 10);

  if (startMinutes % 15 !== 0 || endMinutes % 15 !== 0) {
    Alert.alert(
      'Viga',
      'Kellaaeg peab olema 15-minutilise intervalliga, näiteks 11:15 või 22:45.',
    );
    return false;
  }
  return true;
};
