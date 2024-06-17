import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';

import {theme} from '~/themes';
import {IAddressIp} from '~/types';

const {colors, spacing} = theme;

interface IAddressIpDetails {
  data?: [IAddressIp];
  isLoading: boolean;
}

const AddressIpItem = ({label, value}: IAddressIp) => {
  return (
    <View style={styles.addressIpItemContainer}>
      <Text style={styles.title}>{label}</Text>
      <Text numberOfLines={1} style={styles.text}>
        {value}
      </Text>
    </View>
  );
};

export const AddressIpDetails = (props: IAddressIpDetails) => {
  const {data, isLoading = false} = props;

  if (!data && !isLoading) {
    return (
      <View style={styles.errorContainer}>
        <Text style={[styles.text, {fontSize: moderateScale(12)}]}>
          Invalid Typed IP
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {data?.map(({label, value}: IAddressIp) => {
        return <AddressIpItem label={label} value={value} key={label} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: scale(spacing.l),
  },
  errorContainer: {
    backgroundColor: colors.danger,
    justifyContent: 'center',
    alignItems: 'center',
    height: scale(45),
    marginTop: scale(spacing.m),
    marginHorizontal: scale(35),
  },
  addressIpItemContainer: {
    padding: spacing.s,
    backgroundColor: colors.primary,
    justifyContent: 'space-around',
    height: scale(90),
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: colors.background,
  },
  text: {
    color: colors.background,
    fontSize: moderateScale(10),
    maxWidth: scale(90),
  },
});
