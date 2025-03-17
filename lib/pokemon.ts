import { cache } from './cache';

const POKEMON_API_BASE_URL = 'https://pokeapi.co/api/v2';

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
}

export const getPokemonList = cache(
  async (limit = 20, offset = 0): Promise<PokemonListResponse> => {
    const response = await fetch(
      `${POKEMON_API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch Pokémon list');
    }
    
    return response.json();
  }
);

export const getPokemonDetails = cache(
  async (nameOrId: string | number): Promise<PokemonDetails> => {
    const response = await fetch(`${POKEMON_API_BASE_URL}/pokemon/${nameOrId}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch details for Pokémon: ${nameOrId}`);
    }
    
    return response.json();
  }
);

export const getPokemonImageUrl = (id: number): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};

export const getIdFromUrl = (url: string): number => {
  const parts = url.split('/');
  return parseInt(parts[parts.length - 2]);
}; 