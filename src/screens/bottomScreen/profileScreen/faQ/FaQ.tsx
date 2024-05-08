import React from 'react';
import {View, ScrollView, Text, FlatList} from 'react-native';
import {
  CustomStatusbar,
  Header,
  SearchBar,
} from '../../../../components/componentsIndex';
import styles from './faQ.style';
import color from '../../../../theme/color';
import {expandAllDataSession} from './constData';
import CollapsibleCard from '../../../../components/card/collapsibleCard/CollapsibleCard';
import useFaQ from './useFaQ';

const FaQ = () => {
  const {} = useFaQ();

  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.white}
        translucent={true}
        barStyle="dark-content"
      />
      <Header backIconsShown lable="Faqs" lableStyle={styles.lableStyle} />
      <View style={styles.rowView}>
        <SearchBar
          searchIcon
          label="Search"
          placeholderTextColor={color.buttGray}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <FlatList
            data={expandAllDataSession}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatListSessionStyle}
            renderItem={({item, index}) => (
              <CollapsibleCard
                containerStyle={styles.collapsibleCardContainerStyle}
                contentStyle={styles.CollapsibleContentStyle}
                title={item?.title}
                collapsedStyle={styles.textCollapsibleStyle}
                smallIconDrop
                content={
                  <View style={styles.contentView}>
                    <View style={styles.sessionRowViewStyle}>
                      <Text style={styles.decTextStyle}>Overhead</Text>
                    </View>
                  </View>
                }
              />
            )}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default FaQ;
