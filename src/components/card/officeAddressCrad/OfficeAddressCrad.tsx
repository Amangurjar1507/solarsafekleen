import React, {FC, memo} from 'react';
import {StyleProp, Text, TextStyle, TouchableOpacity} from 'react-native';
import styles from './officeAddressCrad.style';

interface OfficerAddCardProps {
  item: ItemProps;
  key: number;
  onClickAdd?: () => void;
  nameStyle?: StyleProp<TextStyle> | undefined;
}
interface ItemProps {
  address: string;
  id: number;
  topic: string;
}

const OfficeAddressCrad: FC<OfficerAddCardProps> = ({item}) => {
  return (
    <TouchableOpacity style={styles.mainCard}>
      <Text style={styles.topictxt}>{item.topic}</Text>
      <Text style={styles.addresstxt}>{item.address}</Text>
    </TouchableOpacity>
  );
};

export default memo(OfficeAddressCrad);
