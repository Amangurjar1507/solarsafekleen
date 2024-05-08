import {useState} from 'react';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import validationMessage from '../../../validation/validationMessage';

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
  const [errorObject, setErrorObject] = useState<any>({
    otpError: undefined,
  });

  const validateVerify = () => {
     let isValid = true;
    if (!value) {
      isValid = false;
      errorObject.otpError = validationMessage.emptyOtp;
    } else if (value?.length != 6) {
      errorObject.otpError = validationMessage.invalidOtp;
    } else {
      errorObject.otpError = undefined;
    }
    setErrorObject({...errorObject});
    if (isValid) {
      navigation.navigate('Login');
      // loginApi();
    }
  };

  return {
    ref,
    validateVerify,
    props,
    getCellOnLayoutHandler,
    setOtpNumber,
    otpNumber,
    value,
    setValue,
    loading,
    errorObject,
  };
};

export default useForgotPassword;
