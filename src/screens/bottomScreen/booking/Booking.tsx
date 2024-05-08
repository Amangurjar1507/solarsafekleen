import React from 'react';
import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import {CustomStatusbar} from '../../../components/componentsIndex';
import color from '../../../theme/color';
import styles from './booking.style';
import ActiveCard from '../../../components/card/activeCard/ActiveCard';
import CancelBooking from '../../../components/card/cancelBooking/CancelBooking';
import {ActiveData, CancelData, tabs} from './constData';
import useBooking from './useBooking';

const Booking = () => {
  const {handleTabPress, onAccepted, onOngoing, onCancelBooking, activeTab} =
    useBooking(); // State to track active tab
  const CustomTabs = ({tabs, activeTab, onPress}: any) => {
    return (
      <View style={styles.tabsContainer}>
        {tabs?.map(
          (
            tab:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | null
              | undefined,
            index: React.Key | null | undefined,
          ) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.tab,
                activeTab === index && {
                  backgroundColor: color.lightYellow,
                },
              ]}
              onPress={() => onPress(index)}>
              <Text style={styles.tabText}>{tab}</Text>
            </TouchableOpacity>
          ),
        )}
      </View>
    );
  };

  const NewDta = () => {
    return (
      <View>
        <FlatList
          data={ActiveData}
          keyExtractor={(item, index) => {
            return `${index}`;
          }}
          // onOngoing
          renderItem={({item, index}) => (
            <ActiveCard
              key={index}
              item={item}
              onAccepted={() => {
                console.log('item', item);
                if (item.type == 'Ongoing') {
                  onOngoing();
                } else {
                  onAccepted();
                }
              }}
            />
          )}
        />
        <FlatList
          data={CancelData}
          keyExtractor={(item, index) => {
            return `${index}`;
          }}
          renderItem={({item, index}) => (
            <CancelBooking key={index} item={item} onCancle={onCancelBooking} />
          )}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.white}
        translucent={true}
        barStyle="dark-content"
      />
      <View style={styles.mainRow}>
        <CustomTabs
          tabs={tabs}
          activeTab={activeTab}
          onPress={handleTabPress}
        />
        <ScrollView style={styles.scrollViewStyle}>
          {activeTab === 0 && <NewDta />}
          {activeTab === 1 && <NewDta />}
          {activeTab === 2 && <Text>Tab 3 Content</Text>}
        </ScrollView>
      </View>
    </View>
  );
};

export default Booking;
