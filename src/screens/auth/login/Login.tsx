import React, {FC} from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './login.style';
import useLogin from './useLogin';
import {
  Button,
  CustomStatusbar,
  InputContainer,
} from '../../../components/componentsIndex';
import SvgIndex from '../../../assets/svgIndex';
import imageIndex from '../../../assets/imageIndex';
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
    <ImageBackground
      style={styles.container}
      source={imageIndex.imageBackground}
      resizeMode="cover">
      <CustomStatusbar
        backgroundColor={color.transparent}
        translucent={true}
        barStyle="light-content"
      />
      <KeyboardAvoidingView
        style={{flex: 1}}
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
              <Text style={styles.headingText}>Log in</Text>
              <View style={styles.formContainer}>
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
              </View>
            </View>
            <View style={styles.btnContainer}>
              <Text
                style={styles.dontIfDont}
                allowFontScaling={false}
                onPress={onClickSignUp}>
                Sign Up
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Login;
