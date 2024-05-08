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
  },
  title: {
    color: color.black,
    marginTop: 16,
    fontSize: 18.3,
    textAlign: 'center',
    fontFamily: font.PoppinsRegular,
  },
  share: {
    color: color.black,
    marginTop: 30,
    fontSize: 19,
    textAlign: 'center',
    lineHeight: 22,
    fontFamily: font.ArchivoBlackRegular,
  },
  mainVieW: {
    alignItems: 'center',
    marginTop: 140,
    justifyContent: 'flex-end',
  },
  successfully: {
    height: 100,
    width: 100,
  },
  buttView:{
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  containerStyle:{
    width: '100%',
    backgroundColor: color.butt,
  }
});

export default styles;
