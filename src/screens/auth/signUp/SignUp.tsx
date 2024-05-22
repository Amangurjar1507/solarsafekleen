import React, {FC} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
 } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {
  Button,
  CustomStatusbar,
  InputContainer,
} from '../../../components/componentsIndex';
import SvgIndex from '../../../assets/svgIndex';
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
      <Animatable.View
        animation="fadeInDown"
        direction="normal"
        duration={3000}
        style={styles.container}>
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
                <Animatable.Text
                  duration={3000}
                  animation={'fadeInRightBig'}
                  style={styles.headingText}>
                  Sign up
                </Animatable.Text>
                <Animatable.View duration={3000} animation={'fadeInRightBig'}>
                  <View style={styles.formContainer}>
                    <InputContainer
                      placeholder="E-mail"
                      labelSecond="E-mail"
                      keyboardType="email-address"
                      closeImage
                      value={email}
                      onChangeText={setEmail}
                      error={errorObject.emailError}
                      onPressClose={() => setEmail('')}
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
                </Animatable.View>
              </View>
              <Animatable.View
                style={styles.formContainer}
                duration={2500}
                animation={'bounceInRight'}>
                <View style={styles.btnContainer}>
                  <Text
                    style={styles.dontIfDont}
                    allowFontScaling={false}
                    onPress={onPressLogin}>
                    Log In
                  </Text>
                </View>
              </Animatable.View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Animatable.View>
    </View>
  );
};

export default SignUp;
