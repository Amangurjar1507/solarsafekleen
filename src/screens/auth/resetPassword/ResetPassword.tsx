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
import imageIndex from '../../../assets/imageIndex';
import useForgotPassword from './useResetPassword';
import styles from './resetPassword.style';
import SvgIndex from '../../../assets/svgIndex';

export interface UserForgotProps {
  email: string;
  loading: boolean;
}

const ResetPassword: FC = () => {
  const {
    errorObject,
    buttonOpacity,
    inputTranslateY,
    password,
    loading,
    validateForgot,
    setPassword,
    confirmpassword,
    setConfirmpassword,
  } = useForgotPassword();
  return (
    <View style={styles.container}>

      <CustomStatusbar translucent={true} barStyle="light-content" />
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
              <Text style={styles.headingText}>Reset Password</Text>
              <Animated.View
                style={{
                  transform: [{translateY: inputTranslateY}],
                  opacity: buttonOpacity,
                }}>
                <View style={styles.formContainer}>
                  <InputContainer
                    placeholder="Password"
                    labelSecond="Password"
                    value={password}
                    onChangeText={(text: string) => {
                      setPassword(text.trim());
                    }}
                    returnKeyType="Done"
                    hideText={true}
                    error={errorObject.passwordError}
                  />
                  <InputContainer
                    placeholder="Confirm Password"
                    labelSecond="Confirm Password"
                    value={confirmpassword}
                    onChangeText={(text: string) => {
                      setConfirmpassword(text.trim());
                    }}
                    returnKeyType="Done"
                    hideText={true}
                    error={errorObject.confirmError}
                  />
                  <Button
                    label="Submit"
                    containerStyle={styles.btnStyle}
                    onPress={validateForgot}
                    isLoading={loading}
                  />
                </View>
              </Animated.View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ResetPassword;
