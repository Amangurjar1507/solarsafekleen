import {StyleSheet} from 'react-native';
import font from '../../../theme/font';
import color from '../../../theme/color';

const styles = StyleSheet.create({
  topictxt: {
    color: color.black,
    fontSize: 17,
    fontFamily: font.PoppinsSemiBold,
  },
  addresstxt: {
    color: color.label,
    fontSize: 15,
    fontFamily: font.PoppinsMedium,
  },
  mainCard: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: color.label,
  },
});
export default styles;
