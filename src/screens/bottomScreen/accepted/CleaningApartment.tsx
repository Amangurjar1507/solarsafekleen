import {View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';

import styles from './accepted.style';
 import useCleaningControl from './useCleaningProceed';
import {dayData} from './constData';
 import {useState} from 'react';
import { CustomStatusbar, Header } from '../../../components/componentsIndex';
import color from '../../../theme/color';
import ApartmentCard from '../../../components/card/apartmentCard/ApartmentCard';

const CleaningApartment = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const {} = useCleaningControl();

  const handleItemSelected = item => {
    setSelectedItem(item);
  };

  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.white}
        translucent={true}
        barStyle="dark-content"
      />
      <Header
        backIconsShown
        lable="Cockroach Control"
        lableStyle={{color: color.black}}
      />
      <View
        style={{
          borderRadius: 5,
          height: 10,
          backgroundColor: 'grey',
          width: '100%',
          borderColor: 'grey',
          marginTop: 2,
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.mainRow}>
          <FlatList
            data={dayData}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
            renderItem={({item, index}) => (
              <ApartmentCard key={index} item={item} />
            )}
            style={{marginTop: 10}}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
          <Text style={styles.text}>Apartment</Text>
          <FlatList
            data={dayData}
            keyExtractor={(item, index) => `${index}`}
            horizontal
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => handleItemSelected(item)}
                style={{
                  margin: 12,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: selectedItem === item ? color.butt : 'grey',
                  backgroundColor:
                    selectedItem === item ? color.butt : color.white,
                  width: 72,
                }}>
                <View style={{padding: 22}}>
                  <Text
                    style={[
                      styles.dayText,
                      {
                        color:
                          selectedItem === item ? color.white : color.black,
                      },
                    ]}>
                    {item.date}
                  </Text>
                  <Text
                    style={[
                      styles.dayText,
                      {
                        color:
                          selectedItem === item ? color.white : color.black,
                      },
                    ]}>
                    {item.day}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            style={{marginTop: 10}}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />

          <View style={{}}>
            <Text style={{color: 'red', marginTop: 12}}>Morring</Text>

            <FlatList
              data={dayData}
              keyExtractor={(item, index) => `${index}`}
              horizontal
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() => handleItemSelected(item)}
                  style={{
                    margin: 12,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: selectedItem === item ? color.butt : 'grey',
                    backgroundColor:
                      selectedItem === item ? color.butt : color.white,
                  }}>
                  <View style={{padding: 10}}>
                    <Text
                      style={[
                        styles.dayText,
                        {
                          color:
                            selectedItem === item ? color.white : color.black,
                        },
                      ]}>
                      10:66
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              style={{marginTop: 10}}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CleaningApartment;
