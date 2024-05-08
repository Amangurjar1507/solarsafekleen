import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 0.8,
    alignItems: 'center',
    borderColor: color.label,
  },
  img: {
    height: 38,
    width: 42,
    borderRadius: 10,
  },
  textView: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    color: color.black,
    fontSize: 14,
    fontFamily: font.PoppinsSemiBold,
  },
  servies: {
    color: color.backGray,
    fontSize: 13,
    fontFamily: font.PoppinsRegular,
  },
  nextImg: {
    height: 24,
    width: 24,
    resizeMode: 'cover',
  },
  backView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
export default styles;
