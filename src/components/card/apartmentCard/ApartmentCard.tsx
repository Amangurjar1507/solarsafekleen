import React, {FC, memo} from 'react';
import {  Text, TouchableOpacity, View} from 'react-native';
import styles from './apartmentCard.style';

interface CardProps {
  item: ItemProps;
  index: number;
 }
interface ItemProps {
  id: number;
}

const ApartmentCard: FC<CardProps> = ({item, index}) => {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.column}>
        <Text style={styles.title}>Apartment </Text>
        <Text style={styles.time}>Suited for repair or replacment</Text>
      </View>
      <View style={styles.pricesView}>
        <Text style={styles.prices}>$ 56</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ApartmentCard);
