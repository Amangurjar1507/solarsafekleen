import {useCallback, useState} from 'react';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import validationMessage from '../../../validation/validationMessage';
import {checkEmail} from '../../../validation/stringValidation';

const useForgotPassword = () => {
  const navigation = useAuthNavigation();
  const [email, setEmail] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorObject, setErrorObject] = useState<any>({
    emailError: undefined,
  });

  const validateForgot = () => {
    let isValidate = true;
    if (!email) {
      isValidate = false;
      errorObject.emailError = validationMessage.emptyEmail;
    } else if (!checkEmail(email)) {
      isValidate = false;
      errorObject.emailError = validationMessage.invalidEmail;
    } else {
      errorObject.emailError = undefined;
    }
    setErrorObject({...errorObject});
    if (isValidate) {
      onClickVerify();
    }
  };

  const onClickVerify = useCallback(() => {
    navigation.navigate('VerifyOtp');
  }, [navigation]);

  return {
    email,
    errorObject,
    setEmail,
    loading,
    setLoading,
    validateForgot,
  };
};

export default useForgotPassword;
