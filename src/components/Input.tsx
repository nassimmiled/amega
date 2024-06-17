import React, {memo} from 'react';
import {StyleSheet, TextInput, TextStyle} from 'react-native';
import {scale} from 'react-native-size-matters';

import {theme} from '~/themes';

const {spacing, colors} = theme;

interface IInput {
  placeholder?: string;
  onChange: (value?: string) => void;
  value?: string;
  style?: TextStyle;
}

export const Input = memo((props: IInput) => {
  const {placeholder, onChange, value, style} = props;

  const handleChange = (text: string) => {
    onChange(text);
  };

  return (
    <TextInput
      value={value}
      onChangeText={handleChange}
      style={[styles.input, style]}
      placeholder={placeholder}
    />
  );
});

const styles = StyleSheet.create({
  input: {
    borderColor: colors.primary,
    borderWidth: 1,
    margin: scale(spacing.m),
    paddingHorizontal: scale(spacing.m),
    borderRadius: scale(9),
    flex: 2,
  },
});
