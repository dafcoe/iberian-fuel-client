import { DGEGAdapter, MineTurAdapter } from '../../adapters';
import { IberianFuelClient } from '../../clients';
import {
  avLiberdadeStationFixture,
  castellanaStationFixture,
  granViaStationFixture,
  rotundaMarquesStationFixture,
} from '../__fixtures__/station.fixture';

describe('IberianFuelClient', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('constructor', () => {
    describe('when no adapters are provided', () => {
      it('should create an instance with default DGEGAdapter and MineTurAdapter', () => {
        // Act
        const client = new IberianFuelClient();

        // Assert
        expect(client).toBeInstanceOf(IberianFuelClient);
      });
    });

    describe('when custom adapters are provided', () => {
      it('should create an instance with the provided adapters', () => {
        // Assemble
        const mockDgegAdapter = {} as DGEGAdapter;
        const mockMineTurAdapter = {} as MineTurAdapter;

        // Act
        const client = new IberianFuelClient(mockDgegAdapter, mockMineTurAdapter);

        // Assert
        expect(client).toBeInstanceOf(IberianFuelClient);
      });
    });
  });

  describe('getStations', () => {
    describe('when both adapters resolve successfully', () => {
      it('should fetch stations from both adapters and return combined stations', async () => {
        // Assemble
        const ptStations = [avLiberdadeStationFixture, rotundaMarquesStationFixture];
        const esStations = [granViaStationFixture, castellanaStationFixture];

        const mockDgegAdapter = {
          getStations: vi.fn().mockResolvedValue(ptStations),
        } as unknown as DGEGAdapter;

        const mockMineTurAdapter = {
          getStations: vi.fn().mockResolvedValue(esStations),
        } as unknown as MineTurAdapter;

        const client = new IberianFuelClient(mockDgegAdapter, mockMineTurAdapter);

        // Act
        const stations = await client.getStations();

        // Assert
        expect(mockDgegAdapter.getStations).toHaveBeenCalledTimes(1);
        expect(mockMineTurAdapter.getStations).toHaveBeenCalledTimes(1);
        expect(stations).toEqual([...ptStations, ...esStations]);
      });
    });

    describe('when DGEG adapter fails and MineTur adapter succeeds', () => {
      it('should return only Spanish stations without throwing an error', async () => {
        // Assemble
        const esStations = [granViaStationFixture, castellanaStationFixture];

        const mockDgegAdapter = {
          getStations: vi.fn().mockRejectedValue(new Error('Network error')),
        } as unknown as DGEGAdapter;

        const mockMineTurAdapter = {
          getStations: vi.fn().mockResolvedValue(esStations),
        } as unknown as MineTurAdapter;

        const client = new IberianFuelClient(mockDgegAdapter, mockMineTurAdapter);

        // Act
        const stations = await client.getStations();

        // Assert
        expect(mockDgegAdapter.getStations).toHaveBeenCalledTimes(1);
        expect(mockMineTurAdapter.getStations).toHaveBeenCalledTimes(1);
        expect(stations).toEqual(esStations);
      });
    });

    describe('when MineTur adapter fails and DGEG adapter succeeds', () => {
      it('should return only Portuguese stations without throwing an error', async () => {
        // Assemble
        const ptStations = [avLiberdadeStationFixture, rotundaMarquesStationFixture];

        const mockDgegAdapter = {
          getStations: vi.fn().mockResolvedValue(ptStations),
        } as unknown as DGEGAdapter;

        const mockMineTurAdapter = {
          getStations: vi.fn().mockRejectedValue(new Error('Network error')),
        } as unknown as MineTurAdapter;

        const client = new IberianFuelClient(mockDgegAdapter, mockMineTurAdapter);

        // Act
        const stations = await client.getStations();

        // Assert
        expect(mockDgegAdapter.getStations).toHaveBeenCalledTimes(1);
        expect(mockMineTurAdapter.getStations).toHaveBeenCalledTimes(1);
        expect(stations).toEqual(ptStations);
      });
    });

    describe('when both adapters fail', () => {
      it('should return an empty array without throwing an error', async () => {
        // Assemble
        const mockDgegAdapter = {
          getStations: vi.fn().mockRejectedValue(new Error('Network error')),
        } as unknown as DGEGAdapter;

        const mockMineTurAdapter = {
          getStations: vi.fn().mockRejectedValue(new Error('Network error')),
        } as unknown as MineTurAdapter;

        const client = new IberianFuelClient(mockDgegAdapter, mockMineTurAdapter);

        // Act
        const stations = await client.getStations();

        // Assert
        expect(mockDgegAdapter.getStations).toHaveBeenCalledTimes(1);
        expect(mockMineTurAdapter.getStations).toHaveBeenCalledTimes(1);
        expect(stations).toEqual([]);
      });
    });

    describe('when both adapters return empty results', () => {
      it('should return an empty array', async () => {
        // Assemble
        const mockDgegAdapter = {
          getStations: vi.fn().mockResolvedValue([]),
        } as unknown as DGEGAdapter;

        const mockMineTurAdapter = {
          getStations: vi.fn().mockResolvedValue([]),
        } as unknown as MineTurAdapter;

        const client = new IberianFuelClient(mockDgegAdapter, mockMineTurAdapter);

        // Act
        const stations = await client.getStations();

        // Assert
        expect(mockDgegAdapter.getStations).toHaveBeenCalledTimes(1);
        expect(mockMineTurAdapter.getStations).toHaveBeenCalledTimes(1);
        expect(stations).toEqual([]);
      });
    });
  });
});
