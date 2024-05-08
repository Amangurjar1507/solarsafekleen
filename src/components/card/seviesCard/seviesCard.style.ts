import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 17,
    color: color.black,
    fontFamily: font.PoppinsRegular,
  },
  mainView: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: color.label,
    margin: 5,
  },
  img: {
    height: 82,
    width: 82,
    borderRadius: 10,
  },
});
export default styles;
