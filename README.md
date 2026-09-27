<div align="center">

# ⛽ @dafcoe/iberian-fuel-client

**A modern, lightweight TypeScript client for Portuguese and Spanish Fuel Prices APIs.**

Fetch, aggregate, and normalize gas station prices, geographic locations, brands, and fuel types across the entire Iberian Peninsula (Portugal & Spain) with a clean, unified, fully-typed API.

[![NPM Version](https://img.shields.io/npm/v/@dafcoe/iberian-fuel-client?style=flat-square&color=007acc)](https://www.npmjs.com/package/@dafcoe/iberian-fuel-client)
[![Zero External Dependencies](https://img.shields.io/badge/Dependencies-0%20external-brightgreen.svg?style=flat-square)](#)
[![Tests Passing](https://img.shields.io/badge/Tests-80%20passed-brightgreen?style=flat-square)](#)

[Features](#features-) • [Installation](#installation-) • [Quick Start](#quick-start-) • [API Reference](#api-reference-) • [Data Normalization](#data-normalization-) • [Types](#typescript-support-) • [License](#license-)

</div>

---

## Features ✨

- 🇵🇹 🇪🇸 **Unified Iberian Coverage** — Combines fuel station and pricing data across both Portugal (DGEG) and Spain (MineTur) into a single, cohesive dataset.
- 🛡️ **Fault-Tolerant Parallel Fetching** — Queries both national sources concurrently using `Promise.allSettled`. If one national service is temporarily unavailable, stations from the other country are still returned seamlessly.
- 🏷️ **Intelligent Brand Normalization** — Automatically cleans, maps, and standardizes over 1,800+ brand variations into canonical names (e.g., Repsol, Galp, BP, Moeve/Cepsa, Shell, Prio).
- ⛽ **Harmonized Fuel Catalog** — Normalizes diverse Portuguese and Spanish fuel product labels into standardized, strongly-typed fuel categories (`Gasoline 95`, `Gasoline 98`, `Diesel`, `LPG`, `CNG`, etc.).
- 🔢 **Numeric Prices & Native Dates** — Parses localized comma-separated price strings into standard JavaScript `number` values and converts timestamps into native `Date` objects.
- 📍 **Standardized Geographic Addresses** — Enriches each station with consistent address properties, ISO-prefixed unique identifiers (`PT-...`, `ES-...`), and normalized coordinates.
- 🔷 **100% TypeScript** — Strict type definitions, enum exports, and complete autocompletion support.
- 📦 **Dual ESM & CommonJS** — Compatible with Node.js (>= 18), modern bundlers (Vite, Next.js, Rollup, webpack), and CJS environments.

---

## Installation 📦

Install with your preferred package manager:

```bash
# npm
npm install @dafcoe/iberian-fuel-client

# pnpm
pnpm add @dafcoe/iberian-fuel-client

# yarn
yarn add @dafcoe/iberian-fuel-client

# bun
bun add @dafcoe/iberian-fuel-client
```

> **Note**: Requires Node.js `>= 18.0.0` (with native `fetch` support) or any modern browser / edge runtime.

---

## Quick Start 🚀

```typescript
import { COUNTRY_NAME, IberianFuelClient } from '@dafcoe/iberian-fuel-client';

const client = new IberianFuelClient();

// Fetch stations with real-time fuel prices across Portugal and Spain
const stations = await client.getStations();

for (const station of stations) {
  console.log(`\n📍 [${station.address.country}] ${station.name} (${station.brand})`);
  console.log(`   Address: ${station.address.street}, ${station.address.postalCode} ${station.address.town}`);
  console.log(`   Location: ${station.address.municipality}, ${station.address.district}`);
  console.log(`   Coordinates: ${station.address.latitude}, ${station.address.longitude}`);

  for (const fuel of station.fuels) {
    console.log(`   ⛽ ${fuel.name}: ${fuel.price.toFixed(3)}€ (Updated: ${fuel.updatedAt.toISOString()})`);
  }
}
```

---

## API Reference 📖

### Initializing the Client

```typescript
import { IberianFuelClient } from '@dafcoe/iberian-fuel-client';

// Standard initialization with default DGEG and MineTur adapters
const client = new IberianFuelClient();
```

#### Custom Adapters (Dependency Injection)

For testing or custom client configuration, you can pass custom instances of `DGEGAdapter` and `MineTurAdapter`:

```typescript
import { IberianFuelClient } from '@dafcoe/iberian-fuel-client';
import { DGEGAdapter, MineTurAdapter } from '@dafcoe/iberian-fuel-client/adapters'; // or mock adapters

const client = new IberianFuelClient(customDgegAdapter, customMineTurAdapter);
```

---

### Fuel Stations & Prices

#### `client.getStations()`

Fetches all fuel stations from Portugal and Spain concurrently. Each station includes its standardized address, normalized brand name, and list of available fuels with updated prices.

##### Resiliency & Fault Tolerance

Requests to Portugal ([DGEG](https://github.com/dafcoe/dgeg-client)) and Spain ([MineTur](https://github.com/dafcoe/minetur-client)) are executed in parallel using `Promise.allSettled`. If one of the upstream national APIs experiences downtime or network errors, the client resolves gracefully with the stations from the available country rather than throwing an unhandled rejection.

##### Station Object Structure:

```json
{
  "id": "PT-10423",
  "name": "POSTO REPSOL CASTRO MARIM",
  "brand": "Repsol",
  "address": {
    "street": "EN 122 KM 38,2",
    "postalCode": "8950-138",
    "town": "Castro Marim",
    "municipality": "Castro Marim",
    "district": "Faro",
    "country": "Portugal",
    "latitude": 37.21852,
    "longitude": -7.44281
  },
  "fuels": [
    {
      "id": "2101",
      "name": "Diesel",
      "price": 1.629,
      "updatedAt": "2026-09-26T00:00:00.000Z"
    }
  ]
}
```

---

## Data Normalization 🔄

National APIs from Portugal and Spain structure data differently. This library harmonizes these differences:

### 1. Unique Station Identifiers
To prevent ID collisions across countries, station IDs are prefixed using `COUNTRY_PREFIX`:
- Portugal: `PT-<id>` (e.g., `PT-10423`)
- Spain: `ES-<id>` (e.g., `ES-1234`)

### 2. Brand Normalization
Fuel station brands often contain inconsistencies in capitalization, legal suffixes, or abbreviations. Over 1,800+ brand variations are normalized to canonical PascalCase names (e.g., `Repsol`, `Galp`, `Bp`, `Moeve`, `Cepsa`, `Shell`, `Prio`, etc.), falling back to `'Unknown'` when unrecognized.

### 3. Fuel Name Harmonization
Disparate naming conventions (such as *"Gasóleo simples"*, *"Gasoleo A"*, *"Gasolina 95 E5"*, *"G95E5"*) are mapped to standard `FUEL_NAME` categories:
- `Gasoline 95`
- `Gasoline 98`
- `Diesel`
- `Diesel Premium`
- `Farm Diesel`
- `Heat Diesel`
- `2 Stroke Gasoline`
- `Liquefied Petroleum Gas (LPG)`
- `Compressed Natural Gas (CNG)`
- `Liquefied Natural Gas (LNG)`
- `AdBlue`
- `Ethanol`
- `Hydrogen`

### 4. Numeric Values & Timestamps
- **Prices**: Raw string representations (`"1,629"`) are parsed into clean numeric floats (`1.629`) rounded to 3 decimal places.
- **Dates**: Update timestamps are parsed directly into JavaScript `Date` instances.

---

## TypeScript Support 🏷

All types and enums are exported and can be imported directly:

```typescript
import type {
  Address,
  Fuel,
  Station,
} from '@dafcoe/iberian-fuel-client';

import {
  COUNTRY_NAME,
  COUNTRY_PREFIX,
  FUEL_NAME,
  KNOWN_BRANDS_MAP,
  UNKNOWN_BRAND,
} from '@dafcoe/iberian-fuel-client';
```

### Core Type Signatures

```typescript
export interface Station {
  id: `${COUNTRY_PREFIX}${string}`;
  name: string;
  brand: string;
  address: Address;
  fuels: Fuel[];
}

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

export interface Fuel {
  id: string;
  name: string;
  price: number;
  updatedAt: Date;
}

export enum COUNTRY_PREFIX {
  PT = 'PT-',
  ES = 'ES-',
}

export enum COUNTRY_NAME {
  PT = 'Portugal',
  ES = 'Spain',
}

export enum FUEL_NAME {
  ADBLUE = 'AdBlue',
  CNG = 'Compressed Natural Gas (CNG)',
  GASOLINE_2_STROKE = '2 Stroke Gasoline',
  GASOLINE_95 = 'Gasoline 95',
  GASOLINE_98 = 'Gasoline 98',
  DIESEL = 'Diesel',
  DIESEL_FARM = 'Farm Diesel',
  DIESEL_HEAT = 'Heat Diesel',
  DIESEL_PREMIUM = 'Diesel Premium',
  ETHANOL = 'Ethanol',
  HYDROGEN = 'Hydrogen',
  LNG = 'Liquefied Natural Gas (LNG)',
  LPG = 'Liquefied Petroleum Gas (LPG)',
  UNKNOWN = 'Unknown',
}
```

---

## Disclaimer ⚖️

This is an **unofficial** library. It is neither affiliated with nor endorsed by:
- **DGEG** (*Direção-Geral de Energia e Geologia*, Portugal)
- **MINETUR / MITECO** (*Ministerio para la Transición Ecológica y el Reto Demográfico*, Spain)

Fuel and station data is retrieved through [@dafcoe/dgeg-client](https://github.com/dafcoe/dgeg-client) and [@dafcoe/minetur-client](https://github.com/dafcoe/minetur-client) from the official public open-data fuel observatory services:
- Portuguese Fuel Observatory: [precoscombustiveis.dgeg.gov.pt](https://precoscombustiveis.dgeg.gov.pt)
- Spanish Fuel Observatory: [sedeaplicaciones.minetur.gob.es](https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/)

---

## License 📄

This project is licensed under the [MIT License](LICENSE).
