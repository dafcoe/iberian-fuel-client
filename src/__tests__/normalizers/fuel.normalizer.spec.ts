import { FUEL_NAME } from '../../constants';
import { normalizeFuelName } from '../../normalizers';

describe('normalizeFuelName', () => {
  describe('when fuel belongs to gasoline 95 family', () => {
    it('should return "Gasoline 95" for "gasolina 95 e5"', () => {
      // Assemble
      const fuel = 'gasolina 95 e5';
      const expectedFuel = FUEL_NAME.GASOLINE_95;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });

    it('should return "Gasoline 95" for "gasolina 95 e5 premium"', () => {
      // Assemble
      const fuel = 'gasolina 95 e5 premium';
      const expectedFuel = FUEL_NAME.GASOLINE_95;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });

    it('should return "Gasoline 95" for "gasolina especial 95"', () => {
      // Assemble
      const fuel = 'gasolina especial 95';
      const expectedFuel = FUEL_NAME.GASOLINE_95;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });

    it('should return "Gasoline 95" for "gasolina simples 95"', () => {
      // Assemble
      const fuel = 'gasolina simples 95';
      const expectedFuel = FUEL_NAME.GASOLINE_95;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });

    it('should return "Gasoline 95" for "gasolina renovable"', () => {
      // Assemble
      const fuel = 'gasolina renovable';
      const expectedFuel = FUEL_NAME.GASOLINE_95;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });
  });

  describe('when fuel belongs to gasoline 98 family', () => {
    it('should return "Gasoline 98" for "gasolina 98"', () => {
      // Assemble
      const fuel = 'gasolina 98';
      const expectedFuel = FUEL_NAME.GASOLINE_98;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });

    it('should return "Gasoline 98" for "gasolina 98 e5"', () => {
      // Assemble
      const fuel = 'gasolina 98 e5';
      const expectedFuel = FUEL_NAME.GASOLINE_98;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });

    it('should return "Gasoline 98" for "gasolina especial 98"', () => {
      // Assemble
      const fuel = 'gasolina especial 98';
      const expectedFuel = FUEL_NAME.GASOLINE_98;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });
  });

  describe('when fuel belongs to 2 stroke gasoline family', () => {
    it('should return "2 Stroke Gasoline" for "gasolina de mistura (motores a 2 tempos)"', () => {
      // Assemble
      const fuel = 'gasolina de mistura (motores a 2 tempos)';
      const expectedFuel = FUEL_NAME.GASOLINE_2_STROKE;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });
  });

  describe('when fuel belongs to diesel family', () => {
    it('should return "Diesel" for "gasóleo a habitual"', () => {
      // Assemble
      const fuel = 'gasóleo a habitual';
      const expectedFuel = FUEL_NAME.DIESEL;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });

    it('should return "Diesel" for "gasóleo simples"', () => {
      // Assemble
      const fuel = 'gasóleo simples';
      const expectedFuel = FUEL_NAME.DIESEL;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });

    it('should return "Diesel" for "biodiésel"', () => {
      // Assemble
      const fuel = 'biodiésel';
      const expectedFuel = FUEL_NAME.DIESEL;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });

    it('should return "Diesel" for "diésel renovable"', () => {
      // Assemble
      const fuel = 'diésel renovable';
      const expectedFuel = FUEL_NAME.DIESEL;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });
  });

  describe('when fuel belongs to diesel premium family', () => {
    it('should return "Diesel Premium" for "gasóleo especial"', () => {
      // Assemble
      const fuel = 'gasóleo especial';
      const expectedFuel = FUEL_NAME.DIESEL_PREMIUM;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });

    it('should return "Diesel Premium" for "gasóleo premium"', () => {
      // Assemble
      const fuel = 'gasóleo premium';
      const expectedFuel = FUEL_NAME.DIESEL_PREMIUM;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });
  });

  describe('when fuel belongs to farm diesel family', () => {
    it('should return "Farm Diesel" for "gasóleo b"', () => {
      // Assemble
      const fuel = 'gasóleo b';
      const expectedFuel = FUEL_NAME.DIESEL_FARM;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });

    it('should return "Farm Diesel" for "gasóleo colorido"', () => {
      // Assemble
      const fuel = 'gasóleo colorido';
      const expectedFuel = FUEL_NAME.DIESEL_FARM;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });
  });

  describe('when fuel belongs to heat diesel family', () => {
    it('should return "Heat Diesel" for "gasóleo de aquecimento"', () => {
      // Assemble
      const fuel = 'gasóleo de aquecimento';
      const expectedFuel = FUEL_NAME.DIESEL_HEAT;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });
  });

  describe('when fuel belongs to LPG family', () => {
    it('should return "LPG" for "gases licuados del petróleo"', () => {
      // Assemble
      const fuel = 'gases licuados del petróleo';
      const expectedFuel = FUEL_NAME.LPG;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });

    it('should return "LPG" for "gpl auto"', () => {
      // Assemble
      const fuel = 'gpl auto';
      const expectedFuel = FUEL_NAME.LPG;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });
  });

  describe('when fuel belongs to CNG family', () => {
    it('should return "CNG" for "biogas natural comprimido"', () => {
      // Assemble
      const fuel = 'biogas natural comprimido';
      const expectedFuel = FUEL_NAME.CNG;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });

    it('should return "CNG" for "gas natural comprimido"', () => {
      // Assemble
      const fuel = 'gas natural comprimido';
      const expectedFuel = FUEL_NAME.CNG;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });

    it('should return "CNG" for "gnc (gás natural comprimido) - €/kg"', () => {
      // Assemble
      const fuel = 'gnc (gás natural comprimido) - €/kg';
      const expectedFuel = FUEL_NAME.CNG;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });
  });

  describe('when fuel belongs to LNG family', () => {
    it('should return "LNG" for "gas natural licuado"', () => {
      // Assemble
      const fuel = 'gas natural licuado';
      const expectedFuel = FUEL_NAME.LNG;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });

    it('should return "LNG" for "gnl (gás natural liquefeito) - €/kg"', () => {
      // Assemble
      const fuel = 'gnl (gás natural liquefeito) - €/kg';
      const expectedFuel = FUEL_NAME.LNG;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });
  });

  describe('when fuel belongs to AdBlue family', () => {
    it('should return "AdBlue" for "adblue"', () => {
      // Assemble
      const fuel = 'adblue';
      const expectedFuel = FUEL_NAME.ADBLUE;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });
  });

  describe('when fuel belongs to Ethanol family', () => {
    it('should return "Ethanol" for "bioetanol"', () => {
      // Assemble
      const fuel = 'bioetanol';
      const expectedFuel = FUEL_NAME.ETHANOL;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });
  });

  describe('when fuel belongs to Hydrogen family', () => {
    it('should return "Hydrogen" for "hidrógeno"', () => {
      // Assemble
      const fuel = 'hidrógeno';
      const expectedFuel = FUEL_NAME.HYDROGEN;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });
  });

  describe('when fuel is case-insensitive or has whitespace', () => {
    it('should normalize regardless of casing', () => {
      // Assemble
      const fuel = 'GASOLINA 95 E5';
      const expectedFuel = FUEL_NAME.GASOLINE_95;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });

    it('should trim leading and trailing whitespace', () => {
      // Assemble
      const fuel = '  gasóleo especial  ';
      const expectedFuel = FUEL_NAME.DIESEL_PREMIUM;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });
  });

  describe('when fuel does not match any known fuel', () => {
    it('should return "Unknown for an unrecognized fuel name', () => {
      // Assemble
      const fuel = 'some unknown fuel type';
      const expectedFuel = FUEL_NAME.UNKNOWN;

      // Act
      const normalizedFuel = normalizeFuelName(fuel);

      // Assert
      expect(normalizedFuel).toBe(expectedFuel);
    });
  });
});
