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
import styles from './forgotPassword.style';
import {
  Button,
  CustomStatusbar,
  Header,
  InputContainer,
} from '../../../components/componentsIndex';
 import useForgotPassword from './useForgotPassword';

export interface UserForgotProps {
  email: string;
  loading: boolean;
}

const ForgotPassword: FC = () => {
  const {
    errorObject,
    buttonOpacity,
    inputTranslateY,
    email,
    loading,
    setEmail,
    validateForgot,
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
          <Header backIconsShown lable="Forgot Password" />
          <View style={styles.mainViewModal}>
            <View style={styles.row}>
              <Text style={styles.headingText}>Forgot Password</Text>
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
                    value={email}
                    onChangeText={setEmail}
                    error={errorObject.emailError}
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

export default ForgotPassword;
