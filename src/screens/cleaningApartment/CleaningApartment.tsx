import {View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import {
  Button,
  CustomStatusbar,
  Header,
  ModalComponent,
} from '../../components/componentsIndex';
import styles from './cleaningApartment.style';
import color from '../../theme/color';
import {AfternoonTime, OfficerData, dayData} from './constData';
import ApartmentCard from '../../components/card/apartmentCard/ApartmentCard';
import useCleaningApartment from './useCleaningApartment';

const CleaningApartment = () => {
  const {
    selectedItem,
    handleItemSelected,
    morringTime,
    onSelectedMorring,
    modal,
    setModal,
    onPayment,
  } = useCleaningApartment();

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
            data={OfficerData}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
            renderItem={({item, index}) => (
              <ApartmentCard key={index} item={item} />
            )}
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
                  marginTop: 9,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor:
                    selectedItem === item ? color.bluelight : color.label,
                  backgroundColor:
                    selectedItem === item ? '#419CFE' : color.white,
                  marginHorizontal: 8,
                }}>
                <View
                  style={{
                    height: 70,
                    width: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
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
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />

          <Text style={styles.morringText}>Morring</Text>

          <FlatList
            data={OfficerData}
            keyExtractor={(item, index) => `${index}`}
            horizontal
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => onSelectedMorring(item)}
                style={{
                  margin: 12,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor:
                    morringTime === item ? color.bluelight : color.label,
                  backgroundColor:
                    morringTime === item ? color.lightBlue : color.white,
                }}>
                <View style={styles.timeView}>
                  <Text
                    style={[
                      styles.dayText,
                      {
                        color: morringTime === item ? color.butt : color.black,
                      },
                    ]}>
                    {item.time}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />

          <Text style={styles.morringText}>Afternoon</Text>
          <FlatList
            key={`FlatList-${4}`}
            data={AfternoonTime}
            numColumns={4}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => onSelectedMorring(item)}
                style={{
                  margin: 9,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor:
                    morringTime === item ? color.backGray : color.label,
                  backgroundColor:
                    morringTime === item ? color.textGray : color.white,
                }}>
                <View style={styles.timeView}>
                  <Text
                    style={[
                      styles.dayText,
                      {
                        color: morringTime === item ? color.white : color.black,
                      },
                    ]}>
                    {item.time}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
      <View style={styles.maiView}>
        <View style={styles.mainProceed}>
          <View>
            <View style={styles.cardView}>
              <Text style={styles.prices}>$ 164 </Text>
              <Text style={styles.itemTitle}> 1 item</Text>
            </View>
            <Text style={styles.title}>inc .of all taxes</Text>
          </View>
        </View>
        <Button
          label="Proceed"
          containerStyle={{width: '90%', backgroundColor: color.butt}}
          onPress={() => setModal(true)}
        />
      </View>
      <ModalComponent animationType="none" visible={modal}>
        <TouchableOpacity
          style={styles.mainModal}
          onPress={() => setModal(false)}>
          <View style={styles.modalView}>
            <View style={styles.borderColorView} />
            <Text style={styles.confirmation}>Confirmation</Text>
            <Text style={styles.name}>Akshay Syal</Text>
            <Text style={styles.add}>145 Single Street ,USA</Text>
            <View style={styles.row}>
              <Text style={styles.time}>at 11 :30 </Text>
              <Text style={{color: color.backGray}}>Web 19th sep 2001</Text>
            </View>
            <View style={styles.buttView}>
              <Button
                label="Continue"
                containerStyle={styles.containerStyle}
                onPress={onPayment}
              />
              <Button
                label="Cancel"
                containerStyle={styles.containerStylecancel}
                onPress={() => {
                  setModal(false);
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </ModalComponent>
    </View>
  );
};

export default CleaningApartment;
