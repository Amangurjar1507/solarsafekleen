import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
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
  btnContainer: {
    flex: 1,
    marginTop: 26,
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
    fontWeight: '400',
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
    marginTop: 20,
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
