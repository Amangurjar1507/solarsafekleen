import {useCallback, useState} from 'react';
import { useAuthNavigation } from '../../../hooks/useAppNavigation';
 
const useSignUp = () => {
  const navigation = useAuthNavigation();
  const [email, setEmail] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<any>({
    email: undefined,
    mobileNumberError: undefined,
    passwordError: undefined,
    confirmPasswordError: undefined,
  });

  //** Navigate to login screen */
  const onPressLogin = useCallback(() => {
    navigation.navigate('Login');
    setEmail('');
  }, [navigation]);

  //** Validate create account */

  return {
    email,
    setEmail,
    error,
    onPressLogin,
    mobileNumber,
    setMobileNumber,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    loading
  };
};

export default useSignUp;
