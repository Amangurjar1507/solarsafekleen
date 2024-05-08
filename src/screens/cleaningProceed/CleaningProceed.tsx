import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {
  Button,
  CustomStatusbar,
  Header,
} from '../../components/componentsIndex';
import styles from './cleaningProceed.style';
import color from '../../theme/color';
import {CleaningPestsory, OfficerData} from './constData';
import useCleaningControl from './useCleaningProceed';
import CleaningProceedCard from '../../components/card/cleaningProceedCard/CleaningProceedCard';
import OfficesPestCrad from '../../components/card/officesPestCrad/OfficesPestCrad';

const CleaningProceed = () => {
  const {onNavigation} = useCleaningControl();

  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.white}
        translucent={true}
        barStyle="dark-content"
      />
      <Header
        backIconsShown
        lable="Cockroach Control "
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
              <CleaningProceedCard key={index} item={item} />
            )}
            style={styles.flatList}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.mainRow}>
          <FlatList
            data={OfficerData}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
            renderItem={({item, index}) => (
              <OfficesPestCrad key={index} item={item} />
            )}
            style={styles.flatList}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
      <View style={styles.cardView}>
        <View style={styles.rowView}>
          <View>
            <View style={styles.textView}>
              <Text style={styles.prices}>$ 164 </Text>
              <Text style={styles.item}>1 item</Text>
            </View>
            <Text style={styles.titleText}>inc .of all taxes</Text>
          </View>
        </View>
        <Button
          label="Proceed"
          containerStyle={styles.containerStyle}
          onPress={onNavigation}
        />
      </View>
    </View>
  );
};

export default CleaningProceed;
