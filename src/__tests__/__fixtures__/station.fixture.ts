import { Station as DGEGStation } from '@dafcoe/dgeg-client';
import { Station as MineTurStation } from '@dafcoe/minetur-client';
import { COUNTRY_PREFIX } from '../../constants';
import { Station } from '../../types';
import {
  avLiberdadeAddressFixture,
  avLiberdadeDgegStationFixture,
  castellanaAddressFixture,
  castellanaMineTurStationFixture,
  granViaAddressFixture,
  granViaMineTurStationFixture,
  rotundaMarquesAddressFixture,
  rotundaMarquesDgegStationFixture,
} from './address.fixture';
import {
  dieselADgegFuelFixture,
  dieselAMineTurFuelFixture,
  gasoleoADgegStationFuelFixture,
  gasoleoAMineTurStationFuelFixture,
  gasolina95DgegStationFuelFixture,
  gasolina95MineTurStationFuelFixture,
  gasoline95DgegFuelFixture,
  gasoline95MineTurFuelFixture,
} from './fuel.fixture';

export const avLiberdadeDgegStationWithFuelsFixture: DGEGStation = {
  ...avLiberdadeDgegStationFixture,
  fuels: [gasolina95DgegStationFuelFixture, gasoleoADgegStationFuelFixture],
};

export const rotundaMarquesDgegStationWithFuelsFixture: DGEGStation = {
  ...rotundaMarquesDgegStationFixture,
  fuels: [gasolina95DgegStationFuelFixture, gasoleoADgegStationFuelFixture],
};

export const granViaMineTurStationWithFuelsFixture: MineTurStation = {
  ...granViaMineTurStationFixture,
  fuels: [gasolina95MineTurStationFuelFixture, gasoleoAMineTurStationFuelFixture],
};

export const castellanaMineTurStationWithFuelsFixture: MineTurStation = {
  ...castellanaMineTurStationFixture,
  fuels: [gasolina95MineTurStationFuelFixture, gasoleoAMineTurStationFuelFixture],
};

export const avLiberdadeStationFixture: Station = {
  id: `${COUNTRY_PREFIX.PT}${avLiberdadeDgegStationFixture.id}`,
  name: avLiberdadeDgegStationFixture.name,
  brand: 'Galp',
  address: avLiberdadeAddressFixture,
  fuels: [gasoline95DgegFuelFixture, dieselADgegFuelFixture],
};

export const rotundaMarquesStationFixture: Station = {
  id: `${COUNTRY_PREFIX.PT}${rotundaMarquesDgegStationFixture.id}`,
  name: rotundaMarquesDgegStationFixture.name,
  brand: 'Bp',
  address: rotundaMarquesAddressFixture,
  fuels: [gasoline95DgegFuelFixture, dieselADgegFuelFixture],
};

export const granViaStationFixture: Station = {
  id: `${COUNTRY_PREFIX.ES}${granViaMineTurStationFixture.id}`,
  name: granViaMineTurStationFixture.brand,
  brand: 'Repsol',
  address: granViaAddressFixture,
  fuels: [gasoline95MineTurFuelFixture, dieselAMineTurFuelFixture],
};

export const castellanaStationFixture: Station = {
  id: `${COUNTRY_PREFIX.ES}${castellanaMineTurStationFixture.id}`,
  name: castellanaMineTurStationFixture.brand,
  brand: 'Cepsa',
  address: castellanaAddressFixture,
  fuels: [gasoline95MineTurFuelFixture, dieselAMineTurFuelFixture],
};
