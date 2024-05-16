import React, {FC, memo} from 'react';
import {
  Image,
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styles from './searchBar.style';
import color from '../../../theme/color';
import SvgIndex from '../../../assets/svgIndex';
import imageIndex from '../../../assets/imageIndex';
interface SearchBarProps {
  containerStyle?: StyleProp<ViewStyle> | undefined;
  searchView?: StyleProp<ViewStyle> | undefined;
  label?: string | undefined;
  inputStyle?: StyleProp<TextStyle> | undefined;
  inputValue?: string | undefined;
  setValue?: (value: string) => void | undefined;
  placeholderTextColor?: string;
  onSubmitEditing?: () => void;
  inputProps?: TextInputProps | undefined;
  image?: boolean | undefined;
  crossIcon?: any;
  returnKeyType?: any;
  showAddIcon?: boolean | undefined;
  showFilterIcon?: boolean;
  showFolderIcon?: boolean;
  onPressAddIcon?: () => void;
  onPressFilterIcon?: () => void;
  onPressFolderIcon?: () => void;
  addIconContainerStyle?: ViewStyle;
  filterIconContainerStyle?: ViewStyle;
  folderIconContainerStyle?: ViewStyle;
  searchIcon?: any;
}
const SearchBar: FC<SearchBarProps> = ({
  containerStyle,
  searchView,
  label,
  inputStyle,
  inputValue,
  setValue,
  placeholderTextColor,
  returnKeyType,
  onSubmitEditing,
  inputProps,
  showFilterIcon,
  showAddIcon,
  showFolderIcon,
  onPressAddIcon,
  onPressFilterIcon,
  onPressFolderIcon,
  addIconContainerStyle,
  filterIconContainerStyle,
  folderIconContainerStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.searchView, searchView]}>
        {props?.searchIcon && (
          <View style={styles.imgSearchView}>
            <Image
              resizeMode="contain"
              source={imageIndex.search}
              style={styles.seachImg}
            />
          </View>
        )}
        <TextInput
          allowFontScaling={false}
          placeholder={label}
          style={[styles.searchInputStyle, inputStyle]}
          value={inputValue}
          onChangeText={setValue}
          selectionColor={color.buttGray}
          placeholderTextColor={placeholderTextColor}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          {...inputProps}
        />
      </View>
      {showFilterIcon && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.filterView, filterIconContainerStyle]}
          onPress={onPressFilterIcon}>
          <SvgIndex.back />
        </TouchableOpacity>
      )}
      {showAddIcon && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.filterView, addIconContainerStyle]}
          onPress={onPressAddIcon}>
          <SvgIndex.back />
        </TouchableOpacity>
      )}
      {showFolderIcon && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.folderBtnView, folderIconContainerStyle]}
          onPress={onPressFolderIcon}>
          <SvgIndex.back />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default memo(SearchBar);
