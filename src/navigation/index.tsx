 import { NavigationContainer } from '@react-navigation/native';
import { FC } from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootStack from './stacks/RootStack';

const Route: FC = () => {
  return (
    <NavigationContainer independent={true} onReady={() => SplashScreen.hide()}>
      <RootStack />
    </NavigationContainer>
  );
};

export default Route;
