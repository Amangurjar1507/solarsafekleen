import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {CustomStatusbar, Header} from '../../../../components/componentsIndex';
import styles from './privacyPolicy.style';
import color from '../../../../theme/color';

const PrivacyPolicy = () => {
  const data = [
    'Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum ',
  ];
  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.white}
        translucent={true}
        barStyle="dark-content"
      />
      <Header
        backIconsShown
        lable="Privacy Policy"
        lableStyle={styles.lableStyle}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Text style={styles.title}> Accepets of the Prives Polies</Text>
        {data.map(iteam => {
          return (
            <View>
              <Text style={styles.name}>{iteam}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicy;
