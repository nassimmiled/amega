import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import {imagesAssets} from '~/assets';
import {TabBarIcon} from '~/components';
import {HomeScreen, ProfileScreen} from '~/screens';
import {theme} from '~/themes';

const {colors} = theme;
const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: colors.primary}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} icon={imagesAssets?.home} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} icon={imagesAssets?.profile} />
          ),
        }}
      />
      <Tab.Screen
        name="Market Data"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabBarIcon focused={focused} icon={imagesAssets?.analytics} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
