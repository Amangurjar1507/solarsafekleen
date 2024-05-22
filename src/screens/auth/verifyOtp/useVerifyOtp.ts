import {useRef, useState} from 'react';
import {useAuthNavigation, useAuthRoute} from '../../../hooks/useAppNavigation';
import validationMessage from '../../../validation/validationMessage';
import {ToastMessage} from '../../../utility/ToastMessage';
import color from '../../../theme/color';
import axiosInstance from '../../../services/api';
import params from '../../../services/config/params';
import constant from '../../../services/config/constant';

const useForgotPassword = () => {
  const navigation = useAuthNavigation();
  const OTPRef = useRef<any>(null);
  const route = useAuthRoute('VerifyOTP');
  const [otp, setOtp] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorObject, setErrorObject] = useState<any>({
    otpError: undefined,
  });
  const validateVerify = () => {
    let isValid = true;
    const errorObjectCopy = {...errorObject};
    if (!otp) {
      isValid = false;
      errorObjectCopy.otpError = validationMessage.emptyOtp;
    } else if (otp.length !== 6) {
      isValid = false;
      errorObjectCopy.otpError = validationMessage.invalidOtp;
    } else {
      errorObjectCopy.otpError = undefined;
    }
    setErrorObject(errorObjectCopy);
    if (isValid) {
      navigation.reset({
        index: 0,
        routes: [{name: 'ResetPassword'}],
      });
      // userForgotApi(); // Call the API only if all validations pass
    }
  };

  const userForgotApi = () => {
    setLoading(true);
    let data = {
      [params.otp]: otp,
    };
    axiosInstance
      .post(constant.verifyOtp, data)
      .then(response => {
        ToastMessage(response?.data?.message, color.green);
        setLoading(false);
        setOtp('');
        navigation.reset({
          index: 0,
          routes: [{name: 'ResetPassword'}],
        });
      })
      .catch((err: any) => {
        setLoading(false);
        setOtp('');

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
    otp,
    validateVerify,
    setOtp,
    OTPRef,
    loading,
    errorObject,
    route,
  };
};

export default useForgotPassword;
