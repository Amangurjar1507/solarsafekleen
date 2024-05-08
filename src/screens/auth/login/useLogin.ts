import {useCallback, useState} from 'react';
 import {useAuthNavigation} from '../../../hooks/useAppNavigation';

const useLogin = () => {
  const navigation = useAuthNavigation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const onLogin = useCallback(() => {
    navigation.navigate('HomeBottomTabs');
  }, [navigation]);

  const onClickSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  const onClickForgot = useCallback(() => {
    navigation.navigate('ForgotPassword');
  }, [navigation]);

  return {email, setEmail,password,loading, setPassword, onLogin, onClickSignUp, onClickForgot};
};

export default useLogin;
