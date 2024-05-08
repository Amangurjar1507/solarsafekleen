import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: 'center',
    margin: 4,
    flex: 1,
    marginTop: 10,
  },
  title: {
    color: color.black,
    fontSize: 17,
    marginTop: 3.9,
    marginLeft: 2,
    fontFamily: font.PoppinsMedium,
  },
  serViesText: {
    color: color.label,
    fontSize: 14,
  },
  start: {
    color: color.label,
    fontSize: 14,
    fontFamily: font.PoppinsRegular,
    marginTop: 2,
  },
  perices: {
    color: color.green,
    fontSize: 14,
    fontFamily: font.PoppinsRegular,
    marginTop: 2,
  },
  row: {
    flexDirection: 'row',
  },
  img: {
    height: 110,
    width: 180,
    borderWidth: 1,
    borderRadius: 10,
  },
});
export default styles;
