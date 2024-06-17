import {ImageSourcePropType} from 'react-native';

export interface IAddressIp {
  label: string;
  value: string;
}

export type ProfileParamsList = {
  Detail: {
    image: ImageSourcePropType;
    addressDetails?: [IAddressIp];
  };
};
