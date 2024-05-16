import {StyleSheet} from 'react-native';
import color from '../../../theme/color';

export const styles = StyleSheet.create({
  container: {
    maxHeight: 268,
    borderRadius: 10,
     marginBottom: 12,
  },
  collapsedView: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleView: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    lineHeight: 19,
    color: color.primaryText,
  },
  description: {
    marginTop: 4,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16,
    color: color.green,
  },
  iconView: {
    height: 19,
    width: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    borderTopWidth: 1,
    paddingHorizontal: 20,
    paddingBottom: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
