import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 78,
  },
  lableView: {
    color: color.label,
    fontSize: 15,
    fontFamily: font.PoppinsRegular,
   },
  rowView: {
    flexDirection: 'row',
  },
  lableStyle: {
    color: color.black,
    fontSize: 15,
    fontFamily: font.PoppinsMedium,
   },
  imageStyle: {
    height: 20,
    width: 20,
    resizeMode: 'cover',
  },
  imageView: {
    alignItems: 'flex-end',
    flex: 1,
  },
  img: {
    marginStart: 12,
    height: 23,
    width: 23,
  },
  textView: {
    marginLeft: 13,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    height: 18,
    width: 18,
  },
});
