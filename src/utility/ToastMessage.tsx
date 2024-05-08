import Snackbar from 'react-native-snackbar';
import font from '../theme/font';

export const ToastMessage = (text: string) => {
  return Snackbar.show({
    text: text,
    duration: 3000,
    backgroundColor: 'red',
    textColor: 'white',
    fontFamily: font.PoppinsRegular,
  });
};
