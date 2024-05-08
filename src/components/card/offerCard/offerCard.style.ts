import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: width,
    marginTop: 12,
    height: 397,
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: 'green',
  },
  itemContainer: {
    justifyContent: 'center',
    //  marginHorizontal: 10,
     margin:3
    },
});
export default styles;
