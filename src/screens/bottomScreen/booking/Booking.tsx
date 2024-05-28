import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {CustomStatusbar} from '../../../components/componentsIndex';
import color from '../../../theme/color';
import styles from './booking.style';
import ActiveCard from '../../../components/card/activeCard/ActiveCard';
import CancelBooking from '../../../components/card/cancelBooking/CancelBooking';
import {ActiveData, CancelData, tabs} from './constData';
import useBooking from './useBooking';

const Booking = () => {
  const {handleTabPress, onAccepted, onOngoing, onCancelBooking, activeTab} = useBooking();

  const CustomTabs = ({tabs, activeTab, onPress}:any) => (
    <View style={styles.tabsContainer}>
      {tabs?.map((tab:number, index:number) => (
        <TouchableOpacity
          key={index}
          style={[styles.tab, activeTab === index && {backgroundColor: color.lightYellow}]}
          onPress={() => onPress(index)}>
          <Text style={styles.tabText}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <FlatList
            data={ActiveData}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({item}) => (
              <ActiveCard
                item={item}
                onAccepted={() => {
                   if (item?.type === 'Ongoing') {
                    onOngoing();
                  } else {
                    onAccepted();
                  }
                }}
              />
            )}
          />
        );
      case 1:
        return (
          <FlatList
            data={CancelData}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({item}) => (
              <CancelBooking key={item.id} item={item} onCancel={onCancelBooking} />
            )}
          />
        );
      case 2:
        return <Text>Tab 3 Content</Text>;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <CustomStatusbar backgroundColor={color.white} translucent={true} barStyle="dark-content" />
      <View style={styles.mainRow}>
        <CustomTabs tabs={tabs} activeTab={activeTab} onPress={handleTabPress} />
        <View style={styles.scrollViewStyle}>
          {renderActiveTabContent()}
        </View>
      </View>
    </View>
  );
};

export default Booking;
