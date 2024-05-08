import {useCallback, useState} from 'react';
import {useAuthNavigation} from '../../../../hooks/useAppNavigation';

const useUserProfile = () => {
  const navigation = useAuthNavigation();
  const [modal, setModal] = useState(false);

  const onEdit = useCallback(() => {
    navigation.navigate('EditProfile');
  }, [navigation]);

  const onLogOut = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  const onNavigation = (screenName: any) => {
    navigation.navigate(screenName);
  };
  return {onEdit, modal, onNavigation, setModal, onLogOut};
};
export default useUserProfile;
