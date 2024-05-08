import React, {FC, memo} from 'react';
import {Image, StyleProp, Text, TextStyle, TouchableOpacity, View} from 'react-native';
import styles from './offerCard.style';

interface OfferCardCardProps {
  item: ItemProps;
  key: number;
  onUserOfferClick?: () => void;
  nameStyle?: StyleProp<TextStyle> | undefined;
}
interface ItemProps {
  image: string;
  id: number;
}

const OfferCard: FC<OfferCardCardProps> = ({item, key,onUserOfferClick}: any) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity style={{marginVertical: 20}} onPress={onUserOfferClick}>
        <Image
          source={{uri: item?.image}}
          style={{
            height: 170,
            width: 240,
            borderWidth: 1,
            borderRadius: 10,
            margin: 1.5,
          }}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
};

export default memo(OfferCard);
