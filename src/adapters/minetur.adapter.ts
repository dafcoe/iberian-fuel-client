import { MineTurClient } from '@dafcoe/minetur-client';
import { mapMineTurStationsToStations } from '../mappers';
import { Station } from '../types';

export class MineTurAdapter {
  constructor(
    private readonly client: MineTurClient = new MineTurClient(),
  ) {}

  /**
   * Get all stations from Spain.
   */
  async getStations(): Promise<Station[]> {
    const stations = await this.client.getStations();

    return mapMineTurStationsToStations(stations);
  }
}
