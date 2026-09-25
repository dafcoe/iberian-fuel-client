import { Station as DGEGStation } from '@dafcoe/dgeg-client';
import { Station as MineTurStation } from '@dafcoe/minetur-client';
import { COUNTRY_NAME } from '../../constants';
import { Address } from '../../types';

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

export const rotundaMarquesDgegStationFixture: DGEGStation = {
  id: 2,
  name: 'BP Porto',
  brand: 'BP',
  district: 'Porto',
  municipality: 'Porto',
  address: 'Rotunda da Boavista, 50',
  town: 'Porto',
  postalCode: '4100-130',
  latitude: 41.1579,
  longitude: -8.6291,
  fuels: [],
};

export const castellanaMineTurStationFixture: MineTurStation = {
  id: 'ES-002',
  brand: 'Cepsa',
  address: 'Paseo de la Castellana, 200',
  town: 'Madrid',
  postalCode: '28046',
  latitude: 40.4605,
  longitude: -3.6882,
  schedule: 'L-D: 00:00-24:00',
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

export const rotundaMarquesAddressFixture: Address = {
  street: 'Rotunda da Boavista, 50',
  postalCode: '4100-130',
  town: 'Porto',
  municipality: 'Porto',
  district: 'Porto',
  country: COUNTRY_NAME.PT,
  latitude: 41.1579,
  longitude: -8.6291,
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

export const castellanaAddressFixture: Address = {
  street: 'Paseo de la Castellana, 200',
  postalCode: '28046',
  town: 'Madrid',
  municipality: 'Madrid',
  district: 'Madrid',
  country: COUNTRY_NAME.ES,
  latitude: 40.4605,
  longitude: -3.6882,
};
