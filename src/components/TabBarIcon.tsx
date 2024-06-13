import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

import {theme} from '~/themes';

const {colors, spacing} = theme;

interface ITabBarIcon {
  icon: ImageSourcePropType;
  focused: boolean;
}
export const TabBarIcon = (props: ITabBarIcon) => {
  const {icon, focused} = props;

  return (
    <View style={styles.container}>
      <Image
        source={icon}
        style={styles.icon}
        tintColor={focused ? colors.primary : colors.foreground}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: scale(spacing.m),
    height: verticalScale(spacing.m),
    marginTop: verticalScale(spacing.s),
  },
});
