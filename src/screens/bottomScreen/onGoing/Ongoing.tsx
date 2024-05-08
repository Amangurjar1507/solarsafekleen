import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import useOnGoing from './useOnGoing';
import styles from './onGoing.style';
import {
  Button,
  CustomStatusbar,
  Header,
} from '../../../components/componentsIndex';
import color from '../../../theme/color';
import {OfficerData} from './constData';
import ApartmentCard from '../../../components/card/apartmentCard/ApartmentCard';
import {CancelData} from '../booking/constData';
import imageIndex from '../../../assets/imageIndex';

const Ongoing = () => {
  const {onCancleBooking} = useOnGoing();

  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.white}
        translucent={true}
        barStyle="dark-content"
      />
      <Header
        backIconsShown
        lable="#524587"
        lableStyle={{color: color.black}}
      />
      <ScrollView
        style={{flexGrow: 1}}
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
          <FlatList
            data={CancelData}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <View style={styles.cardView}>
                <View style={styles.cardView}>
                  <View style={styles.boaderView}>
                    <View style={styles.textView}>
                      <Text style={styles.codeText}>#52369</Text>
                      <TouchableOpacity
                        style={[
                          styles.buttAcc,
                          {
                            backgroundColor:
                              item.type != 'Accepted'
                                ? color.buttBlue
                                : color.textLightYellow,
                          },
                        ]}>
                        <Text
                          style={[
                            styles.accText,
                            {
                              color:
                                item.type !== 'Accepted'
                                  ? color.textBlue
                                  : color.orangeText,
                            },
                          ]}>
                          Accepted
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.titleView}>
                      <View style={{flexDirection: 'column'}}>
                        <Text style={styles.title}>Tyrone Mitchell</Text>
                        <Text style={styles.title}>Right Joy Pvt</Text>
                        <View style={styles.loactionView}>
                          <Image
                            source={imageIndex.location}
                            style={styles.locationImg}
                            tintColor={color.label}
                            resizeMode="cover"
                          />
                          <Text style={styles.address}>
                            153 Single Stree ,USA
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />

          <View style={styles.cardRed}>
            <Text style={styles.canCellText}>CanCellation Policy</Text>
            <Text style={styles.subTitle}>
              If you cancel than 24 hours before{'\n'}booking, you may be
              charged a canCellation free{'\n'}up to the amount of the servies
              booked.
            </Text>
          </View>
          <View style={styles.orderView}>
            <Text style={styles.orderText}>Order Summary</Text>
            <View style={styles.texRow}>
              <Text style={styles.subTotal}>Subtotal</Text>
              <Text style={styles.prices}>$156.00</Text>
            </View>
            <View style={styles.texRow}>
              <Text style={styles.subTotal}>Est.Tax</Text>
              <Text style={styles.prices}>$12.00</Text>
            </View>
            <View style={styles.border}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalSub}>$168</Text>
            </View>
          </View>
          <Button
            label="Cancel Booking"
            containerStyle={styles.containerStyle}
            nameTextStyle={{color: color.butt}}
            onPress={onCancleBooking}
          />
        </View>
      </ScrollView>
    </View>
  );
};



export default Ongoing;
