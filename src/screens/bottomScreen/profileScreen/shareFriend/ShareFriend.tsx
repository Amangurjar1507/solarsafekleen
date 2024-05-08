import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {
  Button,
  CustomStatusbar,
  Header,
} from '../../../../components/componentsIndex';
import styles from './shareFriend.style';
import color from '../../../../theme/color';
import imageIndex from '../../../../assets/imageIndex';
import useShareFriend from './useShareFriend';

const ShareFriend = () => {
  const {onGobak} = useShareFriend();

  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.white}
        translucent={true}
        barStyle="dark-content"
      />
      <Header backIconsShown />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.mainRow}>
          <View style={styles.mainVieW}>
            <Image
              source={imageIndex.share}
              style={styles.successfully}
              resizeMode="cover"
            />
            <Text style={styles.share}>Share With friends</Text>
            <Text style={styles.title}>
              Refer to your friend and get {'\n'} Get a cash reward of $5 8eweb
            </Text>
          </View>
        </View>
        <View style={styles.buttView}>
          <Button
            label="Share Now"
            containerStyle={styles.containerStyle}
            onPress={onGobak}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ShareFriend;
