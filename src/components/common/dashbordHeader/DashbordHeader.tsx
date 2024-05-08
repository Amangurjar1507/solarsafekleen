import React, {memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import imageIndex from '../../../assets/imageIndex';
import {styles} from './dashbordHeader.style';

const DashbordHeader = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          style={styles.location}
          source={imageIndex.location}
          resizeMode="center"
        />
        <View style={styles.textView}>
          <Text style={styles.lableView}>Cureent Location</Text>
          <TouchableOpacity style={styles.rowView}>
            <Text style={styles.lableStyle}>New York City</Text>
            <Image
              style={styles.imageStyle}
              source={imageIndex.downArrow}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
        <Image
          style={styles.img}
          resizeMode="center"
          source={imageIndex.notification}
        />
      </TouchableOpacity>
    </View>
  );
};

export default memo(DashbordHeader);
