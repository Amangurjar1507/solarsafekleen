import React, {FC, memo} from 'react';
import {
  Image,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './cleaningPestCard.style';

interface CleaningCardProps {
  item: ItemProps;
  key: number;
  onUserCleaningClick?: () => void;
  nameStyle?: StyleProp<TextStyle> | undefined;
}
interface ItemProps {
  image: string;
  title: string;
  servies: string;
  prices: string;
  id: number;
}

const cleaningPestCard: FC<CleaningCardProps> = ({
  item,
  key,
  onUserCleaningClick,
}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
         onPress={onUserCleaningClick}>
        <Image
          source={{uri: item?.image}}
          style={styles.img}
          resizeMode="cover"
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.serViesText}>{item?.servies}</Text>
        <View style={styles.row}>
          <Text style={styles.start}>Start at </Text>
          <Text style={styles.perices}>${item?.prices}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default memo(cleaningPestCard);
