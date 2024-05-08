import {StyleSheet} from 'react-native';
import color from '../../../../theme/color';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
  },
  sessionRowViewStyle: {
    width: '100%',
  },
  decTextStyle: {
    fontSize: 14,
    color: color.primaryText,
    fontWeight: '300',
  },
  contentView: {
    flex: 1,
    paddingBottom: 5,
    marginLeft: 12,
  },
  flatListSessionStyle: {
    marginTop: 16,
  },
  collapsibleCardContainerStyle: {
    borderRadius: 5,
    borderBottomWidth: 0.8,
    borderColor: color.backGray,
  },
  CollapsibleContentStyle: {
    paddingHorizontal: 0,
    borderTopWidth: 0,
  },
  textCollapsibleStyle: {
    paddingHorizontal: 10,
  },
  typeStyleCard: {
    marginTop: 38,
  },
  rowView: {
    marginHorizontal: 20
  },
  lableStyle:{
    color:color.black
  }
});

export default styles;
