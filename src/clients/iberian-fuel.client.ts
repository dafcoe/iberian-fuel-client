import { DGEGAdapter } from '../adapters';
import { Station } from '../types';

export class IberianFuelClient {
  constructor(
    private readonly dgegAdapter: DGEGAdapter = new DGEGAdapter(),
  ) {}

  /**
   * Get all stations from Portugal, Spain or both.
   */
  async getStations(): Promise<Station[]> {
    const [ptStations] = await Promise.allSettled([
      await this.dgegAdapter.getStations(),
    ]);

    const stations: Station[] = [];

    if (ptStations.status === 'fulfilled') stations.push(...ptStations.value);

    return stations;
  }
}
