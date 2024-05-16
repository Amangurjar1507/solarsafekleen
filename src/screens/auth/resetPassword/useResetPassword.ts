import {useEffect, useRef, useState} from 'react';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import validationMessage from '../../../validation/validationMessage';
import {Animated} from 'react-native';
import {ToastMessage} from '../../../utility/ToastMessage';
import color from '../../../theme/color';
import axiosInstance from '../../../services/api';
import constant from '../../../services/config/constant';
import params from '../../../services/config/params';

const useResetPassword = () => {
  const navigation = useAuthNavigation();
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [confirmpassword, setConfirmpassword] = useState<string>('');
  const [errorObject, setErrorObject] = useState<any>({
    passwordError: undefined,
    confirmError: undefined,
  });

  const buttonOpacity = useRef(new Animated.Value(0)).current;
  const inputTranslateY = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    // Button animation
    Animated.timing(buttonOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Input fields animation
    Animated.timing(inputTranslateY, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);
  // Call  all validations pass
  const validateForgot = () => {
    let isValidate = true;
    const updatedErrorObject = {...errorObject}; // Create a copy of errorObject to avoid mutating it directly

    if (!password) {
      isValidate = false;
      updatedErrorObject.passwordError = validationMessage.emptyPassword;
    } else {
      updatedErrorObject.passwordError = undefined; // Clear any previous password error
    }

    if (!confirmpassword) {
      isValidate = false;
      updatedErrorObject.confirmError = validationMessage.emptyConfirmPassword;
    } else if (password !== confirmpassword) {
      isValidate = false;
      updatedErrorObject.confirmError = validationMessage.passwordMismatch;
    } else {
      updatedErrorObject.confirmError = undefined; // Clear any previous confirm password error
    }
    setErrorObject(updatedErrorObject); // Update errorObject with the new error messages
    if (isValidate) {
      userForgotApi(); // Call the API only if all validations pass
    }
  };

  const userForgotApi = () => {
    setLoading(true);
    let data = {
      [params.password]: password,
    };
    axiosInstance
      .post(constant.resetPassword, data)
      .then(response => {
        ToastMessage(response?.data?.message, color.green);
        setLoading(false);
        setPassword('');
        navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
      })
      .catch((err: any) => {
        setLoading(false);
        setPassword('');

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

  return {
    password,
    errorObject,
    setPassword,
    loading,
    setLoading,
    validateForgot,
    buttonOpacity,
    inputTranslateY,
    confirmpassword,
    setConfirmpassword,
  };
};

export default useResetPassword;
