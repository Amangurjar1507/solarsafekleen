import {useCallback, useEffect, useState} from 'react';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';
import {useSelector} from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid} from 'react-native';
import {ToastMessage} from '../../../utility/ToastMessage';
import axiosInstance from '../../../services/api';
import constant from '../../../services/config/constant';
import color from '../../../theme/color';
import messaging from '@react-native-firebase/messaging';

const useHome = () => {
  const navigation = useAuthNavigation();
  const {userData,token} = useSelector((state: any) => state.userReducer);
  const [activeIndex, setActiveIndex] = useState(0);
  const [permission, setPermission] = useState<boolean | null>(null);



  useEffect(() => {
    const getToken = async () => {
      let token = await messaging().getToken();
      console.log('token', token);
    };
    getToken(); // Call the function to set up the notification channel
   }, []);
  // useEffect(()=>{
  //   onEditProfile()
  // },[])
  const handlePageChange = (index: number) => {
    setActiveIndex(index);
  };

  const onEditProfile = () => {
    axiosInstance
      .get(constant.userGet)
      .then(response => {
        //  ToastMessage(response.data.message, color.green);
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

  // useEffect(() => {
  //   const requestLocationPermission = async () => {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //         {
  //           title: 'Location Permission',
  //           message: 'This app needs access to your location',
  //           buttonNeutral: 'Ask Me Later',
  //           buttonNegative: 'Cancel',
  //           buttonPositive: 'OK',
  //         },
  //       );
  //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //         setPermission(true);
  //       } else {
  //         setPermission(false);
  //       }
  //     } catch (err) {
  //       console.warn(err);
  //     }
  //   };

  //   const checkLocationPermission = async () => {
  //     try {
  //       const granted = await PermissionsAndroid.check(
  //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       );
  //       if (granted) {
  //         setPermission(true);
  //       } else {
  //         await requestLocationPermission();
  //       }
  //     } catch (err) {
  //       console.warn(err);
  //     }
  //   };

  //   const getCurrentLocation = () => {
  //     Geolocation.getCurrentPosition(
  //       position => {
  //         console.log('position', position);
  //       },
  //       error => console.log(error),
  //       {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  //     );
  //   };

  //   checkLocationPermission();
  //   getCurrentLocation();
  // }, []);

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
