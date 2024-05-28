import React from 'react';
import { View, FlatList } from 'react-native';
import { CustomStatusbar, Header } from '../../components/componentsIndex';
import styles from './cleaningControl.style';
import color from '../../theme/color';
import { CleaningPestsory } from './constData';
import useCleaningControl from './useCleaningControl';
import CleaningControlCard from '../../components/card/cleaningControlCard/CleaningControlCard';

const CleaningControl = () => {
  const { onClickProceed } = useCleaningControl();

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
      <FlatList
        data={CleaningPestsory}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item, index }) => (
          <CleaningControlCard
            item={item}
            index={index}  // Pass index as a separate prop
            onUserCleaningClick={onClickProceed}
          />
        )}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.mainRow}
      />
    </View>
  );
};

export default CleaningControl;
