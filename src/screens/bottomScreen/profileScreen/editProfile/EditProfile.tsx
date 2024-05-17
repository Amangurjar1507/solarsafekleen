import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {
  Button,
  CustomStatusbar,
  InputContainer,
  ModalComponent,
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
    uploadImage,
    modalVisible,
    setModalVisible,
    SelectCamera,
    showImage,
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
              {showImage ? (
                <Image
                  source={{uri: showImage}}
                  style={styles.userImg}
                  resizeMode="cover"
                />
              ) : (
                <Image
                  source={imageIndex.userProfile}
                  style={styles.userImg}
                  resizeMode="cover"
                />
              )}

              <TouchableOpacity
                style={styles.camerView}
                onPress={() => setModalVisible(true)}>
                <Image
                  source={imageIndex.camera}
                  style={styles.cameraStyle}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
            <InputContainer placeholder="Alfredo Ross" labelSecond="Name" />
            <InputContainer
              placeholder={'Email'}
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
              placeholder={'Mobile Number'}
              labelSecond="Mobile Number"
              keyboardType="decimal-pad"
              value={mobileNumber}
              onChangeText={(text: string) => {
                setMobileNumber(text.trim());
              }}
              maxLength={10}
              error={errorObject.mobileNumberError}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <ModalComponent animationType="none" visible={modalVisible}>
        <TouchableOpacity
          style={styles.modalView}
          onPress={() => setModalVisible(false)}>
          <View style={styles.mainModal}>
            <TouchableOpacity
              onPress={uploadImage}
              style={styles.camera}
              activeOpacity={0.7}>
              <Text style={styles.chooseText}>Choose from gallery </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={SelectCamera}
              style={styles.galleryView}>
              <Text style={styles.chooseText}>Choose from camera</Text>
            </TouchableOpacity>
            <View style={styles.buttView}>
              <Button
                label="Cancel"
                containerStyle={styles.containerStyle}
                nameTextStyle={{color: color.red}}
                onPress={() => {
                  setModalVisible(false);
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </ModalComponent>
      <View style={styles.buttView}>
        <Button
          label="Save"
          containerStyle={styles.saveContainerStyle}
          onPress={validateEdit}
          isLoading={loading}
        />
      </View>
    </View>
  );
};

export default EditProfile;
