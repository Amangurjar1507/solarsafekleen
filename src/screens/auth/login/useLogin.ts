import {useCallback, useState} from 'react';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import validationMessage from '../../../validation/validationMessage';
import {checkEmail} from '../../../validation/stringValidation';
import axiosInstance from '../../../services/api';
import constant from '../../../services/config/constant';
import {useDispatch} from 'react-redux';
import {loginSuccess} from '../../../services/config/redux/userReducer/reducer';
import {ToastMessage} from '../../../utility/ToastMessage';
import color from '../../../theme/color';
import params from '../../../services/config/params';

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
  //** Navigate to HomeBottomTabs screen */
  const onLogin = useCallback(() => {
    navigation.navigate('HomeBottomTabs');
  }, [navigation]);

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
    setErrorObject({...errorObject}); // Update errorObject with the new error messages
    if (isValid) {
      navigation.reset({
        index: 0,
        routes: [{name: 'HomeBottomTabs'}],
      });
      // uerLoginApi(); // Call the API only if all validations pass
    }
  };

  const uerLoginApi = () => {
    setLoading(true);
    let data = {
      [params.email]: email,
      [params.password]: password,
    };
    axiosInstance
      .post(constant.login, data)
      .then(response => {
        setLoading(false);
        dispatch(loginSuccess(response));
        ToastMessage(response?.data?.message, color.green);
        setPassword(''), setEmail('');
        navigation.reset({
          index: 0,
          routes: [{name: 'HomeBottomTabs'}],
        });
      })
      .catch((err: any) => {
        setLoading(false);
        if (
          err?.response &&
          err?.response?.data &&
          err?.response?.data?.error
        ) {
          ToastMessage(err?.response?.data?.error, color.warning);
        } else {
          ToastMessage(
            'An error occurred. Please try again later.',
            color.warning,
          );
        }
      });
  };

  //** Navigate to SignUp screen */
  const onClickSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  //** Navigate to ForgotPassword screen */
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
