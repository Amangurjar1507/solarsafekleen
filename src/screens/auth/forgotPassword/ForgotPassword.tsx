import React, {FC} from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './forgotPassword.style';
import {
  Button,
  CustomStatusbar,
  Header,
  InputContainer,
} from '../../../components/componentsIndex';
import imageIndex from '../../../assets/imageIndex';
import useForgotPassword from './useForgotPassword';

export interface UserForgotProps {
  email: string;
  loading: boolean;
  
}

const ForgotPassword: FC = () => {
  const {onClickVerify, email,loading, setEmail} = useForgotPassword();

  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
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
          <Header backIconsShown lable="Forgot Password" />
          <View style={styles.mainViewModal}>
            <View style={styles.row}>
              <Text style={styles.headingText}>Forgot Password</Text>
              <View style={styles.formContainer}>
                <InputContainer
                  placeholder="akshaysyal@gmail.com"
                  labelSecond="E-mail"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                />
                <Button
                  label="Submit"
                  containerStyle={styles.btnStyle}
                  onPress={onClickVerify}
                  isLoading={loading}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default ForgotPassword;
