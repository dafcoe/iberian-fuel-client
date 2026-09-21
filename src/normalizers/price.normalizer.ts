export function normalizePrice(price: string): number {
  const cleanPrice = price
    .trim()
    .replace(/[^0-9,.-]/g, '')
    .replace(',', '.');

  const parsedPrice = parseFloat(cleanPrice);

  return Number.isNaN(parsedPrice) ? -1 : parsedPrice;
}
