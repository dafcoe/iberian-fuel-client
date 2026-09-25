import { DGEGClient } from '@dafcoe/dgeg-client';
import { DGEGAdapter } from '../../adapters';
import * as mappers from '../../mappers';
import {
  avLiberdadeDgegStationWithFuelsFixture,
  avLiberdadeStationFixture,
  rotundaMarquesDgegStationWithFuelsFixture,
  rotundaMarquesStationFixture,
} from '../__fixtures__/station.fixture';

describe('DGEGAdapter', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('constructor', () => {
    describe('when no client is provided', () => {
      it('should create an instance with a default DGEGClient', () => {
        // Act
        const adapter = new DGEGAdapter();

        // Assert
        expect(adapter).toBeInstanceOf(DGEGAdapter);
      });
    });
  });

  describe('getStations', () => {
    it('should fetch stations from the client and map them to domain stations', async () => {
      // Assemble
      const mockDgegStations = [
        avLiberdadeDgegStationWithFuelsFixture,
        rotundaMarquesDgegStationWithFuelsFixture,
      ];
      const expectedStations = [
        avLiberdadeStationFixture,
        rotundaMarquesStationFixture,
      ];

      const mockClient = {
        getStations: vi.fn().mockResolvedValue(mockDgegStations),
      } as unknown as DGEGClient;

      const mapSpy = vi.spyOn(mappers, 'mapDGEGStationsToStations');

      const adapter = new DGEGAdapter(mockClient);

      // Act
      const stations = await adapter.getStations();

      // Assert
      expect(mockClient.getStations).toHaveBeenCalledTimes(1);
      expect(mapSpy).toHaveBeenCalledWith(mockDgegStations);
      expect(stations).toEqual(expectedStations);
    });
  });
});
