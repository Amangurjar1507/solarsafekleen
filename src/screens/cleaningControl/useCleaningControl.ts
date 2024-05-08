import { useCallback } from "react";
import { useAuthNavigation } from "../../hooks/useAppNavigation";

 
const useCleaningControl = () => {
  const navigation = useAuthNavigation();

  const onClickProceed = useCallback(() => {
    navigation.navigate('CleaningProceed');
  }, [navigation]);

  return {
    onClickProceed
  };
};
export default useCleaningControl;
