import {useNavigation} from '@react-navigation/native';
import {useCallback, useState} from 'react';

const useOnGoing = () => {
  const navigation = useNavigation();
  const onCancleBooking = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  return {onCancleBooking};
};
export default useOnGoing;
