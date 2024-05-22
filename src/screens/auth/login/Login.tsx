import React, {FC} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './login.style';
import useLogin from './useLogin';
import {
  Button,
  CustomStatusbar,
  InputContainer,
} from '../../../components/componentsIndex';
import SvgIndex from '../../../assets/svgIndex';
import color from '../../../theme/color';

const Login: FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    onClickSignUp,
    onClickForgot,
    loading,
    validateLogin,
    errorObject,
  } = useLogin();

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
        style={styles.keyboardView}>
        <KeyboardAvoidingView
          style={styles.keyboardView}
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
                  Log in
                </Animatable.Text>
                <Animatable.View
                  duration={3000}
                  animation={'fadeInRightBig'}
                  style={styles.formContainer}>
                  <InputContainer
                    placeholder="E-mail"
                    labelSecond="E-mail"
                    placeholderTextColor={color.label}
                    keyboardType="email-address"
                    returnKeyType="Done"
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
                    placeholder="Password"
                    placeholderTextColor={'green'}
                    labelSecond="Password"
                    value={password}
                    onChangeText={(text: string) => {
                      setPassword(text.trim());
                    }}
                    returnKeyType="Done"
                    hideText={true}
                    error={errorObject.passwordError}
                  />
                  <Button
                    label="Log in"
                    containerStyle={styles.btnStyle}
                    onPress={validateLogin}
                    isLoading={loading}
                  />
                  <TouchableOpacity
                    style={styles.forgotPassButton}
                    activeOpacity={0.8}>
                    <Text
                      allowFontScaling={false}
                      onPress={onClickForgot}
                      style={styles.forgotPasswordLabel}>
                      Forget Password ?
                    </Text>
                  </TouchableOpacity>
                </Animatable.View>
              </View>
              <View style={styles.btnContainer}>
                <Animatable.View
                  style={styles.formContainer}
                  duration={2500}
                  animation={'bounceInRight'}>
                  <Text
                    style={styles.dontIfDont}
                    allowFontScaling={false}
                    onPress={onClickSignUp}>
                    Sign Up
                  </Text>
                </Animatable.View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Animatable.View>
    </View>
  );
};

export default Login;
