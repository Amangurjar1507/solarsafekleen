import React, {FC, memo} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './nextThinkCard.style';

interface NextCardProps {
  item: ItemProps;
  key: number;
  onNextClike?: () => void;
}
interface ItemProps {
  image: string;
  id: number;
}

const NextThinkCard: FC<NextCardProps> = ({item, key, onNextClike}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.row} onPress={onNextClike}>
        <Image
          source={{uri: item.image}}
          style={styles.img}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
};

export default memo(NextThinkCard);
