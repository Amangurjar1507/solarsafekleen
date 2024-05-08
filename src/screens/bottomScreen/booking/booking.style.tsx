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
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    backgroundColor: '#F1F1F1',
    borderRadius: 9,
    marginTop: 20,
  },
  tab: {
    paddingVertical: 11,
    paddingHorizontal: 15,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2.5,
  },
  tabText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: color.black,
    textAlign: 'center',
  },
  scrollViewStyle: {
    flexGrow: 1,
  },
});

export default styles;
