import {useCallback} from 'react';
import {useAuthNavigation} from '../../../../hooks/useAppNavigation';

const useSuccessfully = () => {
  const navigation = useAuthNavigation();

  const onGobak = useCallback(() => {
    navigation.navigate("HomeBottomTabs");
  }, [navigation]);

  return {onGobak};
};
export default useSuccessfully;
