import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  container: {
    height:"100%",
    width:"100%"
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
  inputContainer: {
    marginBottom: 10,
  },
  forgotPassButton: {
    alignItems: 'center',
    marginTop: 26,
  },
  forgotPasswordLabel: {
    fontSize: 16,
    lineHeight: 22,
    color: color.text,
    textAlign: 'center',
    fontFamily: font.PoppinsRegular,
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  contentContainer: {
    flexGrow: 1,
  },
  btnStyle: {
    marginTop: 40,
    alignSelf: 'center',
    backgroundColor: color.butt,
    width: '100%',
  },
  dontIfDont: {
    fontSize: 16,
    fontFamily: font.PoppinsRegular,
    lineHeight: 22,
    textAlign: 'center',
    color: color.butt,
  },
  programDescription: {
    borderWidth: 0,
    backgroundColor: color.white,
    height: 200,
    alignItems: 'flex-start',
  },
  homeImageView: {
    marginTop: 45,
    marginHorizontal: 20,
    justifyContent: 'flex-end',
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
});

export default styles;