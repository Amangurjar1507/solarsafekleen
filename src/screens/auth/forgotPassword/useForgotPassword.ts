import {useCallback, useState} from 'react';
import {UserForgotProps} from './ForgotPassword';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';

const useForgotPassword = () => {
  const navigation = useAuthNavigation();
  const [email, setEmail] = useState<UserForgotProps>();
  const [loading, setLoading] = useState<boolean>();

  const onClickVerify = useCallback(() => {
    navigation.navigate('VerifyOtp');
  }, [navigation]);

  return {onClickVerify, email, setEmail, loading, setLoading};
};

export default useForgotPassword;
