import {useCallback, useState} from 'react';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import validationMessage from '../../../validation/validationMessage';
import {checkEmail} from '../../../validation/stringValidation';
import axiosInstance from '../../../services/api';
import params from '../../../services/config/params';
import constant from '../../../services/config/constant';
import {Log} from '../../../utility/log';
import {useDispatch} from 'react-redux';
import {loginSuccess} from '../../../services/config/redux/userReducer/reducer';
import {ToastMessage} from '../../../utility/ToastMessage';

const useLogin = () => {
  const navigation = useAuthNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorObject, setErrorObject] = useState<any>({
    emailError: undefined,
    passwordError: undefined,
  });
  const onLogin = useCallback(() => {
    navigation.navigate('HomeBottomTabs');
  }, [navigation]);

  let data = {
    name: 'Ram',
  };

  const validateLogin = () => {
    let isValid = true;
    if (!email) {
      isValid = false;
      errorObject.emailError = validationMessage.emptyEmail;
    } else if (!checkEmail(email)) {
      isValid = false;
      errorObject.emailError = validationMessage.invalidEmail;
    } else {
      errorObject.emailError = undefined;
    }
    if (!password) {
      isValid = false;
      errorObject.passwordError = validationMessage.emptyPassword;
    } else {
      errorObject.passwordError = '';
    }
    setErrorObject({...errorObject});
    if (isValid) {
      setPassword(''), setEmail('');
      dispatch(loginSuccess(data));
      navigation.navigate('HomeBottomTabs');
      // loginApi();
    }
  };

  const onClickSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  const loginApi = (detail: any, type: string) => {
    let data = {
      [params.email]: email,
      [params.email]: password,
    };
    axiosInstance
      .post(constant.login, data)
      .then(response => {
        dispatch(loginSuccess(response.data.data));
        setPassword(''), setEmail('');
        navigation.reset({
          index: 0,
          routes: [{name: 'HomeBottomTabs'}],
        });
        ToastMessage('response.data.message');
        Log('Social Login Details Response::', response.data);
      })
      .catch((err: any) => {
        ToastMessage('err');
        // navigation.navigate('signup', {
        //   item: detail,
        //   type: 'social',
        // });
        // toast(err?.response.data.message);
        Log('Social Login Details Error::', err?.response);
      });
  };

  const onClickForgot = useCallback(() => {
    navigation.navigate('ForgotPassword');
  }, [navigation]);

  return {
    email,
    setEmail,
    password,
    loading,
    setPassword,
    onLogin,
    onClickSignUp,
    onClickForgot,
    validateLogin,
    errorObject,
    setErrorObject,
  };
};

export default useLogin;
