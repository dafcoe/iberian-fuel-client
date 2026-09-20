import { Station as DGEGStation } from '@dafcoe/dgeg-client';
import { COUNTRY_NAME } from '../constants';
import { Address } from '../types';

export function mapDGEGStationToAddress(dgegStation: DGEGStation): Address {
  return {
    street: dgegStation.address,
    postalCode: dgegStation.postalCode,
    town: dgegStation.town,
    municipality: dgegStation.municipality,
    district: dgegStation.district,
    country: COUNTRY_NAME.PT,
    latitude: dgegStation.latitude,
    longitude: dgegStation.longitude,
  };
}
