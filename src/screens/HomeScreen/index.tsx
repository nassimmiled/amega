import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import SwiperFlatList from 'react-native-swiper-flatlist';

import {imagesAssets} from '~/assets';
import {AddressIpDetails, Button, Input} from '~/components';
import {PROFILE} from '~/constants';
import {useAddressIpDetails} from '~/hooks';
import {theme} from '~/themes';

const {colors, spacing} = theme;

const {image1, image2, image3} = imagesAssets;

const picturesList = [image1, image2, image3];

export const HomeScreen = () => {
  const navigation = useNavigation<any>();

  const [addressIp, setAddressIp] = useState<string>();
  const [submittedAddressIp, setSubmittedAddressIp] = useState<string>();

  const {data, isLoading} = useAddressIpDetails(submittedAddressIp);

  const handleChangeAddressIp = (value?: string) => {
    setAddressIp(value);
  };

  const onPressSelectImage = (item: ImageSourcePropType) => {
    navigation.navigate(PROFILE, {
      image: item,
      addressDetails: data,
    });
  };

  const onSubmitAddressIp = () => {
    setSubmittedAddressIp(addressIp);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          onChange={handleChangeAddressIp}
          value={addressIp}
          placeholder="Please type Address IP"
          style={{height: scale(40)}}
        />

        <Button
          title="Submit"
          style={styles.submitButton}
          onPress={onSubmitAddressIp}
        />
      </View>
      <AddressIpDetails data={data} isLoading={isLoading} />
      <SwiperFlatList
        autoplay
        autoplayDelay={2}
        autoplayLoop
        data={picturesList}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => onPressSelectImage(item)}>
            <Image source={item} resizeMode="contain" style={styles.image} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(spacing.l),
  },
  submitButton: {
    backgroundColor: colors.primary,
    borderRadius: scale(6),
    paddingVertical: scale(10),
    marginEnd: scale(spacing.l),
  },

  image: {
    width: scale(250),
    height: verticalScale(250),
    marginHorizontal: scale(7),
  },
});
