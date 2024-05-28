import React, {FC, memo} from 'react';
import {
  Image,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './carouselCard.style';

interface CarouselCardProps {
  item: ItemProps;
  index: number;
  onPress?: () => void;
  nameStyle?: StyleProp<TextStyle> | undefined;
}
interface ItemProps {
  image: string;
}
const CarouselCard: FC<CarouselCardProps> = ({item, index, onPress}: any) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.imgView} onPress={onPress}>
        <Image
          source={{uri: item.image}}
          style={styles.img}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
};

export default memo(CarouselCard);
