import { IberianFuelClient } from './clients';

async function run() {
  const client = new IberianFuelClient();

  const stations = await client.getStations();
  console.log(`${stations.length} stations found:`, stations);

  console.log('\n');
}

run();
