import React, {FC} from 'react';
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './verifyOtp.style';
import {
  Button,
  CustomStatusbar,
  Header,
} from '../../../components/componentsIndex';
import useVerifyOtp from './useVerifyOtp';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';

const VerifyOtp: FC = () => {
  const {errorObject, route, OTPRef, validateVerify, otp, setOtp, loading} =
    useVerifyOtp();

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
          <Header backIconsShown lable="Verify" />
          <View style={styles.mainViewModal}>
            <View style={styles.row}>
              <Text style={styles.headingText}>Phone number</Text>
              <Text style={styles.otpText}>
                Enter your phone number and get OTP code from RightJoy
              </Text>
              <Text style={styles.emailText}>{route?.params?.email}</Text>
              <View style={styles.formContainer}>
                <CodeField
                  ref={OTPRef}
                  value={otp}
                  onChangeText={(text: string) => setOtp(text)}
                  cellCount={6}
                  keyboardType="decimal-pad"
                  returnKeyType="done"
                  autoFocus
                  rootStyle={styles.codeFieldRoot}
                  textContentType="oneTimeCode"
                  onSubmitEditing={() => Keyboard.dismiss()}
                  autoComplete={Platform.select({
                    android: 'sms-otp',
                    default: 'one-time-code',
                  })}
                  testID="my-code-input"
                  renderCell={({index, symbol, isFocused}) => (
                    <Text
                      key={index}
                      style={[styles.cell, isFocused && styles.focusCell]}>
                      {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                  )}
                />
                {errorObject.otpError && (
                  <Text style={styles.otpError}>{errorObject.otpError}</Text>
                )}
                <Button
                  label="Submit"
                  containerStyle={styles.btnStyle}
                  onPress={validateVerify}
                  isLoading={loading}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default VerifyOtp;
