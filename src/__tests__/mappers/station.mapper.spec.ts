import { Station as DGEGStation } from '@dafcoe/dgeg-client';
import { Station as MineTurStation } from '@dafcoe/minetur-client';
import { mapDGEGStationsToStations, mapMineTurStationsToStations } from '../../mappers';
import { Station } from '../../types';
import {
  avLiberdadeDgegStationWithFuelsFixture,
  avLiberdadeStationFixture,
  castellanaMineTurStationWithFuelsFixture,
  castellanaStationFixture,
  granViaMineTurStationWithFuelsFixture,
  granViaStationFixture,
  rotundaMarquesDgegStationWithFuelsFixture,
  rotundaMarquesStationFixture,
} from '../fixtures/station.fixture';

describe('mapDGEGStationsToStations', () => {
  describe('when an empty array is provided', () => {
    it('should return an empty array', () => {
      // Assemble
      const dgegStations = [] as DGEGStation[];
      const expectedMappedStations = [] as Station[];

      // Act
      const mappedStations = mapDGEGStationsToStations(dgegStations);

      // Assert
      expect(mappedStations).toEqual(expectedMappedStations);
    });
  });

  describe('when DGEG stations are provided', () => {
    it('should return an array containing station objects with all the expected fields', () => {
      // Assemble
      const dgegStations = [avLiberdadeDgegStationWithFuelsFixture, rotundaMarquesDgegStationWithFuelsFixture];
      const expectedMappedStations = [avLiberdadeStationFixture, rotundaMarquesStationFixture];

      // Act
      const mappedStations = mapDGEGStationsToStations(dgegStations);

      // Assert
      expect(mappedStations).toEqual(expectedMappedStations);
    });
  });
});

describe('mapMineTurStationsToStations', () => {
  describe('when an empty array is provided', () => {
    it('should return an empty array', () => {
      // Assemble
      const mineTurStations = [] as MineTurStation[];
      const expectedMappedStations = [] as Station[];

      // Act
      const mappedStations = mapMineTurStationsToStations(mineTurStations);

      // Assert
      expect(mappedStations).toEqual(expectedMappedStations);
    });
  });

  describe('when MineTur stations are provided', () => {
    it('should return an array containing station objects with all the expected fields', () => {
      // Assemble
      const mineTurStations = [granViaMineTurStationWithFuelsFixture, castellanaMineTurStationWithFuelsFixture];
      const expectedMappedStations = [granViaStationFixture, castellanaStationFixture];

      // Act
      const mappedStations = mapMineTurStationsToStations(mineTurStations);

      // Assert
      expect(mappedStations).toEqual(expectedMappedStations);
    });
  });
});
