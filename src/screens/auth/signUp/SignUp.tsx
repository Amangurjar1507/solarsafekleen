import React, {FC} from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
  Animated,
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
    loading,
    validateSignup,
    errorObject,
    inputTranslateY,
    buttonOpacity,
  } = useSignUp();

 
  return (
    <View style={styles.container}>

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
              <Text allowFontScaling={false} style={styles.headingText}>
                Sign up
              </Text>
              <Animated.View
                style={{
                  transform: [{translateY: inputTranslateY}],
                  opacity: buttonOpacity,
                }}>
                <View style={styles.formContainer}>
                  <InputContainer
                    placeholder="E-mail"
                    labelSecond="E-mail"
                    keyboardType="email-address"
                    closeImage
                    value={email}
                    onChangeText={setEmail}
                    error={errorObject.emailError}
                    onPressClose={()=>setEmail('')}
                  />
                  <InputContainer
                    placeholder="Mobile Number"
                    labelSecond="Mobile Number"
                    keyboardType="decimal-pad"
                    value={mobileNumber}
                    onChangeText={setMobileNumber}
                    error={errorObject.mobileNumberError}
                    maxLength={10}
                  />
                  <InputContainer
                    placeholder="Password"
                    placeholderTextColor={'green'}
                    labelSecond="Password"
                    eyesShow
                    value={password}
                    onChangeText={setPassword}
                    returnKeyType="Done"
                    hideText={true}
                    error={errorObject.passwordError}
                  />
                  <Button
                    label="Sign Up"
                    containerStyle={styles.btnStyle}
                    isLoading={loading}
                    onPress={validateSignup}
                  />
                </View>
              </Animated.View>
            </View>
            <Animated.View
              style={{
                transform: [{translateY: inputTranslateY}],
                opacity: buttonOpacity,
              }}>
              <View style={styles.btnContainer}>
                <Text
                  style={styles.dontIfDont}
                  allowFontScaling={false}
                  onPress={onPressLogin}>
                  Log In
                </Text>
              </View>
            </Animated.View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUp;
