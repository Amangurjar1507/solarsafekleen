import { useCallback, useState } from "react";
import { useAuthNavigation } from "../../../hooks/useAppNavigation";
 
const usePaymentMethod = () => {
  const navigation = useAuthNavigation();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (index:number) => {
    setSelectedItem(index);
   };
  const onPayment = useCallback(() => {
    navigation.navigate('Successfully');
  }, [navigation]);

  return {onPayment,handleSelectItem,selectedItem, setSelectedItem};
};
export default usePaymentMethod;
