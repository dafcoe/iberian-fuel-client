export function toTitleCase(inputString: string): string {
  return inputString.toLowerCase().replace(/(?:^|\s|-)\S/g, (char) => char.toUpperCase());
}
