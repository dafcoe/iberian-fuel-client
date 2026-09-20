import { KNOWN_BRANDS_MAP, UNKNOWN_BRAND } from '../constants';
import { toTitleCase } from '../formatters';

export function normalizeBrand(brand: string): string {
  if (!brand || brand.trim() === '-') return UNKNOWN_BRAND;

  const cleanBrand = brand
    .trim()
    .toUpperCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  for (const [knownBrandKey, knownBrandValue] of Object.entries(KNOWN_BRANDS_MAP)) {
    const regex = new RegExp(`\\b${knownBrandKey.toUpperCase()}\\b`, 'i');

    if (regex.test(cleanBrand)) return knownBrandValue;
  }

  return toTitleCase(brand.trim());
}
