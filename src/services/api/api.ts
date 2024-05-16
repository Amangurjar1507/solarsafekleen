import axios from 'axios';
import Snackbar from 'react-native-snackbar';
 import constant from '../config/constant';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();
const axiosInstance = axios.create({
  baseURL: constant.baseURL,
   headers: {
    // 'Content-Type': 'multipart/form-data',
    // 'Cache-Control': 'no-cache',
    // Pragma: 'no-cache',
    // Expires: '0',
  },
});

axiosInstance.interceptors.request.use(
  async config => {
    //do want you wont to do before call
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

// Relogin the user if the token expires
axiosInstance.interceptors.response.use(
  async response => response,
  async function (error) {
    // console.log(error?.response);
    if (error?.response?.status === 401 || error?.response?.status === 0) {
      // navigateAndSimpleReset(screenName.session, 0);
      // navigateAndSimpleReset(screenName.sessionOut, 0);
      // source.cancel('Operation becouse of status code 401');
      // source.cancel('Operation becouse of status code 401');
      //do what you want to do in here
    } else if (error?.response?.status === 422) {
      Snackbar.show({
        text:
          error?.response?.data?.error?.[
            Object.keys(error?.response?.data?.error)[0]
          ][0] ?? 'Somthing went wrong! Please try again.',
      });
      // Toast.show(
      //   error?.response?.data?.error?.[
      //     Object.keys(error?.response?.data?.error)[0]
      //   ][0] ?? 'Somthing went wrong! Please try again.',
      //   toastUi,
      // );
    } else if (error?.response?.status === 451) {
      Snackbar.show({
        text:
          error?.response?.data?.error?.[
            Object.keys(error?.response?.data?.error)[0]
          ][0] ?? 'Somthing went wrong! Please try again.',
      });
    }
    return Promise.reject(error);
  },
);

export {axiosInstance};
