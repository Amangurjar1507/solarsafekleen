import React, {FC} from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {
  Button,
  CustomStatusbar,
  InputContainer,
} from '../../../components/componentsIndex';
import SvgIndex from '../../../assets/svgIndex';
import imageIndex from '../../../assets/imageIndex';
import useSignUp from './useSignUp';
import styles from './signUp.style';
import color from '../../../theme/color';

const SignUp: FC = () => {
  const {
    email,
    setEmail,
    onPressLogin,
    mobileNumber,
    setMobileNumber,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
  } = useSignUp();

  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
      source={imageIndex.imageBackground}>
      <CustomStatusbar
        backgroundColor={color.transparent}
        translucent={true}
        barStyle="light-content"
      />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.homeImageView}>
            <SvgIndex.homeLogo />
          </View>
          <View style={styles.mainViewModal}>
            <View style={styles.row}>
              <Text style={styles.headingText}>Sign up</Text>
              <View style={styles.formContainer}>
                <InputContainer
                  placeholder="akshaysyal@gmail.com"
                  labelSecond="E-mail"
                  keyboardType="email-address"
                  closeImage
                  value={email}
                  onChangeText={setEmail}
                />
                <InputContainer
                  placeholder="+91 9876543210"
                  placeholderTextColor={'green'}
                  labelSecond="Mobile Number"
                  keyboardType="decimal-pad"
                  value={mobileNumber}
                  onChangeText={setMobileNumber}
                />
                <InputContainer
                  placeholder="********"
                  placeholderTextColor={'green'}
                  labelSecond="Password"
                  eyesShow
                  value={password}
                  onChangeText={setPassword}
                  returnKeyType="Done"
                  hideText={true}
                />
                <InputContainer
                  placeholder="********"
                  placeholderTextColor={'green'}
                  labelSecond="Confirm Password"
                  eyesShow
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  returnKeyType="Done"
                  hideText={true}
                />
                <Button
                  label="Sign Up"
                  containerStyle={styles.btnStyle}
                  isLoading={loading}
                />
              </View>
            </View>
            <View style={styles.btnContainer}>
              <Text
                style={styles.dontIfDont}
                allowFontScaling={false}
                onPress={onPressLogin}>
                Log In
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default SignUp;
