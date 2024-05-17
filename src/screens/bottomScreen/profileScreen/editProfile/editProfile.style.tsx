import {StyleSheet} from 'react-native';
import color from '../../../../theme/color';
import font from '../../../../theme/font';
import {getActionFromState} from '@react-navigation/native';

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
    backgroundColor: color.white,
    marginTop: 12,
  },
  keyboardView: {
    flex: 1,
  },
  modalView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: color.transparent,
  },
  mainModal: {
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 15,
  },
  borderWidth: {
    borderRadius: 5,
    borderWidth: 2,
    height: 1,
    width: 30,
    borderColor: color.label,
    marginTop: 2,
  },
  chooseText: {
    fontSize: 18,
    color: color.black,
    textAlign: 'center',
    fontFamily: font.PoppinsSemiBold,
  },
  galleryView: {
    height: 45,
    backgroundColor: color.white,
    borderColor: color.backGray,
    alignItems: 'center',
    marginHorizontal: 25,
    width: '100%',
    justifyContent: 'center',
    borderBottomEndRadius: 12,
    borderBottomStartRadius: 12,
  },
  camera: {
    height: 45,
    borderBottomWidth: 0.5,
    borderColor: color.lightBlue,
    alignItems: 'center',
    marginHorizontal: 20,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: color.white,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  saveContainerStyle: {
    width: '100%',
    backgroundColor: color.butt,
    marginTop: 12,
  },
});

export default styles;
