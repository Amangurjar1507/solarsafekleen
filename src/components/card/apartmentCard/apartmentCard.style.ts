import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 13,
    borderBottomWidth: 0.9,
    borderBottomColor: color.label,
    alignItems: 'center',
  },
  title: {
    color: color.black,
    fontSize: 18,
    fontFamily: font.PoppinsMedium,
  },
  time: {
    color: color.black,
    fontSize: 13,
    lineHeight: 14,
    marginTop: 4,
    fontFamily: font.PoppinsMedium,
  },
  prices: {
    color: color.green,
    right: 15,
    fontSize: 18,
    fontFamily: font.PoppinsBold,
  },
  column: {
    flexDirection: 'column',
  },
  rowView: {
    flexDirection: 'row',
  },
  pricesView:{
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  }
});
export default styles;
