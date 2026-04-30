export interface PokemonForm {
  formId: string;
  name: string;
  image: string;
  types: string[];
}

export interface PokemonEntry {
  id: number;
  name: string;
  forms: PokemonForm[];
}

import { gen1 } from './pokemon/gen1';
import { gen2 } from './pokemon/gen2';
import { gen3 } from './pokemon/gen3';
import { gen4 } from './pokemon/gen4';
import { gen5 } from './pokemon/gen5';
import { gen6 } from './pokemon/gen6';
import { gen7 } from './pokemon/gen7';
import { gen8 } from './pokemon/gen8';
import { gen9 } from './pokemon/gen9';
import { special } from './pokemon/special';

export const pokemonData: PokemonEntry[] = [
  ...gen1,
  ...gen2,
  ...gen3,
  ...gen4,
  ...gen5,
  ...gen6,
  ...gen7,
  ...gen8,
  ...gen9,
  ...special
];
