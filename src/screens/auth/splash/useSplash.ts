import {useCallback} from 'react';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import {ToastMessage} from '../../../utility/ToastMessage';

const useSplash = () => {
  const navigation = useAuthNavigation();

  //** Navigate to signup screen */
  const onClickSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  //** Navigate to login screen */
  const onClickLogin = useCallback(() => {
     navigation.navigate('Login');
  }, [navigation]);

  return {
    onClickSignUp,
    onClickLogin,
  };
};
export default useSplash;
