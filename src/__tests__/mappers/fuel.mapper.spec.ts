import { StationFuel as DGEGStationFuel } from '@dafcoe/dgeg-client';
import { StationFuel as MineTurStationFuel } from '@dafcoe/minetur-client';
import { mapDGEGStationFuelsToFuels, mapMineTurStationFuelsToFuels } from '../../mappers';
import { Fuel } from '../../types';
import {
  dieselADgegFuelFixture,
  dieselAMineTurFuelFixture,
  gasoleoADgegStationFuelFixture,
  gasoleoAMineTurStationFuelFixture,
  gasolina95DgegStationFuelFixture,
  gasolina95MineTurStationFuelFixture,
  gasoline95DgegFuelFixture,
  gasoline95MineTurFuelFixture,
} from '../fixtures/fuel.fixture';

describe('mapDGEGStationFuelsToFuels', () => {
  describe('when an empty array is provided', () => {
    it('should return an empty array', () => {
      // Assemble
      const stationFuels = [] as DGEGStationFuel[];
      const expectedMappedFuels = [] as Fuel[];

      // Act
      const mappedFuels = mapDGEGStationFuelsToFuels(stationFuels);

      // Assert
      expect(mappedFuels).toEqual(expectedMappedFuels);
    });
  });

  describe('when DGEG station fuels are provided', () => {
    it('should return an array containing fuel objects with all the expected fields', () => {
      // Assemble
      const stationFuels = [gasolina95DgegStationFuelFixture, gasoleoADgegStationFuelFixture];
      const expectedMappedFuels = [gasoline95DgegFuelFixture, dieselADgegFuelFixture];

      // Act
      const mappedFuels = mapDGEGStationFuelsToFuels(stationFuels);

      // Assert
      expect(mappedFuels).toEqual(expectedMappedFuels);
    });
  });
});

describe('mapMineTurStationFuelsToFuels', () => {
  describe('when an empty array is provided', () => {
    it('should return an empty array', () => {
      // Assemble
      const stationFuels = [] as MineTurStationFuel[];
      const expectedMappedFuels = [] as Fuel[];

      // Act
      const mappedFuels = mapMineTurStationFuelsToFuels(stationFuels);

      // Assert
      expect(mappedFuels).toEqual(expectedMappedFuels);
    });
  });

  describe('when MineTur station fuels are provided', () => {
    it('should return an array containing fuel objects with all the expected fields', () => {
      // Assemble
      const stationFuels = [gasolina95MineTurStationFuelFixture, gasoleoAMineTurStationFuelFixture];
      const expectedMappedFuels = [gasoline95MineTurFuelFixture, dieselAMineTurFuelFixture];

      // Act
      const mappedFuels = mapMineTurStationFuelsToFuels(stationFuels);

      // Assert
      expect(mappedFuels).toEqual(expectedMappedFuels);
    });
  });
});
