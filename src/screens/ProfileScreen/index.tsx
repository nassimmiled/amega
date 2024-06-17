import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {scale} from 'react-native-size-matters';

import {AddressIpDetails} from '~/components';
import {ProfileParamsList} from '~/types';
import {theme} from '~/themes';

const {spacing} = theme;

export const ProfileScreen = () => {
  const route = useRoute<RouteProp<ProfileParamsList, 'Detail'>>();

  const {image, addressDetails} = route?.params || {};

  if (!image) {
    return;
  }

  return (
    <View>
      <Image source={image} resizeMode="cover" style={styles.image} />
      <AddressIpDetails data={addressDetails} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: scale(150),
    width: '90%',
    alignSelf: 'center',
    marginVertical: scale(spacing.xl),
  },
});
