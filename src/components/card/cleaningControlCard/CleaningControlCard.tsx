import React, {FC, memo} from 'react';
import {
  Image,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './cleaningControlCard.style';
import imageIndex from '../../../assets/imageIndex';
import color from '../../../theme/color';

interface ClearCardProps {
  item: ItemProps;
  index: number;
  onUserCleaningClick?: () => void;
  nameStyle?: StyleProp<TextStyle> | undefined;
}
interface ItemProps {
  image: string;
  title: string;
  servies: string;
  id: number;
}

const CleaningControlCard: FC<ClearCardProps> = ({
  item,
  index,
  onUserCleaningClick,
}) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      activeOpacity={0.7}
      onPress={onUserCleaningClick}>
      <Image
        source={{uri: item?.image}}
        style={styles.img}
        resizeMode="cover"
      />
      <View style={styles.textView}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.servies}>{item?.servies}</Text>
      </View>
      <View style={styles.backView}>
        <Image
          source={imageIndex.next}
          style={styles.nextImg}
          tintColor={color.label}
        />
      </View>
    </TouchableOpacity>
  );
};

export default memo(CleaningControlCard);
