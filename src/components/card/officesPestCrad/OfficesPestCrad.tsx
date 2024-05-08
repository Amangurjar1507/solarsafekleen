import React, {FC, memo} from 'react';
import {
  Image,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import color from '../../../theme/color';
import imageIndex from '../../../assets/imageIndex';
import styles from './officesPestCrad.style';

interface OfficerCardProps {
  item: ItemProps;
  key: number;
  onPressMore?: () => void;
  onClickAdd?: () => void;
  nameStyle?: StyleProp<TextStyle> | undefined;
}
interface ItemProps {
  servies: string;
  id: number;
}

const OfficesPestCrad: FC<OfficerCardProps> = ({item, key, onClickAdd}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.office}>Offices Pest Control</Text>
      <View style={styles.cardView}>
        <View>
          <Text style={styles.officeText}>Offices</Text>
          <View style={styles.titmeView}>
            <Image
              source={imageIndex.wallClock}
              style={styles.wallClock}
              tintColor={color.label}
              resizeMode="cover"
            />
            <Text style={styles.time}>45 min</Text>
          </View>
        </View>
        <View style={styles.titeText}>
          <Text style={styles.prices}>$ 56</Text>
          <TouchableOpacity style={styles.subText} onPress={onClickAdd}>
            <Text style={styles.subTitle}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default memo(OfficesPestCrad);
