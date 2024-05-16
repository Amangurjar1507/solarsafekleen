  import {StyleSheet} from 'react-native';
  import color from '../../../theme/color';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.white,
    },
    mainRow: {
      marginHorizontal: 20,
    },
    dayText: {
      fontSize: 15,
      textAlign: 'center',
    },
    text: {
      fontSize: 15,
      color: color.black,
    },
    borderView:{
      borderRadius: 5,
      height: 10,
      backgroundColor: color.backGray,
      width: '100%',
      borderColor: 'grey',
      marginTop: 2,
    }
  });

  export default styles;
