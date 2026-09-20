import { StationFuel as DGEGStationFuel } from '@dafcoe/dgeg-client';
import { StationFuel as MineTurStationFuel } from '@dafcoe/minetur-client';
import { Fuel } from '../types';

function mapDGEGStationFuelToFuel(dgegStationFuel: DGEGStationFuel): Fuel {
  const normalizedPrice = dgegStationFuel.price
    .replace('€', '')
    .replace(',', '.')
    .trim();

  return {
    id: String(dgegStationFuel.id),
    name: dgegStationFuel.name,
    price: parseFloat(normalizedPrice),
    updatedAt: new Date(dgegStationFuel.updatedAt),
  };
}

export function mapDGEGStationFuelsToFuels(dgegStationFuels: DGEGStationFuel[]): Fuel[] {
  return dgegStationFuels.map(mapDGEGStationFuelToFuel);
}

function mapMineTurStationFuelToFuel(mineTurStationFuel: MineTurStationFuel): Fuel {
  const normalizedPrice = mineTurStationFuel.price.replace(',', '.').trim();

  return {
    id: String(mineTurStationFuel.id),
    name: mineTurStationFuel.name,
    price: parseFloat(normalizedPrice),
    updatedAt: new Date(mineTurStationFuel.updatedAt),
  };
}

export function mapMineTurStationFuelsToFuels(mineTurStationFuels: MineTurStationFuel[]): Fuel[] {
  return mineTurStationFuels.map(mapMineTurStationFuelToFuel);
}
