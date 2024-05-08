import React, {FC, memo, useRef, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './inputContainer.style';
import SvgIndex from '../../../assets/svgIndex';
import color from '../../../theme/color';
import imageIndex from '../../../assets/imageIndex';
import font from '../../../theme/font';

const InputContainer: FC<any> = ({
  inputContainerStyle,
  placeholder,
  error,
  onChangeText,
  value,
  keyboardType,
  container,
  multiline,
  numberOfLines,
  inputStyle,
  editable,
  maxLength,
  labelSecond,
  closeImage,
  secureText,
  hideText,
  onPressClose,
}) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean | undefined>(
    secureText || false,
  );
  const inputRef = useRef<TextInput>(null);
  const [isFouse, setIsFouse] = useState<boolean | undefined>(false);
  const checkIsFocusedHandler = () => {
    let result = inputRef.current?.isFocused();
    setIsFouse(result);
  };

  return (
    <View style={[styles.container, container]}>
      <Text style={styles.labelSecond}>{labelSecond}</Text>
      <View
        style={[
          styles.inputContainer,
          {borderColor: isFouse ? color.butt : color.label},
        ]}>
        <TextInput
          ref={inputRef}
          style={styles.inputStyle}
          placeholder={placeholder}
          placeholderTextColor={color.placeholderText}
          onFocus={checkIsFocusedHandler}
          onEndEditing={checkIsFocusedHandler}
          secureTextEntry={passwordVisible}
          autoCapitalize="none"
          autoCorrect={false}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          multiline={multiline}
          editable={editable}
          numberOfLines={numberOfLines}
          maxLength={maxLength}
        />
        {closeImage && (
          <TouchableOpacity style={{right: 12}} activeOpacity={0.8} onPress={onPressClose}>
            <SvgIndex.close  />
          </TouchableOpacity>
        )}
        {hideText && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setPasswordVisible(!passwordVisible)}>
            {passwordVisible ? (
              <Image
                source={imageIndex.hide}
                style={styles.eyes}
                tintColor={color.label}
              />
            ) : (
              <Image
                source={imageIndex.eyes}
                style={styles.eyes}
                tintColor={color.label}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorLabel}>{error}</Text>}
    </View>
  );
};

export default memo(InputContainer);
