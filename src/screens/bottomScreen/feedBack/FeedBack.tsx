import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './feedBack.style';
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
import useFeedBack from './useFeedBack';
import {Rating} from 'react-native-ratings';
import React from 'react';

const FeedBack = () => {
  const {onCancleBooking} = useFeedBack();
  const [rating, setRating] = React.useState(0);

  return (
    <View style={styles.container}>
      <CustomStatusbar
        backgroundColor={color.white}
        translucent={true}
        barStyle="dark-content"
      />
      <Header
        backIconsShown
        lable="#5245687"
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
                              item.type != 'Completed'
                                ? color.buttBlue
                                : color.textLightYellow,
                          },
                        ]}>
                        <Text
                          style={[
                            styles.accText,
                            {
                              color:
                                item.type !== 'Completed'
                                  ? color.textBlue
                                  : color.orangeText,
                            },
                          ]}>
                          Completed
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
          <View style={styles.mainView}>
            <View style={styles.viewCard}>
              <View style={styles.texView}>
                <Text style={styles.name}>Level Ray</Text>
                <View style={styles.startView}>
                  <Image
                    source={imageIndex.starOrange}
                    style={styles.startImg}
                    resizeMode="cover"
                  />
                  <Text style={styles.rating}>4.7</Text>
                  <Text style={styles.viewRatings}>193 Ratings</Text>
                </View>
              </View>
              <Image
                source={imageIndex.userProfile}
                style={styles.userProfile}
                resizeMode="cover"
              />
            </View>
            <View style={styles.addressView}>
              <Text style={styles.addText}>
                job Completed at 04:30 PM or Friend, 22 Mrach 21
              </Text>
            </View>
          </View>

          <View style={styles.satrView}>
            <View style={styles.startCard}>
              <View style={styles.startRow}>
                <Text style={styles.name}>Your Rating</Text>
                <View style={styles.yourStaring}>
                  <Rating
                    rating={rating}
                    setRating={() => setRating(rating)}
                    size={11}
                    imageSize={18}
                    maxStars={4}
                    bordered={false}
                  />
                  <Text style={styles.ratingView}>12</Text>
                </View>
              </View>
            </View>
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
            label="Give FeedBack"
            containerStyle={styles.containerStyle}
            onPress={onCancleBooking}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default FeedBack;
