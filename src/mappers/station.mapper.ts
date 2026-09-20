import { Station as DGEGStation } from '@dafcoe/dgeg-client';
import { Station as MineTurStation } from '@dafcoe/minetur-client';
import { COUNTRY_PREFIX } from '../constants';
import { Station } from '../types';
import { mapDGEGStationToAddress, mapMineTurStationToAddress } from './address.mapper';
import { mapDGEGStationFuelsToFuels, mapMineTurStationFuelsToFuels } from './fuel.mapper';

function mapDGEGStationToStation(dgegStation: DGEGStation): Station {
  return {
    id: `${COUNTRY_PREFIX.PT}${dgegStation.id}`,
    name: dgegStation.name,
    brand: dgegStation.brand,
    address: mapDGEGStationToAddress(dgegStation),
    fuels: mapDGEGStationFuelsToFuels(dgegStation.fuels),
  };
}

export function mapDGEGStationsToStations(dgegStations: DGEGStation[]): Station[] {
  return dgegStations.map(mapDGEGStationToStation);
}

function mapMineTurStationToStation(mineTurStation: MineTurStation): Station {
  return {
    id: `${COUNTRY_PREFIX.PT}${mineTurStation.id}`,
    name: mineTurStation.brand,
    brand: mineTurStation.brand,
    address: mapMineTurStationToAddress(mineTurStation),
    fuels: mapMineTurStationFuelsToFuels(mineTurStation.fuels),
  };
}

export function mapMineTurStationsToStations(mineTurStations: MineTurStation[]): Station[] {
  return mineTurStations.map(mapMineTurStationToStation);
}
