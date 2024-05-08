import colors from '../../../theme/color';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  marginContainer: {
    marginHorizontal: 20,
  },
  container: {
    flexDirection: 'row',
    height: 55,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameStyle: {
    fontSize: 18,
     color: colors.white,
     textAlign:"center",
  },
  indicatorStyle: {
    marginRight: 10,
    alignItems:"center"
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
});
export default style;
