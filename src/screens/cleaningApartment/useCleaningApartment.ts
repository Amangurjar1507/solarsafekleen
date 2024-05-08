import {useCallback, useState} from 'react';
import {useAuthNavigation} from '../../hooks/useAppNavigation';

const useCleaningApartment = () => {
  const navigation = useAuthNavigation();

  const [selectedItem, setSelectedItem] = useState(null);
  const [morringTime, setMorringTime] = useState(null);
  const [modal, setModal] = useState(false);

  const onPayment = useCallback(() => {
    navigation.navigate('PaymentMethod');
  }, [navigation]);
  const handleItemSelected = (item: any) => {
    setSelectedItem(item);
  };

  const onSelectedMorring = (item: any) => {
    setMorringTime(item);
  };
  return {
    selectedItem,
    setSelectedItem,
    handleItemSelected,
    morringTime,
    setMorringTime,
    onSelectedMorring,
    modal,
    setModal,
    onPayment,
  };
};
export default useCleaningApartment;
