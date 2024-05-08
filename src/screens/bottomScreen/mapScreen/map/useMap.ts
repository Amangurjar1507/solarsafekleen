import {useCallback, useState} from 'react';
import {useAuthNavigation} from '../../../../hooks/useAppNavigation';

const useMap = () => {
  const navigation = useAuthNavigation();

  const [activeTab, setActiveIndex] = useState<Number>(0);

  const handleTabPress = (index: any) => {
    setActiveIndex(index);
  };

  const onCleaningApartment = useCallback(() => {
    navigation.navigate('CleaningApartment');
  }, [navigation]);

  return {
    handleTabPress,
    activeTab,
    setActiveIndex,
    onCleaningApartment,
  };
};
export default useMap;
