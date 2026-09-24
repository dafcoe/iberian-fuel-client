import { Station as DGEGStation } from '@dafcoe/dgeg-client';
import { Station as MineTurStation } from '@dafcoe/minetur-client';
import { Address } from '../../types';
import { COUNTRY_NAME } from '../../constants';

export const avLiberdadeDgegStationFixture: DGEGStation = {
  id: 1,
  name: 'Galp Lisboa',
  brand: 'Galp',
  district: 'Lisboa',
  municipality: 'Lisboa',
  address: 'Av. da Liberdade, 100',
  town: 'Lisboa',
  postalCode: '1250-096',
  latitude: 38.7169,
  longitude: -9.1427,
  fuels: [],
};

export const granViaMineTurStationFixture: MineTurStation = {
  id: 'ES-001',
  brand: 'Repsol',
  address: 'Calle Gran Vía, 1',
  town: 'Madrid',
  postalCode: '28013',
  latitude: 40.4168,
  longitude: -3.7038,
  schedule: 'L-D: 06:00-22:00',
  margin: 'N',
  municipality: 'Madrid',
  idMunicipality: '28079',
  district: 'Madrid',
  idDistrict: '28',
  idRegion: '13',
  saleType: 'P',
  remission: 'OM',
  bioEthanolPercentage: '0',
  methylEsterPercentage: '0',
  fuels: [],
};

export const avLiberdadeAddressFixture: Address = {
  street: 'Av. da Liberdade, 100',
  postalCode: '1250-096',
  town: 'Lisboa',
  municipality: 'Lisboa',
  district: 'Lisboa',
  country: COUNTRY_NAME.PT,
  latitude: 38.7169,
  longitude: -9.1427,
};

export const granViaAddressFixture: Address = {
  street: 'Calle Gran Vía, 1',
  postalCode: '28013',
  town: 'Madrid',
  municipality: 'Madrid',
  district: 'Madrid',
  country: COUNTRY_NAME.ES,
  latitude: 40.4168,
  longitude: -3.7038,
};
