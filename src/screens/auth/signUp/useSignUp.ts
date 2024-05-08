import {useCallback, useState} from 'react';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import {
  checkEmail,
  checkMobileNumber,
} from '../../../validation/stringValidation';
import validationMessage from '../../../validation/validationMessage';
import axiosInstance from '../../../services/api';
import params from '../../../services/config/params';
import constant from '../../../services/config/constant';
import {ToastMessage} from '../../../utility/ToastMessage';
import {Log} from '../../../utility/log';

const useSignUp = () => {
  const navigation = useAuthNavigation();
  const [email, setEmail] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorObject, setErrorObject] = useState<any>({
    emailError: undefined,
    mobileNumberError: undefined,
    passwordError: undefined,
  });

  const validateSignup = () => {
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
    if (!password) {
      isValidate = false;
      errorObject.passwordError = validationMessage.emptyPassword;
    } else {
      errorObject.passwordError = '';
    }
    if (!mobileNumber) {
      isValidate = false;
      errorObject.mobileNumberError = validationMessage.emptyMobile;
    } else if (!checkMobileNumber(mobileNumber)) {
      isValidate = false;
      errorObject.mobileNumberError = validationMessage.invalidMobile;
    } else {
      errorObject.mobileNumberError = '';
    }
    setErrorObject({...errorObject});
    if (isValidate) {
      onPressLogin(); // loginApiCall();
    }
  };

  const onSignUpApi = (detail: any, type: string) => {
    let data = {
      [params.email]: email,
      [params.email]: password,
      [params.email]: mobileNumber,
    };
    axiosInstance
      .post(constant.signUp, data)
      .then(response => {
        setPassword(''), setEmail('');
        // navigation.reset({
        //   index: 0,
        //   routes: [{name: 'HomeBottomTabs'}],
        // });
        // ToastMessage({message: data?.message});
        Log('Social Login Details Response::', response.data);
      })
      .catch((err: any) => {
        // navigation.navigate('signup', {
        //   item: detail,
        //   type: 'social',
        // });
        // toast(err?.response.data.message);
        Log('Social Login Details Error::', err?.response);
      });
  };

  //** Navigate to login screen */
  const onPressLogin = useCallback(() => {
    navigation.navigate('Login');
    setEmail('');
  }, [navigation]);

  //** Validate create account */

  return {
    email,
    setEmail,
    errorObject,
    onPressLogin,
    mobileNumber,
    setMobileNumber,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    validateSignup,
  };
};

export default useSignUp;
