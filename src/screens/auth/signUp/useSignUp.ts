import {useCallback, useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import {
  checkEmail,
  checkMobileNumber,
} from '../../../validation/stringValidation';
import validationMessage from '../../../validation/validationMessage';
import axiosInstance from '../../../services/api';
import constant from '../../../services/config/constant';
import {ToastMessage} from '../../../utility/ToastMessage';
import color from '../../../theme/color';
import params from '../../../services/config/params';

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
      navigation.navigate('Login');

      // onSignUpApi();// Call the API only if all validations pass
    }
  };

  // Signup api call
  const onSignUpApi = () => {
    setLoading(true);
    let data = {
      [params.email]: email,
      [params.password]: password,
      [params.mobileNumber]: mobileNumber,
    };
    axiosInstance
      .post(constant.signUp, data)
      .then(response => {
        setLoading(false);
        setPassword('');
        setEmail('');
        setMobileNumber("")
        ToastMessage(response?.data?.message, color.green);
        navigation.navigate('Login');
      })
      .catch(err => {
        setLoading(false);
        setPassword('');
        setEmail('');
        if (
          err?.response &&
          err?.response?.data &&
          err?.response?.data?.message
        ) {
          ToastMessage(err?.response?.data?.message, color.warning);
        } else {
          ToastMessage(
            'An error occurred. Please try again later.',
            color.warning,
          );
        }
      });
  };

  //** Navigate to login screen */
  const onPressLogin = useCallback(() => {
    navigation.navigate('Login');
    setEmail('');
  }, [navigation]);

 
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
    inputTranslateY,
    buttonOpacity,
  };
};

export default useSignUp;
