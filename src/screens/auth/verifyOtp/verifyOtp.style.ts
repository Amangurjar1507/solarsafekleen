import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:color.primaryText
  },
  headingText: {
    marginTop: 50,
    fontSize: 24,
    lineHeight: 26,
    color: color.placeholderText,
    fontFamily: font.ArchivoBlackRegular,
  },
  formContainer: {
    marginTop: 15,
  },
  contentContainer: {
    flexGrow: 1,
  },
  btnStyle: {
    marginTop: 50,
    alignSelf: 'center',
    backgroundColor: color.butt,
    width: '100%',
  },
  mainViewModal: {
    flex: 1,
    backgroundColor: color.white,
    marginTop: 30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  row: {
    marginHorizontal: 21,
  },
  root: {
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
  codeFieldRoot: {
    marginTop: 20,
  },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 26,
    fontSize: 24,
    borderBottomWidth: 1.3,
    borderBottomColor: color.lightWhite,
    borderColor: color.black,
    textAlign: 'center',
    fontFamily: font.ArchivoBlackRegular,
    marginTop: 10,
    color: color.lightWhite,
   },
  focusCell: {
    width: 40,
    height: 40,
    lineHeight: 26,
    fontSize: 24,
    borderBottomWidth: 3,
    textAlign: 'center',
    borderColor: color.butt,
    fontFamily: font.ArchivoBlackRegular,
    color: color.black,
  },
  otpText: {
    marginTop: 16,
    fontSize: 18,
    lineHeight: 22,
    color: color.label,
    fontFamily: font.PoppinsRegular,
  },
  emailText: {
    marginTop: 16,
    fontSize: 16,
    lineHeight: 22,
    color: color.black,
    fontFamily: font.PoppinsRegular,
  },
  otpError:{
    fontSize: 13,
    lineHeight: 22,
    marginTop: 15,
    fontFamily: font.PoppinsMedium,
    color: color.red,
  }
});

export default styles;
