import {StyleSheet} from 'react-native';
import color from '../../theme/color';
import font from '../../theme/font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  mainRow: {
    marginHorizontal: 20,
  },
  flatList: {
    marginTop: 8,
  },
  lableStyle: {
    color: color.black,
  },
  cardView: {
    backgroundColor: color.white,
    paddingVertical: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.8,
    borderColor: color.label,
  },
  rowView: {
    backgroundColor: color.white,
    paddingVertical: 18,
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  textView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  prices: {
    fontSize: 19,
    color: color.green,
    lineHeight: 20,
    fontFamily: font.PoppinsSemiBold,
  },
  item: {
    color: color.backGray,
    fontSize: 16,
    fontFamily: font.PoppinsMedium,
  },
  titleText: {
    color: color.backGray,
    fontSize: 14,
    fontFamily: font.PoppinsMedium,
  },
  containerStyle: {
    width: '90%',
    backgroundColor: color.butt,
  },
});

export default styles;
