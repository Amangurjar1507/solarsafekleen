import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {
  Button,
  CustomStatusbar,
  Header,
} from '../../../../components/componentsIndex';
import styles from './successfully.style';
import color from '../../../../theme/color';
import imageIndex from '../../../../assets/imageIndex';
import useSuccessfully from './useSuccessfully';

const Successfully = () => {
  const {onGobak} = useSuccessfully();

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
              source={imageIndex.successfully}
              style={styles.successfully}
              resizeMode="cover"
            />
            <Text style={styles.share}>
              Your Services has {'\n'} been booked
            </Text>
            <Text style={styles.title}>
              Rightjoy team call you for booking {'\n'} confirmation
            </Text>
          </View>
        </View>
        <View style={styles.buttView}>
          <Button
            label="Back to Home"
            containerStyle={styles.containerStyle}
            onPress={onGobak}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Successfully;
