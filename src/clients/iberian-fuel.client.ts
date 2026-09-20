import { DGEGAdapter, MineTurAdapter } from '../adapters';
import { Station } from '../types';

export class IberianFuelClient {
  constructor(
    private readonly dgegAdapter: DGEGAdapter = new DGEGAdapter(),
    private readonly mineTurAdapter: MineTurAdapter = new MineTurAdapter(),
  ) {}

  /**
   * Get all stations from Portugal, Spain or both.
   */
  async getStations(): Promise<Station[]> {
    const [ptStations, esStations] = await Promise.allSettled([
      await this.dgegAdapter.getStations(),
      await this.mineTurAdapter.getStations(),
    ]);

    const stations: Station[] = [];

    if (ptStations.status === 'fulfilled') stations.push(...ptStations.value);
    if (esStations.status === 'fulfilled') stations.push(...esStations.value);

    return stations;
  }
}
