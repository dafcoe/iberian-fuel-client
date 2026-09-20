import { DGEGClient } from '@dafcoe/dgeg-client';
import { mapDGEGStationsToStations } from '../mappers';
import { Station } from '../types';

export class DGEGAdapter {
  constructor(
    private readonly client: DGEGClient = new DGEGClient(),
  ) {}

  /**
   * Get all stations from Portugal.
   */
  async getStations(): Promise<Station[]> {
    const stations = await this.client.getStations();

    return mapDGEGStationsToStations(stations);
  }
}
