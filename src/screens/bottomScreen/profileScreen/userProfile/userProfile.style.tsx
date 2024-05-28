import {StyleSheet} from 'react-native';
import color from '../../../../theme/color';
import font from '../../../../theme/font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  mainRow: {
    marginHorizontal: 20,
  },
  cardView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    paddingVertical: 8,
  },
  title: {
    color: color.black,
    flex: 1,
    marginLeft: 18,
    fontSize: 17,
    fontFamily: font.PoppinsMedium,
  },
  profileText: {
    color: color.black,
    marginTop: 25,
    fontSize: 20,
    fontFamily: font.PoppinsMedium,
  },
  logOut: {
    fontSize: 20,
    color: color.black,
    textAlign: 'center',
    marginTop: 18,
    fontFamily: font.PoppinsBold,
  },
  text: {
    fontSize: 16,
    color: color.buttGray,
    textAlign: 'center',
    marginTop: 5,
    fontFamily: font.PoppinsBold,
  },
  mainModal: {
    backgroundColor: color.white,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    alignItems: 'center',
    paddingVertical: 12,
  },
  modalView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: color.transparent,
  },
  borderWidth: {
    borderRadius: 5,
    borderWidth: 2,
    height: 1,
    width: 30,
    borderColor: color.label,
    marginTop: 2,
  },
  containerStyle: {
    width: '100%',
    backgroundColor: color.butt,
  },
  containerCancel: {
    width: '100%', 
    backgroundColor: color.label,
    marginTop: 12,
  },
  buttView: {
    width: '82%',
    marginTop: 25,
  },
  nameTextStyle: {
    color: color.white,
  },
  name: {
    fontSize: 15,
    color: color.black,
    fontFamily: font.ArchivoBlackRegular,
    marginTop: 5,
  },
  gmailText: {
    fontSize: 15,
    color: color.black,
    fontFamily: font.PoppinsRegular,
    marginTop: 5,
  },
  nextImg: {
    height: 24,
    width: 24,
  },
  editcontainerStyle: {
    width: 200,
    borderColor: color.butt,
    borderWidth: 1,
    height: 38,
    marginTop: 15,
  },
  editTitle: {
    color: color.butt,
    fontSize: 16,
  },
  profieImg: {
    height: 80,
    width: 80,
    borderRadius: 20,
  },
  userView:{
    alignItems: 'center',
    marginTop: 80,
    justifyContent: 'flex-end',
    flex: 1,
  }
});

export default styles;
