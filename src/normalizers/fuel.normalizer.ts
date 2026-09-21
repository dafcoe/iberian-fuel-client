import { FUEL_NAME } from '../constants';

export function normalizeFuelName(fuel: string): string {
  const cleanFuel = fuel.trim().toLowerCase();

  switch (cleanFuel) {
    case 'gasolina 95 e5':
    case 'gasolina 95 e5 premium':
    case 'gasolina 95 e10':
    case 'gasolina 95 e25':
    case 'gasolina 95 e85':
    case 'gasolina especial 95':
    case 'gasolina simples 95':
    case 'gasolina renovable':
      return FUEL_NAME.GASOLINE_95;

    case 'gasolina 98':
    case 'gasolina 98 e5':
    case 'gasolina 98 e10':
    case 'gasolina especial 98':
      return FUEL_NAME.GASOLINE_98;

    case 'gasolina de mistura (motores a 2 tempos)':
      return FUEL_NAME.GASOLINE_2_STROKE;

    case 'biodiésel':
    case 'biodiesel b15':
    case 'diésel renovable':
    case 'gasóleo a habitual':
    case 'gasóleo simples':
      return FUEL_NAME.DIESEL;

    case 'gasóleo especial':
    case 'gasóleo premium':
      return FUEL_NAME.DIESEL_PREMIUM;

    case 'gasóleo b':
    case 'gasóleo colorido':
      return FUEL_NAME.DIESEL_FARM;

    case 'gasóleo de aquecimento':
      return FUEL_NAME.DIESEL_HEAT;

    case 'gases licuados del petróleo':
    case 'gpl auto':
      return FUEL_NAME.LPG;

    case 'biogas natural comprimido':
    case 'gas natural comprimido':
    case 'gnc (gás natural comprimido) - €/kg':
    case 'gnc (gás natural comprimido) - €/m3':
      return FUEL_NAME.CNG;

    case 'gas natural licuado':
    case 'biogas natural licuado':
    case 'gnl (gás natural liquefeito) - €/kg':
      return FUEL_NAME.LNG;

    case 'adblue':
      return FUEL_NAME.ADBLUE;

    case 'bioetanol':
      return FUEL_NAME.ETHANOL;

    case 'hidrógeno':
      return FUEL_NAME.HYDROGEN;

    default:
      return FUEL_NAME.UNKNOWN;
  }
}
