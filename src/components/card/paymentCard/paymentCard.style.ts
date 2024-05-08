import {StyleSheet} from 'react-native';
import color from '../../../theme/color';
import font from '../../../theme/font';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 13,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 12,
  },
  firstView: {
    flexDirection: 'row',
    alignItems:"center"
  },
  paymentIcon: {
    height: 23,
    width: 23,
    resizeMode: 'contain',
  },
  cardtype: {
    color: color.black,
    marginLeft: 20,
    fontSize: 14,
    fontFamily: font.PoppinsBold,
  },
  horiZontalView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
export default styles;
