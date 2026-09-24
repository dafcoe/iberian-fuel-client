import { toTitleCase } from '../../formatters';

describe('toTitleCase', () => {
  it('should capitalize the first letter of each word', () => {
    // Assemble
    const input = 'hello world';
    const expectedOutput = 'Hello World';

    // Act
    const output = toTitleCase(input);

    // Assert
    expect(output).toBe(expectedOutput);
  });

  it('should convert an uppercase string to title case', () => {
    // Assemble
    const input = 'HELLO WORLD';
    const expectedOutput = 'Hello World';

    // Act
    const output = toTitleCase(input);

    // Assert
    expect(output).toBe(expectedOutput);
  });

  it('should convert a mixed case string to title case', () => {
    // Assemble
    const input = 'hElLo WoRlD';
    const expectedOutput = 'Hello World';

    // Act
    const output = toTitleCase(input);

    // Assert
    expect(output).toBe(expectedOutput);
  });

  it('should handle hyphenated words', () => {
    // Assemble
    const input1 = 'porto-salvo';
    const input2 = 'VILA-NOVA-DE-GAIA';
    const expectedOutput1 = 'Porto-Salvo';
    const expectedOutput2 = 'Vila-Nova-De-Gaia';

    // Act
    const output1 = toTitleCase(input1);
    const output2 = toTitleCase(input2);

    // Assert
    expect(output1).toBe(expectedOutput1);
    expect(output2).toBe(expectedOutput2);
  });

  it('should handle strings with accented characters', () => {
    // Assemble
    const input1 = 'águeda';
    const input2 = 'SÃO JOÃO DA MADEIRA';
    const expectedOutput1 = 'Águeda';
    const expectedOutput2 = 'São João Da Madeira';

    // Act
    const output1 = toTitleCase(input1);
    const output2 = toTitleCase(input2);

    // Assert
    expect(output1).toBe(expectedOutput1);
    expect(output2).toBe(expectedOutput2);
  });

  it('should handle multiple consecutive whitespace characters', () => {
    // Assemble
    const input = '  hello   world  ';
    const expectedOutput = '  Hello   World  ';

    // Act
    const output = toTitleCase(input);

    // Assert
    expect(output).toBe(expectedOutput);
  });

  it('should return an empty string when input is empty', () => {
    // Assemble
    const input = '';
    const expectedOutput = '';

    // Act
    const output = toTitleCase(input);

    // Assert
    expect(output).toBe(expectedOutput);
  });

  it('should handle single-word strings', () => {
    // Assemble
    const input1 = 'portugal';
    const input2 = 'SPAIN';
    const expectedOutput1 = 'Portugal';
    const expectedOutput2 = 'Spain';

    // Act
    const output1 = toTitleCase(input1);
    const output2 = toTitleCase(input2);

    // Assert
    expect(output1).toBe(expectedOutput1);
    expect(output2).toBe(expectedOutput2);
  });

  it('should handle alphanumeric words and numbers', () => {
    // Assemble
    const input1 = 'station 123';
    const expectedOutput1 = 'Station 123';
    const input2 = 'repsol-24h';
    const expectedOutput2 = 'Repsol-24h';

    // Act
    const output1 = toTitleCase(input1);
    const output2 = toTitleCase(input2);

    // Assert
    expect(output1).toBe(expectedOutput1);
    expect(output2).toBe(expectedOutput2);
  });
});
