import { IberianFuelClient } from '../src';
import { KNOWN_BRANDS_MAP, UNKNOWN_BRAND } from '../src/constants';
import { normalizeBrand } from '../src/normalizers';

function reportUnknownBrands(unmappedCounts: Map<string, number>): void {
  const unmappedList = Array.from(unmappedCounts.entries())
    .map(([brand, count]) => ({
      'Fetched Brand': brand,
      'Normalized Brand': normalizeBrand(brand),
      Occurrences: count,
    }))
    .sort((brandA, brandB) => brandB['Occurrences'] - brandA['Occurrences']);

  console.log('===============================================================');
  console.log(` UNKNOWN BRANDS (${unmappedList.length})`);
  console.log('===============================================================');

  if (unmappedList.length > 0) console.table(unmappedList);
  else console.log('No unknown brands found!\n');
}

function reportStaleBrands(matchedKeys: Set<string>): void {
  const staleKeysList = Object.entries(KNOWN_BRANDS_MAP)
    .filter(([key]) => !matchedKeys.has(key))
    .map(([key, value]) => ({
      'Brand Key': key,
      'Brand Name': value,
    }));

  console.log('===============================================================');
  console.log(` STALE BRANDS (${staleKeysList.length})`);
  console.log('===============================================================');

  if (staleKeysList.length > 0) console.table(staleKeysList);
  else console.log('No stale brands found!\n');
}

async function auditBrands(): Promise<void> {
  const client = new IberianFuelClient();

  console.log('Fetching fuel stations...');

  let taskStartTime = performance.now();
  const stations = await client.getStations();
  let taskEndTime = performance.now();
  let taskDuration = (taskEndTime - taskStartTime).toFixed(2);

  console.log(`Done: ${stations.length} stations fetched in ${taskDuration} ms.\n`);

  const unmappedCounts = new Map<string, number>();
  const matchedKeys = new Set<string>();

  console.log('Auditing fetched fuel stations...');

  taskStartTime = performance.now();

  for (const station of stations) {
    const brand = station.brand.trim();

    if (brand === UNKNOWN_BRAND) continue;

    const cleanBrand = brand
      .toUpperCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    let hasMatchInMap = false;

    for (const knownBrandKey of Object.keys(KNOWN_BRANDS_MAP)) {
      const regex = new RegExp(`\\b${knownBrandKey.toUpperCase()}\\b`, 'i');

      if (regex.test(cleanBrand)) {
        matchedKeys.add(knownBrandKey);
        hasMatchInMap = true;
      }
    }

    if (!hasMatchInMap) unmappedCounts.set(brand, (unmappedCounts.get(brand) || 0) + 1);
  }

  taskEndTime = performance.now();
  taskDuration = (taskEndTime - taskStartTime).toFixed(2);

  console.log(`Done in ${taskDuration} ms.\n`);

  reportUnknownBrands(unmappedCounts);
  reportStaleBrands(matchedKeys);
}

auditBrands().catch((error) => {
  console.error('An error has occurred while auditing brands:', error);
  process.exit(1);
});
