import {StyleSheet} from 'react-native';
import color from '../../../../theme/color';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  mapStyle: {
    height: 300,
  },
  bottomview: {
    flex: 0.5,
    paddingHorizontal: 17,
  },
  backView: {
    position: 'absolute',
    top: 55,
    marginHorizontal: 20,
  },
  borderView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  border: {
    borderRadius: 5,
    borderWidth: 2,
    height: 1,
    backgroundColor: color.label,
    width: 30,
    borderColor: color.label,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  mainView: {
    justifyContent: 'flex-end',
    flex: 1,
    backgroundColor: color.white,
  },
  tabRow: {
    flex: 1,
    marginHorizontal: 20,
  },
  buttView: {marginHorizontal: 20},
  buttStyle: {
    backgroundColor: color.butt,
    width: '100%',
    marginBottom: 10,
  },
  tabText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: color.black,
    textAlign: 'center',
  },
  buttRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    backgroundColor: color.buttBlue,
    borderRadius: 9,
    marginTop: 13,
    marginHorizontal: 20,
  },
  topTab: {
    paddingVertical: 10,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2.5,
  },
});
