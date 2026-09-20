import { Station as DGEGStation } from '@dafcoe/dgeg-client';
import { Station as MineTurStation } from '@dafcoe/minetur-client';
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

export function mapMineTurStationToAddress(mineTurStation: MineTurStation): Address {
  return {
    street: mineTurStation.address,
    postalCode: mineTurStation.postalCode,
    town: mineTurStation.town,
    municipality: mineTurStation.municipality,
    district: mineTurStation.district,
    country: COUNTRY_NAME.ES,
    latitude: mineTurStation.latitude,
    longitude: mineTurStation.longitude,
  };
}
