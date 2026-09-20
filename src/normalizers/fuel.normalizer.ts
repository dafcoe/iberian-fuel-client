import { FUEL_NAME } from '../constants';

export function normalizeFuelName(fuel: string): string {
  const cleanFuel = fuel.trim().toLowerCase();

  switch (cleanFuel) {
    case 'gasolina especial 95':
    case 'gasolina simples 95':
      return FUEL_NAME.GASOLINE_95;

    case 'gasolina 98':
    case 'gasolina especial 98':
      return FUEL_NAME.GASOLINE_98;

    case 'gasolina de mistura (motores a 2 tempos)':
      return FUEL_NAME.GASOLINE_2_STROKE;

    case 'gasóleo simples':
    case 'biodiesel b15':
      return FUEL_NAME.DIESEL;

    case 'gasóleo especial':
      return FUEL_NAME.DIESEL_PREMIUM;

    case 'gasóleo colorido':
      return FUEL_NAME.DIESEL_FARM;

    case 'gasóleo de aquecimento':
      return FUEL_NAME.DIESEL_HEAT;

    case 'gpl auto':
      return FUEL_NAME.LPG;

    case 'gnc (gás natural comprimido) - €/kg':
    case 'gnc (gás natural comprimido) - €/m3':
      return FUEL_NAME.CNG;

    case 'gnl (gás natural liquefeito) - €/kg':
      return FUEL_NAME.LNG;

    default:
      console.warn('Fuel not found:', cleanFuel);
      return FUEL_NAME.UNKNOWN;
  }
}
