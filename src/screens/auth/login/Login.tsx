import React, {FC} from 'react';
import {
  Image,
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

export interface LoginProps {
  userLogin: UserLoginProps;
}

export interface UserLoginProps {
  email: string;
  password: string;
  loading: boolean;
}

const Login: FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    onLogin,
    onClickSignUp,
    onClickForgot,
    loading
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
                  placeholder="akshaysyal@gmail.com"
                  labelSecond="E-mail"
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
                />
                <InputContainer
                  placeholder="********"
                  placeholderTextColor={'green'}
                  labelSecond="Password"
                  value={password}
                  onChangeText={(text: string) => {
                    setPassword(text.trim());
                  }}
                  returnKeyType="Done"
                  hideText={true}
                />
                <Button
                  label="Log in"
                  containerStyle={styles.btnStyle}
                   onPress={onLogin}
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
