import { StyleSheet} from 'react-native';
import color from '../../../theme/color';

 
const styles = StyleSheet.create({

  itemContainer: {
    justifyContent: 'center',
      margin:3
    },
    img:{
      height: 150,
      width: 380,
      borderRadius: 18,
      borderWidth: 1,
      borderColor: color.label,
    },
    imgView:{
      marginVertical: 8
    }
});
export default styles;
