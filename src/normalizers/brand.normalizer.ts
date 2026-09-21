import { KNOWN_BRANDS_MAP, UNKNOWN_BRAND } from '../constants';
import { toTitleCase } from '../formatters';

type BrandPatternType = {
  pattern: RegExp;
  brand: string;
};

type BrandAccumulatorsType = {
  brandMatchMap: Map<string, string>;
  precompiledBrandPatterns: BrandPatternType[];
};

function cleanBrand(brand: string): string {
  return brand
    .trim()
    .toUpperCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function initBrandAccumulators(): BrandAccumulatorsType {
  const brandMatchMap = new Map<string, string>();
  const precompiledBrandPatterns: BrandPatternType[] = [];

  for (const [knownBrandKey, knownBrandValue] of Object.entries(KNOWN_BRANDS_MAP)) {
    const cleanedBrand = cleanBrand(knownBrandKey);

    brandMatchMap.set(cleanedBrand, knownBrandValue);
    precompiledBrandPatterns.push({
      pattern: new RegExp(`(^|[^a-zA-Z0-9])${escapeRegex(cleanedBrand)}([^a-zA-Z0-9]|$)`, 'i'),
      brand: knownBrandValue,
    });
  }

  precompiledBrandPatterns.sort(
    (brandPatternA, brandPatternB) => brandPatternB.brand.length - brandPatternA.brand.length,
  );

  return { brandMatchMap, precompiledBrandPatterns };
}

const { brandMatchMap, precompiledBrandPatterns } = initBrandAccumulators();
const brandCache = new Map<string, string>();

export function normalizeBrand(brand: string): string {
  if (!brand || brand.trim() === '-') return UNKNOWN_BRAND;

  const cachedBrand = brandCache.get(brand);
  if (cachedBrand !== undefined) return cachedBrand;

  const cleanedBrand = cleanBrand(brand);
  const matchedBrand = brandMatchMap.get(cleanedBrand);

  if (matchedBrand !== undefined) {
    brandCache.set(brand, matchedBrand);

    return matchedBrand;
  }

  for (const { pattern, brand: precompiledBrand } of precompiledBrandPatterns) {
    if (pattern.test(cleanedBrand)) {
      brandCache.set(brand, precompiledBrand);
      return brand;
    }
  }

  const fallbackBrand = toTitleCase(brand.trim());
  brandCache.set(brand, fallbackBrand);

  return fallbackBrand;
}
