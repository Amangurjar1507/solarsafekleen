import { useCallback, useEffect, useState } from 'react';
import { useAuthNavigation } from '../../../hooks/useAppNavigation';
import { useSelector } from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid } from 'react-native';
import { ToastMessage } from '../../../utility/ToastMessage';
import axiosInstance from '../../../services/api';
import constant from '../../../services/config/constant';
import color from '../../../theme/color';
import messaging from '@react-native-firebase/messaging';

const useHome = () => {
  const navigation = useAuthNavigation();
  const { userData, token } = useSelector((state: any) => state.userReducer);
  const [activeIndex, setActiveIndex] = useState(0);
  const [permission, setPermission] = useState<boolean | null>(null);

  // useEffect(() => {
  //   const getToken = async () => {
  //     let token = await messaging().getToken();
  //     console.log('token', token);
  //   };
  //   getToken();
  // }, []);

  const handlePageChange = (index: number) => {
    setActiveIndex(index);
  };

  const onEditProfile = () => {
    axiosInstance
      .get(constant.userGet)
      .then(response => {
        // ToastMessage(response.data.message, color.green);
      })
      .catch(err => {
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

  const onClickCleaning = useCallback(() => {
    navigation.navigate('CleaningControl');
  }, [navigation]);

  return {
    handlePageChange,
    activeIndex,
    setActiveIndex,
    onClickCleaning,
  };
};

export default useHome;
