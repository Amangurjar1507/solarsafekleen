import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  mainView: {
    borderWidth: 0.6,
    borderRadius: 10,
    borderColor: color.label,
    marginTop: 8,
  },
  codeText: {
    color: color.butt,
    fontSize: 17,
    fontFamily: font.PoppinsMedium,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 13,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  textView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  type: {
    color: color.black,
    fontSize: 14,
    fontFamily: font.PoppinsBold,
  },
  date: {
    color: color.backGray,
    fontSize: 12,
    fontFamily: font.PoppinsMedium,
  },
  prices: {
    color: color.black,
    fontSize: 16,
    fontFamily: font.PoppinsSemiBold,
    alignSelf: 'center',
    lineHeight: 20,
  },
  column: {
    flexDirection: 'column',
    flex: 1,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  titleText: {
    color: color.black,
    fontSize: 14,
    fontFamily: font.PoppinsBold,
  },
  buttSub: {
    backgroundColor: '#e1f2e6',
    padding: 6,
    borderRadius: 8,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  subText: {
    color: '#61BB78',
    fontSize: 14,
    fontFamily: font.PoppinsSemiBold,
    alignSelf: 'center',
    lineHeight: 20,
  },
  row: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttView: {
    flex: 1,
    justifyContent: 'center',
  },
  canCleView: {
    alignItems: 'center',
    flex: 1,
    marginTop: 2,
    marginHorizontal: 20,
  },
  nameTextStyle:{
    color: color.red,
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  },
  containerStyle:{ 
    height: 38,
    borderColor:color.red,
    borderWidth: 1,
    marginBottom: 12,
    width:'100%'
  }
});
export default styles;
