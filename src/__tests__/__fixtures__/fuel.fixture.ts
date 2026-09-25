import { StationFuel as DGEGStationFuel } from '@dafcoe/dgeg-client';
import { StationFuel as MineTurStationFuel } from '@dafcoe/minetur-client';
import { FUEL_NAME } from '../../constants';
import { Fuel } from '../../types';

export const gasolina95DgegStationFuelFixture: DGEGStationFuel = {
  id: 10,
  name: 'Gasolina 95 E5',
  price: '1,759',
  measurementUnit: '€/L',
  updatedAt: '2024-06-01T12:00:00',
};

export const gasoleoADgegStationFuelFixture: DGEGStationFuel = {
  id: 20,
  name: 'Gasóleo A Habitual',
  price: '1,599',
  measurementUnit: '€/L',
  updatedAt: '2024-06-01T12:00:00',
};

export const gasolina95MineTurStationFuelFixture: MineTurStationFuel = {
  id: 'A',
  name: 'Gasolina 95 E5',
  abbreviation: 'G95E5',
  price: '1.759',
  updatedAt: 1717243200000,
};

export const gasoleoAMineTurStationFuelFixture: MineTurStationFuel = {
  id: 'B',
  name: 'Gasóleo A Habitual',
  abbreviation: 'GOA',
  price: '1.599',
  updatedAt: 1717243200000,
};

export const gasoline95DgegFuelFixture: Fuel = {
  id: '10',
  name: FUEL_NAME.GASOLINE_95,
  price: 1.759,
  updatedAt: new Date('2024-06-01T12:00:00'),
};

export const dieselADgegFuelFixture: Fuel = {
  id: '20',
  name: FUEL_NAME.DIESEL,
  price: 1.599,
  updatedAt: new Date('2024-06-01T12:00:00'),
};

export const gasoline95MineTurFuelFixture: Fuel = {
  id: 'A',
  name: FUEL_NAME.GASOLINE_95,
  price: 1.759,
  updatedAt: new Date(1717243200000),
};

export const dieselAMineTurFuelFixture: Fuel = {
  id: 'B',
  name: FUEL_NAME.DIESEL,
  price: 1.599,
  updatedAt: new Date(1717243200000),
};
