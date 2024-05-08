import {StyleSheet} from 'react-native';
import color from '../../../../theme/color';
import font from '../../../../theme/font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  title: {
    color: color.black,
    marginTop: 16,
    fontSize: 18,
    marginHorizontal: 20,
    fontFamily: font.PoppinsSemiBold,
  },
  name: {
    color: color.backGray,
    marginTop: 20,
    fontSize: 15,
    marginHorizontal: 20,
    fontFamily: font.PoppinsMedium,
  },
  lableStyle: {
    color: color.black,
  },
});

export default styles;
