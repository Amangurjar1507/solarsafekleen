import {useCallback} from 'react';
import {useAuthNavigation} from '../../hooks/useAppNavigation';

const useCleaningProceed = () => {
  const navigation = useAuthNavigation();
  const onNavigation = useCallback(() => {
    navigation.navigate('Maps');
  }, [navigation]);
  //
  return {
    onNavigation,
  };
};
export default useCleaningProceed;
