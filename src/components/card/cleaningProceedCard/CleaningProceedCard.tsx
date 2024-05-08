import React, {FC, memo} from 'react';
import {
  Image,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './cleaningProceedCard.style';
import color from '../../../theme/color';
import imageIndex from '../../../assets/imageIndex';

interface CleanCardProps {
  item: ItemProps;
  key: number;
  onPressMore?: () => void;
  onClickAdd?: () => void;
  nameStyle?: StyleProp<TextStyle> | undefined;
}
interface ItemProps {
  title: string;
  servies: string;
  id: number;
}

const CleaningProceedCard: FC<CleanCardProps> = ({
  item,
  key,
  onPressMore,
  onClickAdd,
}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.column}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.rowView}>
          <Image
            source={imageIndex.wallClock}
            style={styles.wallClock}
            tintColor={color.label}
            resizeMode="cover"
          />
          <Text style={styles.time}>45 min</Text>
        </View>
        <Text onPress={onPressMore} style={styles.moreText}>
          MORE INFO
        </Text>
      </View>
      <View style={styles.addView}>
        <Text style={styles.prices}>$ 56</Text>
        <TouchableOpacity style={styles.addButt} onPress={onClickAdd}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(CleaningProceedCard);
