import {useCallback, useState} from 'react';
import {useAuthNavigation} from '../../../hooks/useAppNavigation';

const useBooking = () => {
  const navigation = useAuthNavigation();

  const [activeTab, setActiveIndex] = useState<Number>(0);

  const handleTabPress = (index: any) => {
    setActiveIndex(index);
  };

  const onOngoing = useCallback(() => {
    navigation.navigate('FeedBack');
  }, [navigation]);

  const onAccepted = useCallback(() => {
    navigation.navigate('Ongoing');
  }, [navigation]);

  const onCancelBooking = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return {
    handleTabPress,
    activeTab,
    setActiveIndex,
    onOngoing,
    onCancelBooking,
    onAccepted,
  };
};
export default useBooking;
