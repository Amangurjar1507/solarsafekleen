import {useCallback, useState} from 'react';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const useForgotPassword = () => {
  const navigation = useAuthNavigation();
  const [otpNumber, setOtpNumber] = useState<any>('');
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: 6});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const onClickSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  return {
    ref,
    onClickSignUp,
    props,
    getCellOnLayoutHandler,
    setOtpNumber,
    otpNumber,
    value,
    setValue,
    loading,
  };
};

export default useForgotPassword;
