import { COUNTRY_PREFIX } from '../constants';
import { Address } from './address.type';
import { Fuel } from './fuel.type';

export interface Station {
  id: `${COUNTRY_PREFIX}${string}`;
  name: string;
  brand: string;
  address: Address;
  fuels: Fuel[];
}
