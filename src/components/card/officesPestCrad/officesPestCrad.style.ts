import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 18,
  },
  prices: {
    color: color.black,
    right: 15,
    fontSize: 15,
    lineHeight: 22,
    fontFamily: font.PoppinsSemiBold,
  },
  wallClock: {
    height: 12,
    width: 12,
  },
  time: {
    color: color.label,
    fontSize: 13,
    lineHeight: 14,
    marginTop: 3,
    fontFamily: font.PoppinsMedium,
    marginLeft: 6,
  },
  titeText: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  subText: {
    justifyContent: 'center',
    height: 28,
    width: 28,
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: color.black,
  },
  subTitle: {
    color: color.black,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: font.PoppinsMediumItalic,
  },
  office: {
    color: color.black,
    fontSize: 17,
    fontFamily: font.ArchivoBlackRegular,
  },
  cardView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'center',
  },
  officeText: {
    color: color.black,
    fontSize: 14,
    fontFamily: font.PoppinsSemiBold,
  },
  titmeView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default styles;
