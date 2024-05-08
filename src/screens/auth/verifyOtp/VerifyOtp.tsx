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
import imageIndex from '../../../assets/imageIndex';
import useVerifyOtp from './useVerifyOtp';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';

export interface UserVerifyProps {
  otp: string;
  loading: boolean;
}

const VerifyOtp: FC = () => {
  const {
    ref,
    errorObject,
    props,
    validateVerify,
    getCellOnLayoutHandler,
    value,
    setValue,
    loading,
  } = useVerifyOtp();

  return (
    <ImageBackground
      style={styles.container}
      source={imageIndex.imageBackground}>
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
              <View style={styles.formContainer}>
                <CodeField
                  ref={ref}
                  {...props}
                  value={value?.replace(/[-./,|]/g, '')}
                  onChangeText={(res: any) => {
                    setValue(res);
                    res?.length === 6 && Keyboard.dismiss();
                  }}
                  cellCount={6}
                  autoFocus
                  rootStyle={styles.codeFieldRoot}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  returnKeyType="done"
                  onSubmitEditing={() => Keyboard.dismiss()}
                  autoComplete={Platform.select({
                    android: 'sms-otp',
                    default: 'one-time-code',
                  })}
                  testID="my-code-input"
                  renderCell={({index, symbol, isFocused}) => (
                    <Text
                      key={index}
                      style={[styles.cell, isFocused && styles.focusCell]}
                      onLayout={getCellOnLayoutHandler(index)}>
                      {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                  )}
                />
                {errorObject.otpError && (
                  <Text style={{color: 'red'}}>{errorObject.otpError}</Text>
                )}
                <Button
                  label="Submit"
                  containerStyle={styles.btnStyle}
                  onPress={validateVerify}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default VerifyOtp;
