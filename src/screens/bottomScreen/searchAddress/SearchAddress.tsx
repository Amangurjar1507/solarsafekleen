import {View} from 'react-native';
import styles from './searchAddress.style';
import {CustomStatusbar, SearchBar} from '../../../components/componentsIndex';
import color from '../../../theme/color';
import React from 'react';
import useSearchAddress from './useSearchAddress';

const SearchAddress = () => {
  const {} = useSearchAddress();

  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.white}
        translucent={true}
        barStyle="dark-content"
      />
      <View style={styles.row}>
        <SearchBar
          searchIcon
          label="Search"
          placeholderTextColor={color.buttGray}
        />
      </View>
    </View>
  );
};

export default SearchAddress;
