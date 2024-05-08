import React, {FC, memo} from 'react';
import {
  Image,
   StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './seviesCard.style';
 
interface ServiesCardProps {
  item: ItemProps;
  key: number;
  onUserSevies?: () => void;
  nameStyle?: StyleProp<TextStyle> | undefined;
}
interface ItemProps {
  image?: string;
  name: string;
}

const SeviesCard: FC<ServiesCardProps> = ({item, key, onUserSevies}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onUserSevies}
        style={styles.mainView}>
        <Image
          source={{uri:item.image}}
          style={styles.img}
          resizeMode="stretch"
        />
      </TouchableOpacity>
      <Text style={styles.title}>{item?.name}</Text>
    </View>
  );
};

export default memo(SeviesCard);
