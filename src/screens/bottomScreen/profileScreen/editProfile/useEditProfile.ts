import {useCallback, useEffect, useState} from 'react';
import {useAuthNavigation} from '../../../../hooks/useAppNavigation';
import {useSelector} from 'react-redux';
import axiosInstance from '../../../../services/api';
import params from '../../../../services/config/params';
import constant from '../../../../services/config/constant';
import {ToastMessage} from '../../../../utility/ToastMessage';
import color from '../../../../theme/color';
import {
  checkEmail,
  checkMobileNumber,
} from '../../../../validation/stringValidation';
import validationMessage from '../../../../validation/validationMessage';

const useEditProfile = () => {
  const navigation = useAuthNavigation();
  const [email, setEmail] = useState<string>('');
  const {token, userData} = useSelector((state: any) => state.userReducer);
  const [loading, setLoading] = useState<boolean>(false);
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  useEffect(() => {
    setEmail(userData?.email);
    setMobileNumber(userData?.mobileNumber);
  }, []);

  const onGobak = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const [errorObject, setErrorObject] = useState<any>({
    emailError: undefined,
    mobileNumberError: undefined,
    passwordError: undefined,
  });
  const validateEdit = () => {
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
    // if (!password) {
    //   isValidate = false;
    //   errorObject.passwordError = validationMessage.emptyPassword;
    // } else {
    //   errorObject.passwordError = '';
    // }
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
      onEditProfile(); // loginApiCall();
    }
  };

  const onEditProfile = () => {
    setLoading(true);
    let data = {
      [params.email]: userData?.email,
      [params.mobileNumber]: userData?.mobileNumber,
    };
    axiosInstance
      .post(constant.profileupdate, data)
      .then(response => {
        setLoading(false);
        setPassword('');
        setEmail('');
        ToastMessage(response.data.message, color.green);
        navigation.goBack();
      })
      .catch(err => {
        setLoading(false);
        if (
          err?.response &&
          err?.response.data &&
          err?.response?.data?.message
        ) {
          ToastMessage(err.response.data.message, color.warning);
        } else {
          ToastMessage(
            'An error occurred. Please try again later.',
            color.warning,
          );
        }
      });
  };

  return {
    onGobak,
    userData,
    mobileNumber,
    email,
    setEmail,
    setPassword,
    setMobileNumber,
    validateEdit,
    loading,
    errorObject,
    setErrorObject,
  };
};
export default useEditProfile;
