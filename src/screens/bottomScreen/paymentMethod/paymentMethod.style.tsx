import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  modalView: {
    flex: 1,
    justifyContent: 'flex-end',
    borderWidth: 1,
    marginHorizontal: 20,
    borderColor: color.label,
    borderRadius: 10,
    marginBottom: 20,
  },
  orderView: {
    marginTop: 8,
    paddingVertical: 8,
    flex: 1.9,
    marginHorizontal: 20,
  },
  orderText: {
    color: color.black,
    fontSize: 16,
    fontFamily: font.PoppinsBold,
  },
  texRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
  },
  subTotal: {
    color: color.label,
    fontSize: 15,
    fontFamily: font.PoppinsMedium,
  },
  prices: {
    color: color.black,
    fontSize: 15,
    fontFamily: font.PoppinsSemiBold,
  },
  totalText: {
    color: color.black,
    fontSize: 16,
    fontFamily: font.PoppinsSemiBold,
    marginTop: 8,
  },
  border: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.6,
    borderColor: color.label,
    marginTop: 5,
  },
  totalSub: {
    color: color.black,
    fontSize: 16,
    fontFamily: font.PoppinsSemiBold,
    marginTop: 8,
  },
  containerStyle: {
    backgroundColor: color.butt,
    marginTop: 12,
  },
  mainView: {
    borderWidth: 0.6,
    borderRadius: 10,
    borderColor: color.label,
    flex: 1,
  },
  flatList: {
    marginTop: 5,
  },
  rowView: {
    marginHorizontal: 20,
    flex: 2.6,
  },
  continueView: {
    flex: 1,
  },
  lableStyle: {
    color: color.black,
  },
});
