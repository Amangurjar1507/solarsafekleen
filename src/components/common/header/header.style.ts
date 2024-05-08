import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 20,
    marginHorizontal: 20,
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightButtonText: {
    paddingHorizontal: 5,
    height: 25,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19,
    marginLeft: 5,
    textTransform: 'capitalize',
  },
  lableView: {
    height: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  lableStyle: {
    fontSize: 18,
    color: color.white,
    lineHeight: 20,
    fontFamily: font.ArchivoBlackRegular,
  },
 
  headingStyle: {
    marginTop: 15,
    fontWeight: '600',
    fontSize: 28,
    lineHeight: 32.84,
    color: color.primaryText,
  },
  headingDesStyle: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16.34,
    color: color.primaryText,
  },
});
