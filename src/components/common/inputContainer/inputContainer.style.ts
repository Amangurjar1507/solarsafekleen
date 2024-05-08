import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0,
    marginTop: 18,
  },
  lableIconView: {
    paddingRight: 6.4,
  },
  inputContainer: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 11,
    borderWidth: 1,
    borderRadius: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 17,
    color: color.placeholderText,
    lineHeight: 26,
    fontFamily: font.PoppinsSemiBold,
    paddingStart: 12,
  },
  errorLabel: {
    fontSize: 13,
    lineHeight: 22,
    marginTop: 8,
    fontFamily: font.PoppinsMedium,
    color:color.red
  },
  labelSecond: {
    color: color.label,
    fontSize: 16,
    lineHeight: 22,
    fontFamily: font.PoppinsMedium,
  },
  eyes: {
    height: 24,
    width: 24,
    right: 12,
  },
});
export default styles;
