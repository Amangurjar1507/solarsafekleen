import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  servicesText: {
    fontSize: 30,
    fontFamily: font.ArchivoBlackRegular,
    lineHeight: 36,
    marginTop: 12,
    color: color.white,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: 20,
  },
  contentContainer: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'space-around',
    marginBottom: 25,
  },
  containerStyle: {
    backgroundColor: color.buttGray,
    width: 158,
  },
  loginContainerStyle: {
    backgroundColor: color.butt,
    width: 158,
  },
  textView: {
    marginTop: 10,
  },
});

export default styles;
