import React, {FC, memo} from 'react';
import {
  Image,
  Text,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './paymentCard.style';
import imageIndex from '../../../assets/imageIndex';

interface PaymentCardProps {
  item: ItemProps;
  isSelected: boolean;
  onSelectItem: () => void;
  nameStyle?: StyleProp<TextStyle>;
}

interface ItemProps {
  type?: string;
   image?: any;
}

const PaymentCard: FC<PaymentCardProps> = ({
  item,
  isSelected,
  onSelectItem,
  nameStyle,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.firstView}>
        <Image style={styles.paymentIcon} source={item.image} />
        <Text style={[styles.cardtype, nameStyle]}>{item.type}</Text>
      </View>
      <TouchableOpacity onPress={onSelectItem}>
        <Image
          style={styles.paymentIcon}
          source={isSelected ? imageIndex.radio : imageIndex.radioButton}
        />
      </TouchableOpacity>
    </View>
  );
};

export default memo(PaymentCard);
