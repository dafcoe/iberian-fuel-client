import { describe, expect, it } from 'vitest';
import { UNKNOWN_BRAND } from '../../constants';
import { normalizeBrand } from '../../normalizers';

describe('normalizeBrand', () => {
  describe('when a given brand is empty or invalid', () => {
    it('should return unknown brand for an empty string', () => {
      // Assemble
      const brand = '';
      const expectedBrand = UNKNOWN_BRAND;

      // Act
      const output = normalizeBrand(brand);

      // Assert
      expect(output).toBe(expectedBrand);
    });

    it('should return unknown brand for a dash', () => {
      // Assemble
      const brand = '-';
      const expectedBrand = UNKNOWN_BRAND;

      // Act
      const output = normalizeBrand(brand);

      // Assert
      expect(output).toBe(expectedBrand);
    });

    it('should return unknown brand for a dash with whitespace', () => {
      // Assemble
      const brand = ' - ';
      const expectedBrand = UNKNOWN_BRAND;

      // Act
      const output = normalizeBrand(brand);

      // Assert
      expect(output).toBe(expectedBrand);
    });
  });

  describe('when a given brand matches a known brand exactly', () => {
    it('should return the known brand for an exact match', () => {
      // Assemble
      const brand = 'Galp';
      const expectedBrand = 'Galp';

      // Act
      const output = normalizeBrand(brand);

      // Assert
      expect(output).toBe(expectedBrand);
    });

    it('should return the known brand regardless of casing', () => {
      // Assemble
      const brand = 'REPSOL';
      const expectedBrand = 'Repsol';

      // Act
      const output = normalizeBrand(brand);

      // Assert
      expect(output).toBe(expectedBrand);
    });

    it('should return the known brand when the given brand has leading/trailing whitespace', () => {
      // Assemble
      const brand = '  Shell  ';
      const expectedBrand = 'Shell';

      // Act
      const output = normalizeBrand(brand);

      // Assert
      expect(output).toBe(expectedBrand);
    });

    it('should return the known brand when the given brand has accented characters', () => {
      // Assemble
      const brand = 'Álves Bandeira';
      const expectedBrand = 'Alves Bandeira';

      // Act
      const output = normalizeBrand(brand);

      // Assert
      expect(output).toBe(expectedBrand);
    });
  });

  describe('when a given brand matches a known brand via pattern', () => {
    it('should return the original brand when it contains a known brand as a substring', () => {
      // Assemble
      const brand = 'Galp Energia SA';
      const expectedBrand = 'Galp Energia SA';

      // Act
      const output = normalizeBrand(brand);

      // Assert
      expect(output).toBe(expectedBrand);
    });
  });

  describe('when a given brand does not match any known brand', () => {
    it('should return the given brand converted to title case as fallback', () => {
      // Assemble
      const brand = 'completely unknown brand';
      const expectedBrand = 'Completely Unknown Brand';

      // Act
      const output = normalizeBrand(brand);

      // Assert
      expect(output).toBe(expectedBrand);
    });

    it('should trim whitespace and convert to title case for unknown brands', () => {
      // Assemble
      const brand = '  any other brand  ';
      const expectedBrand = 'Any Other Brand';

      // Act
      const output = normalizeBrand(brand);

      // Assert
      expect(output).toBe(expectedBrand);
    });
  });

  describe('when a given brand is cached', () => {
    it('should return the same result on subsequent calls with the same given brand', () => {
      // Assemble
      const brand = 'Prio';
      const expectedBrand = 'Prio';

      // Act
      const output1 = normalizeBrand(brand);
      const output2 = normalizeBrand(brand);

      // Assert
      expect(output1).toBe(expectedBrand);
      expect(output2).toBe(expectedBrand);
    });
  });
});
