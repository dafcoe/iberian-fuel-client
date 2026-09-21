import { IberianFuelClient } from './clients';

async function run() {
  const client = new IberianFuelClient();

  console.log('Fetching stations...');

  const fetchStartTime = performance.now();
  const stations = await client.getStations();
  const fetchEndTime = performance.now();
  const fetchDuration = (fetchEndTime - fetchStartTime).toFixed(2);

  console.log(`Done in ${fetchDuration} ms.\n`);

  console.log(`${stations.length} stations found:`, stations);

  console.log('\n');
}

run();
