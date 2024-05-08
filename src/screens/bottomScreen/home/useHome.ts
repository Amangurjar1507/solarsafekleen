import {useCallback, useState} from 'react';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';

const useHome = () => {
  const navigation = useAuthNavigation();

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePageChange = (index: number) => {
    setActiveIndex(index);
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
