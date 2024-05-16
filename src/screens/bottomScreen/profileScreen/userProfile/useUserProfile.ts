import {useCallback, useState} from 'react';
import {useAuthNavigation} from '../../../../hooks/useAppNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccess } from '../../../../services/config/redux/userReducer/reducer';

const useUserProfile = () => {
  const dispatch = useDispatch();

  const navigation = useAuthNavigation();
  const [modal, setModal] = useState(false);
  const { userData,token} = useSelector((state: any) => state.userReducer);
 
  const onEdit = useCallback(() => {
    navigation.navigate('EditProfile');
  }, [navigation]);

  const onLogOut = useCallback(() => {
    dispatch(logoutSuccess(""));
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });

   }, [navigation]);


   


  const onNavigation = (screenName: any) => {
    navigation.navigate(screenName);
  };
  return {onEdit, modal,userData, onNavigation, setModal, onLogOut};
};
export default useUserProfile;
