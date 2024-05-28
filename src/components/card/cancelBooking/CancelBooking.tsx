import React, {FC, memo} from 'react';
import {StyleProp, Text, TextStyle, TouchableOpacity, View} from 'react-native';
import styles from './cancelBooking.style';
import {Button} from '../../componentsIndex';

interface ActiveCardCardProps {
  item: ItemProps;
  key: number;
  onSubmitted?: () => void;
  onCancle?: () => void;
  nameStyle?: StyleProp<TextStyle> | undefined;
  onCancel?:()=> void
}
interface ItemProps {
  id: number;
}

const CancelBooking: FC<ActiveCardCardProps> = ({
  item,
  key,
  onSubmitted,
  onCancle,
}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.itemContainer}>
        <View style={styles.buttView}>
          <View style={styles.textView}>
            <Text style={styles.codeText}>#52369</Text>
            <TouchableOpacity onPress={onSubmitted} style={styles.buttSub}>
              <Text style={styles.subText}>Submitted</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowView}>
            <View style={styles.row}>
              <Text style={styles.type}>Home Cleaner</Text>
              <Text style={styles.date}>22 Sep 21 ,03:00 -04:30 PM</Text>
            </View>
            <Text style={styles.prices}>$ 186</Text>
          </View>
        </View>
      </View>
      <View style={styles.canCleView}>
        <Button
          label="Cancle Booking"
          containerStyle={styles.containerStyle}
          nameTextStyle={styles.nameTextStyle}
          onPress={onCancle}
        />
      </View>
    </View>
  );
};

export default memo(CancelBooking);
