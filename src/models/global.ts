export type CharacterStatus = 'alive' | 'dead' | '';
export type CharacterGender = 'female' | 'male' | 'genderless' | '';

export type Character = {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type ApiResponse<T> = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T[];
};

export type CharacterFilters = {
  status?: CharacterStatus;
  gender?: CharacterGender;
  page?: number;
};
