import { mapDGEGStationToAddress, mapMineTurStationToAddress } from '../../mappers';
import {
  avLiberdadeAddressFixture,
  avLiberdadeDgegStationFixture,
  granViaAddressFixture,
  granViaMineTurStationFixture,
} from '../fixtures/address.fixture';

describe('mapDGEGStationToAddress', () => {
  it('should map the address from the DGEG station data', () => {
    // Assemble
    const station = avLiberdadeDgegStationFixture;
    const expectedMappedAddress = avLiberdadeAddressFixture;

    // Act
    const mappedAddress = mapDGEGStationToAddress(station);

    // Assert
    expect(mappedAddress).toEqual(expectedMappedAddress);
  });
});

describe('mapMineTurStationToAddress', () => {
  it('should map the address from the MineTur station data', () => {
    // Assemble
    const station = granViaMineTurStationFixture;
    const expectedMappedAddress = granViaAddressFixture;

    // Act
    const mappedAddress = mapMineTurStationToAddress(station);

    // Assert
    expect(mappedAddress).toEqual(expectedMappedAddress);
  });
});
