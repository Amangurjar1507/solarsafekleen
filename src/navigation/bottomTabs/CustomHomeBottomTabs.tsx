import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './homeBottomTabs.style';
import color from '../../theme/color';
import {useAuthNavigation} from '../../hooks/useAppNavigation';
import imageIndex from '../../assets/imageIndex';

const CustomHomeBottomTabs = props => {
  const {index} = props.state;
  const navigation = useAuthNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.rowView}>
        <TouchableOpacity
          style={styles.touchable}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Home')}>
          <View style={styles.imageView}>
            <Image
              tintColor={index === 0 ? color.butt : color.black}
              source={imageIndex.home}
              style={styles.image}
              resizeMode="cover"
            />
            <Text
              style={[
                styles.nameText,
                {
                  color: index === 0 ? color.butt : color.black,
                },
              ]}>
              Home
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('SearchAddress')}>
          <View style={styles.imageView}>
            <Image
              source={imageIndex.search}
              style={styles.searchImage}
              resizeMode="cover"
              tintColor={index === 1 ? color.butt : color.black}
            />
            <Text
              style={[
                styles.nameText,
                {
                  color: index === 1 ? color.butt : color.black,
                },
              ]}>
              Search
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Booking')}>
          <View style={styles.imageView}>
            <Image
              source={imageIndex.booking}
              style={{height: 26, width: 26}}
              resizeMode="cover"
              tintColor={index === 2 ? color.butt : color.black}
            />
            <Text
              style={[
                styles.nameText,
                {
                  color: index === 2 ? color.butt : color.black,
                },
              ]}>
              BooKing
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('UserProfile')}>
          <View style={styles.imageView}>
            <Image
              source={imageIndex.user}
              style={{height: 22, width: 22}}
              tintColor={index === 3 ? color.butt : color.black}
              resizeMode="cover"
            />
            <Text
              style={[
                styles.nameText,
                {
                  color: index === 3 ? color.butt : color.black,
                },
              ]}>
              Profile
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CustomHomeBottomTabs;
