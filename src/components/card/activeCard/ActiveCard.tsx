import React, {FC, memo} from 'react';
import {
  Image,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './activeCard.style';
import imageIndex from '../../../assets/imageIndex';
import color from '../../../theme/color';

interface ActiveCardCardProps {
  item: ItemProps;
  key: number;
  onAccepted?: any;
  nameStyle?: StyleProp<TextStyle> | undefined;
}
interface ItemProps {
    id: number;
  type: string;
}

const ActiveCard: FC<ActiveCardCardProps> = ({item, key, onAccepted}) => {
  console.log(item.type);
  return (
    <View style={styles.mainView}>
      <View style={styles.itemContainer}>
        <View style={styles.buttView}>
          <View style={styles.rowView}>
            <Text style={styles.codeText}>#52369</Text>
            <TouchableOpacity
              style={[
                styles.buttonAccepted,
                {
                  backgroundColor:
                    item.type == 'Accepted'
                      ? color.buttBlue
                      : color.textLightYellow,
                },
              ]}
              onPress={() => {
                if (item.type == 'Accepted') {
                  onAccepted(item);
                } else {
                  onAccepted(item);
                }
              }}>
              <Text
                style={[
                  styles.textAccepted,
                  {
                    color:
                      item.type == 'Accepted'
                        ? color.textBlue
                        : color.orangeText,
                  },
                ]}>
                {item.type}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textView}>
            <View style={styles.columnView}>
              <Text style={styles.type}>Home Cleaner</Text>
              <Text style={styles.moreText}>22 Sep 21 ,03:00 -04:30 PM</Text>
            </View>
            <Text style={styles.price}>$ 156</Text>
          </View>
        </View>
      </View>
      <View style={styles.userName}>
        <View style={styles.userView}>
          <Text style={styles.titleText}>Level Ray</Text>
          <View style={styles.starView}>
            <Image
              source={imageIndex.starOrange}
              style={styles.stringImage}
              resizeMode="cover"
            />
            <Text style={styles.ratingText}>4.7</Text>
            <Text style={styles.ratingTitle}>193 Ratings</Text>
          </View>
        </View>
        <Image
          source={imageIndex.userProfile}
          style={styles.userProfileImg}
          resizeMode="cover"
        />
      </View>
    </View>
  );
};

export default memo(ActiveCard);
