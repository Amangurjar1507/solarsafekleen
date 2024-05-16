import {StyleSheet} from 'react-native';
import color from '../../../theme/color';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 17,
    width: '100%',
  },
  searchView: {
    height: 50,
    flexDirection: 'row',
    borderRadius: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  searchInputStyle: {
    flex: 1,
    fontSize: 13,
    lineHeight: 17,
    fontWeight: '400',
    color: 'black',
  },
  filterView: {
    height: 42,
    width: 42,
    backgroundColor: color.primaryText,
    marginLeft: 12,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  folderBtnView: {
    height: 42,
    width: 42,
    marginLeft: 12,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgSearchView: {
    marginRight: 10,
  },
  seachImg: {
    height: 22,
    width: 22,
  },
});

export default styles;
