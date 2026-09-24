import { UNKNOWN_BRAND } from '../../constants';
import { normalizeBrand } from '../../normalizers';

describe('normalizeBrand', () => {
  describe('when a given brand is empty or invalid', () => {
    it('should return unknown brand for an empty string', () => {
      // Assemble
      const brand = '';
      const expectedNormalizedBrand = UNKNOWN_BRAND;

      // Act
      const normalizedBrand = normalizeBrand(brand);

      // Assert
      expect(normalizedBrand).toBe(expectedNormalizedBrand);
    });

    it('should return unknown brand for a dash', () => {
      // Assemble
      const brand = '-';
      const expectedNormalizedBrand = UNKNOWN_BRAND;

      // Act
      const normalizedBrand = normalizeBrand(brand);

      // Assert
      expect(normalizedBrand).toBe(expectedNormalizedBrand);
    });

    it('should return unknown brand for a dash with whitespace', () => {
      // Assemble
      const brand = ' - ';
      const expectedNormalizedBrand = UNKNOWN_BRAND;

      // Act
      const normalizedBrand = normalizeBrand(brand);

      // Assert
      expect(normalizedBrand).toBe(expectedNormalizedBrand);
    });
  });

  describe('when a given brand matches a known brand exactly', () => {
    it('should return the known brand for an exact match', () => {
      // Assemble
      const brand = 'Galp';
      const expectedNormalizedBrand = 'Galp';

      // Act
      const normalizedBrand = normalizeBrand(brand);

      // Assert
      expect(normalizedBrand).toBe(expectedNormalizedBrand);
    });

    it('should return the known brand regardless of casing', () => {
      // Assemble
      const brand = 'REPSOL';
      const expectedNormalizedBrand = 'Repsol';

      // Act
      const normalizedBrand = normalizeBrand(brand);

      // Assert
      expect(normalizedBrand).toBe(expectedNormalizedBrand);
    });

    it('should return the known brand when the given brand has leading/trailing whitespace', () => {
      // Assemble
      const brand = '  Shell  ';
      const expectedNormalizedBrand = 'Shell';

      // Act
      const normalizedBrand = normalizeBrand(brand);

      // Assert
      expect(normalizedBrand).toBe(expectedNormalizedBrand);
    });

    it('should return the known brand when the given brand has accented characters', () => {
      // Assemble
      const brand = 'Álves Bandeira';
      const expectedNormalizedBrand = 'Alves Bandeira';

      // Act
      const normalizedBrand = normalizeBrand(brand);

      // Assert
      expect(normalizedBrand).toBe(expectedNormalizedBrand);
    });
  });

  describe('when a given brand matches a known brand via pattern', () => {
    it('should return the original brand when it contains a known brand as a substring', () => {
      // Assemble
      const brand = 'Galp Energia SA';
      const expectedNormalizedBrand = 'Galp Energia SA';

      // Act
      const normalizedBrand = normalizeBrand(brand);

      // Assert
      expect(normalizedBrand).toBe(expectedNormalizedBrand);
    });
  });

  describe('when a given brand does not match any known brand', () => {
    it('should return the given brand converted to title case as fallback', () => {
      // Assemble
      const brand = 'completely unknown brand';
      const expectedNormalizedBrand = 'Completely Unknown Brand';

      // Act
      const normalizedBrand = normalizeBrand(brand);

      // Assert
      expect(normalizedBrand).toBe(expectedNormalizedBrand);
    });

    it('should trim whitespace and convert to title case for unknown brands', () => {
      // Assemble
      const brand = '  any other brand  ';
      const expectedNormalizedBrand = 'Any Other Brand';

      // Act
      const normalizedBrand = normalizeBrand(brand);

      // Assert
      expect(normalizedBrand).toBe(expectedNormalizedBrand);
    });
  });

  describe('when a given brand is cached', () => {
    it('should return the same result on subsequent calls with the same given brand', () => {
      // Assemble
      const brand = 'Prio';
      const expectedNormalizedBrand = 'Prio';

      // Act
      const normalizedBrand1 = normalizeBrand(brand);
      const normalizedBrand2 = normalizeBrand(brand);

      // Assert
      expect(normalizedBrand1).toBe(expectedNormalizedBrand);
      expect(normalizedBrand2).toBe(expectedNormalizedBrand);
    });
  });
});
