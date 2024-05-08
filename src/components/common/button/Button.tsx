import React, {FC, memo} from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  ColorValue,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import style from './button.style';
import color from '../../../theme/color';

interface ButtonProps {
  label: string;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  isLoading?: boolean;
  activityProps?: ActivityIndicatorProps;
  nameTextStyle?: StyleProp<TextStyle> | undefined;
  onPress?: () => void;
  buttonProps?: TouchableOpacityProps;
  backgroundColor?: ColorValue | undefined;
  disabled?: boolean;
  marginHorizontal?: number;
  inActive?: boolean;
}

const Button: FC<ButtonProps> = ({
  label,
  activityProps,
  buttonProps,
  containerStyle,
  isLoading,
  nameTextStyle,
  onPress,
  disabled,
  marginHorizontal,
  inActive,
  ...props
}) => {
  return (
    <View style={[style.marginContainer, {marginHorizontal: marginHorizontal}]}>
      <TouchableOpacity
        style={[style.container, containerStyle]}
        activeOpacity={0.8}
        onPress={onPress}
        disabled={disabled || inActive}
        {...buttonProps}>
        {isLoading ? (
          <ActivityIndicator
            size="small"
            style={style.indicatorStyle}
            {...activityProps}
            color={color.white}
          />
        ) : (
          <Text style={[style.nameStyle, nameTextStyle]}>{label}</Text>
        )}
        {/* <View style={style.iconView}> */}
        {/* </View> */}
      </TouchableOpacity>
    </View>
  );
};

export default memo(Button);
