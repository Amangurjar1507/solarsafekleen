import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  mainRow: {
    marginHorizontal: 20,
  },
  cardView: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 0.7,
    borderBottomColor: color.label,
    alignItems: 'center',
  },
  boaderView: {
    borderRadius: 12,
    flex: 1,
    padding: 12,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: color.label,
  },
  textView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  codeText: {
    color: color.butt,
    fontSize: 17,
    fontFamily: font.PoppinsMedium,
  },
  buttAcc: {
    padding: 6,
    borderRadius: 8,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  accText: {
    fontSize: 14,
    fontFamily: font.PoppinsSemiBold,
    alignSelf: 'center',
    lineHeight: 20,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    color: color.black,
    fontSize: 14,
    fontFamily: font.PoppinsBold,
  },
  confirmation: {
    fontSize: 20,
    color: color.black,
    marginTop: 20,
    fontFamily: font.ArchivoBlackRegular,
  },
  name: {
    fontSize: 15,
    color: color.black,
    marginTop: 15,
    fontFamily: font.PoppinsMedium,
  },
  add: {
    fontSize: 15,
    color: color.label,
    fontFamily: font.PoppinsMedium,
  },
  loactionView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationImg: {
    height: 15,
    width: 15,
  },
  address: {
    color: color.backGray,
    fontSize: 14,
    fontFamily: font.PoppinsMedium,
    marginLeft: 2,
  },
  cardRed: {
    padding: 10,
    backgroundColor: color.redCrad,
    borderStyle: 'dotted',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 8,
  },
  canCellText: {
    color: color.black,
    fontSize: 14,
    fontFamily: font.PoppinsBold,
  },
  subTitle: {
    color: color.backGray,
    fontSize: 12,
    fontFamily: font.PoppinsRegular,
    marginTop: 2,
  },
  orderView: {
    marginTop: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: color.label,
    borderRadius: 10,
  },
  orderText: {
    color: color.black,
    fontSize: 17,
    fontFamily: font.PoppinsBold,
  },
  texRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subTotal: {
    color: color.label,
    fontSize: 15,
    fontFamily: font.PoppinsMedium,
  },
  prices: {
    color: color.black,
    fontSize: 16,
    fontFamily: font.PoppinsSemiBold,
  },
  totalText: {
    color: color.black,
    fontSize: 16,
    fontFamily: font.PoppinsSemiBold,
    marginTop: 10,
  },
  border: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: color.label,
  },
  totalSub: {
    color: color.black,
    fontSize: 16,
    fontFamily: font.PoppinsSemiBold,
    marginTop: 10,
  },
  containerStyle: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: color.butt,
    marginBottom: 20,
  },
  scrollViewstyle: {
    flexGrow: 1,
  },
  nameTextStyle: {
    color: color.butt,
  },
  lableStyle: {
    color: color.black
  },
});

export default styles;
