import {useEffect, useRef, useState} from 'react';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import validationMessage from '../../../validation/validationMessage';
import {checkEmail} from '../../../validation/stringValidation';
import {Animated} from 'react-native';
import {ToastMessage} from '../../../utility/ToastMessage';
import color from '../../../theme/color';
import axiosInstance from '../../../services/api';
import constant from '../../../services/config/constant';
import params from '../../../services/config/params';
const useForgotPassword = () => {
  const navigation = useAuthNavigation();
  const [email, setEmail] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorObject, setErrorObject] = useState<any>({
    emailError: undefined,
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
      navigation.navigate('VerifyOtp');
      // userForgotApi(); // Call the API only if all validations pass
    }
  };

  const userForgotApi = () => {
    setLoading(true);
    let data = {
      [params.email]: email,
    };
    axiosInstance
      .post(constant.forgotPassword, data)
      .then(response => {
        ToastMessage(response?.data?.message, color.green);
        setLoading(false);
        setEmail('');
        navigation.navigate('VerifyOtp', {
          email: email,
        });
      })
      .catch((err: any) => {
        setLoading(false);
        setEmail('');
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
    email,
    errorObject,
    setEmail,
    loading,
    setLoading,
    validateForgot,
    buttonOpacity,
    inputTranslateY,
  };
};

export default useForgotPassword;
