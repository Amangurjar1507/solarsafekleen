import React from 'react';
import {View, FlatList, ScrollView} from 'react-native';
import {CustomStatusbar, Header} from '../../components/componentsIndex';
import styles from './cleaningControl.style';
import color from '../../theme/color';
import {CleaningPestsory} from './constData';
import useCleaningControl from './useCleaningControl';
import CleaningControlCard from '../../components/card/cleaningControlCard/CleaningControlCard';

const CleaningControl = () => {
  const {onClickProceed} = useCleaningControl();

  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.white}
        translucent={true}
        barStyle="dark-content"
      />
      <Header
        backIconsShown
        lable="Cleaning Control"
        lableStyle={styles.lableStyle}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.mainRow}>
          <FlatList
            data={CleaningPestsory}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
            renderItem={({item, index}) => (
              <CleaningControlCard
                key={index}
                item={item}
                onUserCleaningClick={onClickProceed}
              />
            )}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CleaningControl;
