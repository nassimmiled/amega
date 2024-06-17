import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {moderateScale, scale} from 'react-native-size-matters';

import {theme} from '~/themes';

const {spacing, colors} = theme;

interface IButton {
  title: string;
  style: ViewStyle;
  onPress: () => void;
}

export const Button = (props: IButton) => {
  const {title, style, onPress} = props;

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    paddingVertical: scale(spacing.s),
    alignItems: 'center',
  },
  text: {
    color: colors.background,
    fontSize: moderateScale(11),
  },
});
