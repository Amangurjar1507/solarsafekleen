import {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../../screens/auth/splash/Splash';
import Login from '../../screens/auth/login/Login';
import ForgotPassword from '../../screens/auth/forgotPassword/ForgotPassword';
import VerifyOtp from '../../screens/auth/verifyOtp/VerifyOtp';
import HomeBottomTabs from '../bottomTabs/HomeBottomTabs';
import CleaningControl from '../../screens/cleaningControl/CleaningControl';
import CleaningProceed from '../../screens/cleaningProceed/CleaningProceed';
import EditProfile from '../../screens/bottomScreen/profileScreen/editProfile/EditProfile';
import ShareFriend from '../../screens/bottomScreen/profileScreen/shareFriend/ShareFriend';
import FaQ from '../../screens/bottomScreen/profileScreen/faQ/FaQ';
import CleaningApartment from '../../screens/cleaningApartment/CleaningApartment';
import SignUp from '../../screens/auth/signUp/SignUp';
import PrivacyPolicy from '../../screens/bottomScreen/profileScreen/privacyPolicy/PrivacyPolicy';
import Ongoing from '../../screens/bottomScreen/onGoing/Ongoing';
import FeedBack from '../../screens/bottomScreen/feedBack/FeedBack';
import Maps from '../../screens/bottomScreen/mapScreen/map/Maps';
import Successfully from '../../screens/bottomScreen/profileScreen/successfully/Successfully';
import PaymentMethod from '../../screens/bottomScreen/paymentMethod/PaymentMethod';

export type RootStackParams = {
  Splash: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  VerifyOtp: undefined;
  HomeBottomTabs: undefined;
  CleaningControl: undefined;
  CleaningProceed: undefined;
  EditProfile: undefined;
  ShareFriend: undefined;
  FaQ: undefined;
  PrivacyPolicy: undefined;
  CleaningApartment: undefined;
  Ongoing: undefined;
  FeedBack: undefined;
  MapScreen: undefined;
  Maps: undefined;
  Successfully: undefined;
  PaymentMethod: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const RootStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Splash'}
      screenOptions={{
        headerShown: false,
      }}>
      {/* Auth screen */}
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
      {/* HomeBottomTabs screen */}
      <Stack.Screen name="HomeBottomTabs" component={HomeBottomTabs} />
      <Stack.Screen name="CleaningProceed" component={CleaningProceed} />
      <Stack.Screen name="CleaningControl" component={CleaningControl} />
      <Stack.Screen name="ShareFriend" component={ShareFriend} />
      <Stack.Screen name="FaQ" component={FaQ} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Ongoing" component={Ongoing} />
      <Stack.Screen name="CleaningApartment" component={CleaningApartment} />
      <Stack.Screen name="FeedBack" component={FeedBack} />
      <Stack.Screen name="Maps" component={Maps} />
      <Stack.Screen name="Successfully" component={Successfully} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
    </Stack.Navigator>
  );
};

export default RootStack;
