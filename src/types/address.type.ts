import { COUNTRY_NAME } from '../constants';

export interface Address {
  street: string;
  postalCode: string;
  town: string;
  municipality: string;
  district: string;
  country: COUNTRY_NAME;
  latitude: number;
  longitude: number;
}
