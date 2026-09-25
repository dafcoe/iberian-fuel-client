import { MineTurClient } from '@dafcoe/minetur-client';
import { MineTurAdapter } from '../../adapters';
import * as mappers from '../../mappers';
import {
  castellanaMineTurStationWithFuelsFixture,
  castellanaStationFixture,
  granViaMineTurStationWithFuelsFixture,
  granViaStationFixture,
} from '../__fixtures__/station.fixture';

describe('MineTurAdapter', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('constructor', () => {
    describe('when no client is provided', () => {
      it('should create an instance with a default MineTurClient', () => {
        // Act
        const adapter = new MineTurAdapter();

        // Assert
        expect(adapter).toBeInstanceOf(MineTurAdapter);
      });
    });
  });

  describe('getStations', () => {
    it('should fetch stations from the client and map them to domain stations', async () => {
      // Assemble
      const mockMineTurStations = [
        granViaMineTurStationWithFuelsFixture,
        castellanaMineTurStationWithFuelsFixture,
      ];
      const expectedStations = [
        granViaStationFixture,
        castellanaStationFixture,
      ];

      const mockClient = {
        getStations: vi.fn().mockResolvedValue(mockMineTurStations),
      } as unknown as MineTurClient;

      const mapSpy = vi.spyOn(mappers, 'mapMineTurStationsToStations');

      const adapter = new MineTurAdapter(mockClient);

      // Act
      const stations = await adapter.getStations();

      // Assert
      expect(mockClient.getStations).toHaveBeenCalledTimes(1);
      expect(mapSpy).toHaveBeenCalledWith(mockMineTurStations);
      expect(stations).toEqual(expectedStations);
    });
  });
});
