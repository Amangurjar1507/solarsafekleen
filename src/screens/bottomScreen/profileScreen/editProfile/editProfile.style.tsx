import {StyleSheet} from 'react-native';
import color from '../../../../theme/color';
import font from '../../../../theme/font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  mainRow: {
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  hederView: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  closeText: {
    color: color.black,
    fontSize: 18,
    fontFamily: font.PoppinsMedium,
  },
  edit: {
    color: color.black,
    fontSize: 18,
    fontFamily: font.PoppinsBold,
  },
  save: {
    color: color.butt,
    fontSize: 18,
    fontFamily: font.PoppinsMedium,
  },
  profileText: {
    color: color.black,
    marginTop: 25,
    fontSize: 18,
  },
  profileView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  userImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
  },
  camerView: {
    bottom: 22,
  },
  cameraStyle: {
    height: 30,
    width: 30,
  },
  buttView: {
    marginBottom: 12,
    marginHorizontal: 20,
  },
  containerStyle: {
    width: '100%',
    backgroundColor: color.butt,
    marginTop: 12,
  },
  keyboardView: {
    flex: 1,
  },
});

export default styles;
