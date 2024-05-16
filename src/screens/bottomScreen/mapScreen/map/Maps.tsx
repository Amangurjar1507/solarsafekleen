import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {styles} from './styles';
import useMap from './useMap';
import color from '../../../../theme/color';
import {data, tabs} from './CustomData';
import {Button, CustomStatusbar} from '../../../../components/componentsIndex';
import SvgIndex from '../../../../assets/svgIndex';
import OfficeAddressCrad from '../../../../components/card/officeAddressCrad/OfficeAddressCrad';
const Maps = () => {
  const {activeTab, handleTabPress, onCleaningApartment} = useMap();

  const CustomTabs = ({tabs, activeTab, onPress}: any) => {
    return (
      <View style={styles.buttRow}>
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
                styles.topTab,
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
  const HomeTabs = () => {
    return (
      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item, index}) => {
            return <OfficeAddressCrad item={item} key={index} />;
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <CustomStatusbar
        backgroundColor={color.white}
        translucent={true}
        barStyle="dark-content"
      />
      <View>
        <MapView
          style={styles.mapStyle}
          showsUserLocation={false}
          zoomEnabled={true}
          zoomControlEnabled={true}
          initialRegion={{
            latitude: 28.57966,
            longitude: 77.32111,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{latitude: 28.57966, longitude: 77.32111}}
            description={'Java Training Institute'}
          />
        </MapView>
      </View>
      <TouchableOpacity style={styles.backView}>
        <SvgIndex.back />
      </TouchableOpacity>
      <View style={styles.borderView}>
        <View style={styles.border} />
      </View>
      <CustomTabs tabs={tabs} activeTab={activeTab} onPress={handleTabPress} />
      <View style={styles.mainView}>
        <View style={styles.tabRow}>
          {activeTab === 0 && <HomeTabs />}
          {activeTab === 1 && <HomeTabs />}
        </View>
        <View style={styles.buttView}>
          <Button
            label="Continue"
            onPress={onCleaningApartment}
            containerStyle={styles.buttStyle}
          />
        </View>
      </View>
    </View>
  );
};

export default Maps;
 