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
  dayText: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: font.PoppinsMedium,
  },
  text: {
    fontSize: 15,
    color: color.black,
    marginTop: 15,
    fontFamily: font.PoppinsMedium,
  },
  morringText: {
    fontSize: 15,
    color: color.black,
    marginTop: 15,
    fontFamily: font.PoppinsBold,
  },
  confirmation: {
    fontSize: 18,
    color: color.black,
    marginTop: 15,
    fontFamily: font.PoppinsBold,
  },
  name: {
    fontSize: 14,
    color: color.black,
    marginTop: 13,
    fontFamily: font.PoppinsBold,
  },
  add: {
    fontSize: 16,
    color: color.backGray,
    fontFamily: font.PoppinsMedium,
  },
  title: {
    color: color.backGray,
    fontSize: 14,
    fontFamily: font.PoppinsMedium,
  },
  prices: {
    fontSize: 17,
    color: color.green,
    lineHeight: 20,
    fontFamily: font.PoppinsSemiBold,
  },
  itemTitle: {
    color: color.backGray,
    fontSize: 14,
    fontFamily: font.PoppinsMedium,
  },
  mainProceed: {
    backgroundColor: color.white,
    paddingVertical: 20,
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  maiView: {
    backgroundColor: color.white,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.4,
    borderColor: color.label,
  },
  timeView: {
    height: 33,
    width: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainModal: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: color.transparent,
  },
  modalView: {
    backgroundColor: color.white,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    alignItems: 'center',
    paddingVertical: 12,
  },
  borderColorView: {
    borderRadius: 5,
    borderWidth: 2,
    height: 1,
    backgroundColor: color.label,
    width: 30,
    borderColor: color.label,
    marginTop: 2,
  },
  time: {
    color: color.black,
    fontSize: 14,
    fontFamily: font.PoppinsSemiBold,
  },
  buttView: {
    width: '85%',
    marginTop: 30,
  },
  containerStyle: {
    width: '100%',
    backgroundColor: color.butt,
  },
  containerStylecancel: {
    width: '100%', // Make button take full width of the container
    backgroundColor: color.label,
    marginTop: 15,
  },
  row: {
    flexDirection: 'row'
  },
  lableStyle: {color: color.black},
});

export default styles;
