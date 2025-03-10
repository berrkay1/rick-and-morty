import { getCharacters } from '@/api/global';
import { CharacterFilters } from '@/models/global';
import { useQuery } from '@tanstack/react-query';

export const useCharactersQuery = (filters: CharacterFilters) => {
  return useQuery({
    queryKey: ['characters', filters],
    queryFn: () => getCharacters(filters),
    staleTime: 5 * 60 * 1000,
  });
};
