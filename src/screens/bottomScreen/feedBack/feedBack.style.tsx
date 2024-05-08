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
    marginTop: 25,
    backgroundColor: color.butt,
    marginBottom: 20,
  },
  mainView: {
    borderWidth: 0.6,
    borderRadius: 10,
    borderColor: color.label,
    flex: 1,
  },
  viewCard: {
    flexDirection: 'row',
    padding: 12,
    marginHorizontal: 8.2,
    alignItems: 'center',
  },
  texView: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    color: color.black,
    fontSize: 14,
    fontFamily: font.PoppinsBold,
  },
  startView: {
    flexDirection: 'row',
    marginTop: 2,
    alignItems: 'center',
  },
  startImg: {
    height: 12,
    width: 12,
  },
  rating: {
    color: color.lightYellow,
    fontSize: 15,
    marginLeft: 4,
    fontFamily: font.PoppinsMedium,
    lineHeight: 22,
  },
  viewRatings: {
    color: color.backGray,
    marginLeft: 7,
    fontSize: 13,
    fontFamily: font.PoppinsMedium,
    lineHeight: 20,
  },
  userProfile: {
    height: 30,
    width: 30,
    borderRadius: 10,
  },
  addressView: {
    borderTopWidth: 0.6,
    justifyContent: 'center',
    marginHorizontal: 8.2,
    borderColor: color.label,
    padding:8
  },
  addText: {
    color: color.backGray,
    marginLeft: 7,
    fontSize: 14,
    fontFamily: font.PoppinsMedium,
    marginTop: 8,
  },
  satrView: {
    borderWidth: 0.6,
    borderRadius: 10,
    borderColor: color.label,
    marginTop: 10,
    flex: 1,
  },
  startCard: {
    flexDirection: 'row',
    padding: 11,
    marginHorizontal: 8.2,
    alignItems: 'center',
  },
  startRow: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  yourStaring: {
    flexDirection: 'row',
    marginTop: 2,
    alignItems: 'center',
  },
  ratingView: {
    color: color.backGray,
    fontSize: 15,
    marginLeft: 15,
    fontFamily: font.PoppinsMedium,
    lineHeight: 22,
    textAlign: 'center',
  },
});

export default styles;
