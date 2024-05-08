import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 13,
    borderBottomWidth: 0.8,
    borderBottomColor: color.label,
    alignItems: 'center',
  },
  title: {
    color: color.black,
    fontSize: 14,
    lineHeight: 14,
    fontFamily: font.PoppinsBold,
  },
  time: {
    color: color.label,
    fontSize: 13,
    lineHeight: 14,
    marginTop: 3,
    fontFamily: font.PoppinsMedium,
    marginLeft: 6,
  },
  moreText: {
    color: color.butt,
    fontSize: 14,
    marginTop: 3,
    fontFamily: font.PoppinsMedium,
  },
  prices: {
    color: color.black,
    right: 15,
    fontSize: 15,
    lineHeight: 22,
    fontFamily: font.PoppinsSemiBold,
  },
  column: {
    flexDirection: 'column',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  wallClock: {height: 12, width: 12},
  addView: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  addButt: {
    justifyContent: 'center',
    height: 27,
    width: 27,
    backgroundColor: color.black,
    alignItems: 'center',
    borderRadius: 5,
  },
  addText: {
    color: color.white,
    fontSize: 17.5,
    textAlign: 'center',
  },
});
export default styles;
