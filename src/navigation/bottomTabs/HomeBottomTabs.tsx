import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import CustomHomeBottomTabs from './CustomHomeBottomTabs';
import Home from '../../screens/bottomScreen/home/Home';
import UserProfile from '../../screens/bottomScreen/profileScreen/userProfile/UserProfile';
import Booking from '../../screens/bottomScreen/booking/Booking';
import color from '../../theme/color';
import SearchAddress from '../../screens/bottomScreen/searchAddress/SearchAddress';

const Tab = createBottomTabNavigator();

const HomeBottomTabs = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomHomeBottomTabs {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: color.white,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{unmountOnBlur: true}}
      />
      <Tab.Screen
        name={'SearchAddress'}
        component={SearchAddress}
        options={{unmountOnBlur: true}}
      />
      <Tab.Screen
        name={'Booking'}
        component={Booking}
        options={{unmountOnBlur: true}}
      />
       <Tab.Screen
        name={'UserProfile'}
        component={UserProfile}
        options={{unmountOnBlur: true}}
      />
    </Tab.Navigator>
  );
};
export default HomeBottomTabs;
