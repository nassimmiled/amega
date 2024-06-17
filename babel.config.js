module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  overrides: [
    {
      plugins: [
        [
          '@babel/plugin-transform-private-methods',
          {
            loose: true,
          },
        ],
      ],
    },
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~/themes': './src/themes',
          '~/assets': './src/assets',
          '~/screens': './src/screens',
          '~/hooks': './src/hooks',
          '~/navigations': './src/navigations',
          '~/constants': './src/constants',
          '~/components': './src/components',
          '~/types': './src/types',
        },
      },
    ],
  ],
};
