import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  mainView: {
    borderWidth: 0.6,
    borderRadius: 10,
    borderColor: color.label,
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 0.7,
    borderBottomColor: color.label,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  rowView: {
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
  moreText: {
    color: color.backGray,
    fontSize: 12,
    fontFamily: font.PoppinsMedium,
  },
  titleText: {
    color: color.black,
    fontSize: 14,
    fontFamily: font.PoppinsBold,
  },
  column: {
    flexDirection: 'column',
    flex: 1,
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  codeText: {
    color: color.butt,
    fontSize: 17,
    fontFamily: font.PoppinsMedium,
  },
  buttonAccepted: {
    padding: 6,
    borderRadius: 8,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  textAccepted: {
    fontSize: 14,
    fontFamily: font.PoppinsSemiBold,
    alignSelf: 'center',
    lineHeight: 20,
  },
  columnView: {
      flexDirection: 'column',
  },
  price: {
    color: color.black,
    fontSize: 16,
    fontFamily: font.PoppinsSemiBold,
    alignSelf: 'center',
    lineHeight: 20,
  },
  userName: {
    flexDirection: 'row',
    padding: 11,
    marginHorizontal: 8.2,
    alignItems: 'center',
  },
  userView: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  starView: {
    flexDirection: 'row',
    marginTop: 2,
    alignItems: 'center',
  },
  stringImage: {
    height: 12,
    width: 12,
  },
  ratingText: {
    color: color.lightYellow,
    fontSize: 15,
    marginLeft: 4,
    fontFamily: font.PoppinsMedium,
    lineHeight: 22,
  },
  userProfileImg: {
    height: 30,
    width: 30,
    borderRadius: 10,
  },
  buttView: {
    flex: 1,
    justifyContent: 'center',
  },
  ratingTitle: {
    color: color.backGray,
    marginLeft: 7,
    fontSize: 13,
    fontFamily:font.PoppinsMedium,
    lineHeight:20
  },
});
export default styles;
