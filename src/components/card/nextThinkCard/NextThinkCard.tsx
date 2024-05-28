import React, {FC, memo} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './nextThinkCard.style';

interface NextCardProps {
  item: ItemProps;
  index: number;
  onNextClike?: () => void;
  containerCrad:any;
  cardImg:any
}
interface ItemProps {
  image: string;
  id: number;
  cardImg:any;
  containerCrad:any

}

const NextThinkCard: FC<NextCardProps> = ({item, index, onNextClike,containerCrad,cardImg}) => {
  return (
    <View style={[styles.itemContainer,containerCrad]}>
      <TouchableOpacity style={styles.row} onPress={onNextClike}>
        <Image
          source={{uri: item.image}}
          style={[styles.img,cardImg]}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
};

export default memo(NextThinkCard);
