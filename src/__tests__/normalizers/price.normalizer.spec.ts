import { normalizePrice } from '../../normalizers';

describe('normalizePrice', () => {
  describe('when a given price is invalid or unparseable', () => {
    it('should return -1 for an empty string', () => {
      // Assemble
      const price = '';
      const expectedPrice = -1;

      // Act
      const normalizedPrice = normalizePrice(price);

      // Assert
      expect(normalizedPrice).toBe(expectedPrice);
    });

    it('should return -1 for a non-numeric string', () => {
      // Assemble
      const price = 'abc';
      const expectedPrice = -1;

      // Act
      const normalizedPrice = normalizePrice(price);

      // Assert
      expect(normalizedPrice).toBe(expectedPrice);
    });

    it('should return -1 for a string with only special characters', () => {
      // Assemble
      const price = '€ $';
      const expectedPrice = -1;

      // Act
      const normalizedPrice = normalizePrice(price);

      // Assert
      expect(normalizedPrice).toBe(expectedPrice);
    });
  });

  describe('when a given price is a valid numeric string', () => {
    it('should return the parsed price for a plain integer string', () => {
      // Assemble
      const price = '2';
      const expectedPrice = 2;

      // Act
      const normalizedPrice = normalizePrice(price);

      // Assert
      expect(normalizedPrice).toBe(expectedPrice);
    });

    it('should return the parsed price for a dot-decimal string', () => {
      // Assemble
      const price = '1.759';
      const expectedPrice = 1.759;

      // Act
      const normalizedPrice = normalizePrice(price);

      // Assert
      expect(normalizedPrice).toBe(expectedPrice);
    });

    it('should return the parsed price for a comma-decimal string', () => {
      // Assemble
      const price = '1,759';
      const expectedPrice = 1.759;

      // Act
      const normalizedPrice = normalizePrice(price);

      // Assert
      expect(normalizedPrice).toBe(expectedPrice);
    });

    it('should return the parsed price when the string has leading/trailing whitespace', () => {
      // Assemble
      const price = '  1.499  ';
      const expectedPrice = 1.499;

      // Act
      const normalizedPrice = normalizePrice(price);

      // Assert
      expect(normalizedPrice).toBe(expectedPrice);
    });

    it('should return the parsed price when the string contains a currency symbol', () => {
      // Assemble
      const price = '1.759€';
      const expectedPrice = 1.759;

      // Act
      const normalizedPrice = normalizePrice(price);

      // Assert
      expect(normalizedPrice).toBe(expectedPrice);
    });
  });
});
