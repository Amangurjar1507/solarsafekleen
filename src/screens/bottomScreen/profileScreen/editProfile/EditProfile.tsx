import React from 'react';
import {View, Image, Text, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
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
  const {
    onGobak,
    validateEdit,
    loading,
    email,
    setEmail,
    setPassword,
    setMobileNumber,
    mobileNumber,
    errorObject,
  } = useEditProfile();

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
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
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
            placeholder={"Email"}
            labelSecond="Email Id"
            keyboardType="email-address"
            closeImage
            onPressClose={() => {
              setEmail('');
            }}
            value={email}
            onChangeText={(text: string) => {
              setEmail(text.trim());
            }}
            error={errorObject.emailError}
          />
          <InputContainer
            placeholder={"Mobile Number"}
            labelSecond="Mobile Number"
            keyboardType="decimal-pad"
            value={mobileNumber}
            onChangeText={(text: string) => {
              setMobileNumber(text.trim());
            }}
            maxLength={10}
            error={errorObject.mobileNumberError}
          />
          {/* <InputContainer
            placeholder="********"
             labelSecond="Bio"
             value={pass}

            onChangeText={(text: string) => {
              setMobileNumber(text.trim());
            }}
          /> */}
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.buttView}>
        <Button
          label="Save"
          containerStyle={styles.containerStyle}
          onPress={validateEdit}
          isLoading={loading}
        />
      </View>
    </View>
  );
};

export default EditProfile;
