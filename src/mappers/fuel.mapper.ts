import { StationFuel as DGEGStationFuel } from '@dafcoe/dgeg-client';
import { Fuel } from '../types';

function mapDGEGStationFuelToFuel(dgegFuel: DGEGStationFuel): Fuel {
  const normalizedPrice = dgegFuel.price
    .replace('€', '')
    .replace(',', '.')
    .trim();

  return {
    id: String(dgegFuel.id),
    name: dgegFuel.name,
    price: parseFloat(normalizedPrice),
    updatedAt: new Date(dgegFuel.updatedAt),
  };
}

export function mapDGEGStationFuelsToFuels(dgegFuels: DGEGStationFuel[]): Fuel[] {
  return dgegFuels.map(mapDGEGStationFuelToFuel);
}
