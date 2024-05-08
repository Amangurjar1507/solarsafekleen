import {StyleSheet} from 'react-native';
import color from '../../theme/color';
import font from '../../theme/font';

export const styles = StyleSheet.create({
  container: {
    height: 65,
    backgroundColor: color.white,
    borderTopWidth: 0.9,
    borderColor: color.label,
    shadowColor: color.buttGray,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 5,
    shadowRadius: 16.0,
    elevation: 17,
  },
  rowView: {
    height: 65,
    backgroundColor: color.white,
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  image: {
    height: 22,
    width: 22,
  },
  imageView: {
    flex: 0,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 12.5,
    marginTop: 3,
    fontFamily: font.PoppinsRegular,
  },
  touchable: {
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchImage: {
    height: 22,
    width: 22,
  },
});
