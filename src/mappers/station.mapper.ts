import { Station as DGEGStation } from '@dafcoe/dgeg-client';
import { COUNTRY_PREFIX } from '../constants';
import { Station } from '../types';
import { mapDGEGStationToAddress } from './address.mapper';
import { mapDGEGStationFuelsToFuels } from './fuel.mapper';

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
