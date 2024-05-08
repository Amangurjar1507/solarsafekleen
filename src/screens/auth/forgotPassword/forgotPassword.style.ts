import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  contentContainer: {
    flexGrow: 1,
  },
  btnStyle: {
    marginTop: 50,
    alignSelf: 'center',
    backgroundColor: color.butt,
    width: '100%',
  },
  programDescription: {
    borderWidth: 0,
    backgroundColor: color.white,
    height: 200,
    alignItems: 'flex-start',
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
