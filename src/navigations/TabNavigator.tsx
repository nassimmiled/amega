import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {ImageSourcePropType} from 'react-native';

import {imagesAssets} from '~/assets';
import {TabBarIcon} from '~/components';
import {HOME, MARKET_DATA, PROFILE} from '~/constants';
import {HomeScreen, MarketDataScreen, ProfileScreen} from '~/screens';
import {theme} from '~/themes';
import {IAddressIp} from '~/types';

const {colors} = theme;

type TabNavigatorParamList = {
  [HOME]: undefined;
  [PROFILE]: {image: ImageSourcePropType; AddressIpDetails: [IAddressIp]};
  [MARKET_DATA]: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: colors.primary}}>
      <Tab.Screen
        name={HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} icon={imagesAssets?.home} />
          ),
        }}
      />
      <Tab.Screen
        name={PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} icon={imagesAssets?.profile} />
          ),
        }}
      />
      <Tab.Screen
        name={MARKET_DATA}
        component={MarketDataScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} icon={imagesAssets?.analytics} />
          ),
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
};
