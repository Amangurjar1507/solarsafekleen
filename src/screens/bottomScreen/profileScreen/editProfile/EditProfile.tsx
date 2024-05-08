import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import {
  Button,
  CustomStatusbar,
  InputContainer,
} from '../../../../components/componentsIndex';
import styles from './editProfile.style';
import color from '../../../../theme/color';
import imageIndex from '../../../../assets/imageIndex';
import useEditProfile from './useEditProfile';

const EditProfile = () => {
  const {onGobak} = useEditProfile();

  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.white}
        translucent={true}
        barStyle="dark-content"
      />
      <View style={styles.hederView}>
        <Text style={styles.closeText} onPress={onGobak}>
          Close
        </Text>
        <Text style={styles.edit}>Edit Profile</Text>
        <Text style={styles.save} onPress={onGobak}>
          Save
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.mainRow}>
          <View style={styles.profileView}>
            <Image
              source={imageIndex.userProfile}
              style={styles.userImg}
              resizeMode="cover"
            />
            <View style={styles.camerView}>
              <Image
                source={imageIndex.camera}
                style={styles.cameraStyle}
                resizeMode="cover"
              />
            </View>
          </View>
          <InputContainer placeholder="Alfredo Ross" labelSecond="Name" />
          <InputContainer
            placeholder="akshaysyal@gmail.com"
            labelSecond="Email Id"
            keyboardType="email-address"
            closeImage
          />
          <InputContainer
            placeholder="+91 9876543210"
            labelSecond="Mobile Number"
            keyboardType="decimal-pad"
          />
          <InputContainer
            placeholder="********"
            placeholderTextColor={'green'}
            labelSecond="Bio"
          />
        </View>
      </ScrollView>
      <View style={styles.buttView}>
        <Button
          label="Save"
          containerStyle={styles.containerStyle}
          onPress={onGobak}
        />
      </View>
    </View>
  );
};

export default EditProfile;
