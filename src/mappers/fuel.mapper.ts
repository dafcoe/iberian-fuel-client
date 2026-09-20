import { StationFuel as DGEGStationFuel } from '@dafcoe/dgeg-client';
import { StationFuel as MineTurStationFuel } from '@dafcoe/minetur-client';
import { normalizePrice } from '../normalizers';
import { Fuel } from '../types';

function mapDGEGStationFuelToFuel(dgegStationFuel: DGEGStationFuel): Fuel {
  return {
    id: String(dgegStationFuel.id),
    name: dgegStationFuel.name,
    price: normalizePrice(dgegStationFuel.price),
    updatedAt: new Date(dgegStationFuel.updatedAt),
  };
}

export function mapDGEGStationFuelsToFuels(dgegStationFuels: DGEGStationFuel[]): Fuel[] {
  return dgegStationFuels.map(mapDGEGStationFuelToFuel);
}

function mapMineTurStationFuelToFuel(mineTurStationFuel: MineTurStationFuel): Fuel {
  return {
    id: String(mineTurStationFuel.id),
    name: mineTurStationFuel.name,
    price: normalizePrice(mineTurStationFuel.price),
    updatedAt: new Date(mineTurStationFuel.updatedAt),
  };
}

export function mapMineTurStationFuelsToFuels(mineTurStationFuels: MineTurStationFuel[]): Fuel[] {
  return mineTurStationFuels.map(mapMineTurStationFuelToFuel);
}
