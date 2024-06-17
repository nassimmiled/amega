import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

import {
  GET_ADDRESS_IP_DETAILS,
  IP_ADDRESS,
  ISP,
  LOCATION,
  TIME_ZONE,
  WHO_IP_URL,
} from '~/constants';
import {IAddressIp} from '~/types';

const getCustomerAddresses = async (addressIp?: string) => {
  return await axios.get(`${WHO_IP_URL}/${addressIp || ''}`);
};

export const useAddressIpDetails = (addressIp?: string) => {
  return useQuery({
    queryKey: [GET_ADDRESS_IP_DETAILS, addressIp],
    queryFn: () => getCustomerAddresses(addressIp),
    select: ({data}) => {
      if (data?.success) {
        return [
          {label: IP_ADDRESS, value: data.ip},
          {label: LOCATION, value: `${data.country}, ${data.region}`},
          {label: TIME_ZONE, value: data.timezone.utc},
          {label: ISP, value: data.connection.isp},
        ] as unknown as [IAddressIp];
      }
      return;
    },
  });
};
