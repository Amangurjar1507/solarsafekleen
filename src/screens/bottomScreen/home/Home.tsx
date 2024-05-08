import React from 'react';
import {View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import {CustomStatusbar, SearchBar} from '../../../components/componentsIndex';
import DashbordHeader from '../../../components/common/dashbordHeader/DashbordHeader';
import styles from './home.style';
import color from '../../../theme/color';
import {
  BestOfferOn,
  CleaningPestsory,
  NextOfferOn,
  NextThingOn,
  SalonSory,
  ServicesData,
} from './constData';
import SeviesCard from '../../../components/card/seviesCard/SeviesCard';
import CleaningPestCard from '../../../components/card/cleaningPestCard/CleaningPestCard';
import NextThinkCard from '../../../components/card/nextThinkCard/NextThinkCard';
import OfferCard from '../../../components/card/offerCard/OfferCard';
import CarouselCard from '../../../components/card/carouselCard/CarouselCard';
import useHome from './useHome';

const Home = () => {
  const {handlePageChange, onClickCleaning, activeIndex, setActiveIndex} =
    useHome();

  const renderPaginationDots = () => {
    return (
      <View style={styles.mainCard}>
        {NextThingOn.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handlePageChange(index)}
            style={[
              styles.dot,
              index === activeIndex ? {backgroundColor: color.butt} : null,
            ]}
          />
        ))}
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
      <DashbordHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.mainRow}>
          <SearchBar
            searchIcon
            label="Search"
            placeholderTextColor={color.buttGray}
          />
          <FlatList
            data={NextThingOn}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
            renderItem={({item, index}) => (
              <CarouselCard key={index} item={item} />
            )}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={event => {
              const slideSize = event.nativeEvent.layoutMeasurement.width;
              const index = event.nativeEvent.contentOffset.x / slideSize;
              setActiveIndex(Math.floor(index));
            }}
          />
          {renderPaginationDots()}

          <View style={styles.textView}>
            <Text style={styles.seviesText}>Servies</Text>
            <TouchableOpacity style={styles.textRow}>
              <Text style={styles.viewText}>View all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={ServicesData}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
            renderItem={({item, index}) => (
              <SeviesCard key={index} item={item}
              onUserSevies={onClickCleaning}
              />
            )}
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.textView}>
            <Text style={styles.seviesText}>Cleaning $ {'\n'}pest control</Text>
            <TouchableOpacity style={styles.textRow} onPress={onClickCleaning}>
              <Text style={styles.viewText}>View all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={CleaningPestsory}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
            renderItem={({item, index}) => (
              <CleaningPestCard key={index} item={item}
              onUserCleaningClick={onClickCleaning}
              />
            )}
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.textView}>
            <Text style={styles.seviesText}>Our Best Servies</Text>
            <TouchableOpacity style={styles.textRow}>
              <Text style={styles.viewText}>View all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={SalonSory}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
            renderItem={({item, index}) => (
              <CleaningPestCard key={index} item={item}
              
              onUserCleaningClick={onClickCleaning}
              />
            )}
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />

          <View style={styles.textView}>
            <Text style={styles.seviesText}>Next Think{'\n'}on Your Mind</Text>
            <TouchableOpacity style={styles.textRow}>
              <Text style={styles.viewText}>View all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={NextOfferOn}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
            renderItem={({item, index}) => (
              <NextThinkCard key={index} item={item} />
            )}
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.textView}>
            <Text style={styles.seviesText}>Offers</Text>
            <TouchableOpacity style={styles.textRow}>
              <Text style={styles.viewText}>View all</Text>
              <Text style={styles.viewText}> ll</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={BestOfferOn}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
            renderItem={({item, index}) => (
              <OfferCard key={index} item={item} />
            )}
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;