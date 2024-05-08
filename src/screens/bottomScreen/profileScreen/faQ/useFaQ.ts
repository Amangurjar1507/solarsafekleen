import { useCallback } from "react";
import { useAuthNavigation } from "../../../../hooks/useAppNavigation";

const useFaQ = () => {
  const navigation = useAuthNavigation();

  const onGobak = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return {onGobak};
};
export default useFaQ;