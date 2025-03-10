import { ApiResponse, Character, CharacterFilters } from '@/models/global';

const API_BASE_URL = 'https://rickandmortyapi.com/api';

export async function getCharacters(
  filters: CharacterFilters = {},
): Promise<ApiResponse<Character>> {
  const queryParams = new URLSearchParams();
  if (filters.status) {
    queryParams.append('status', filters.status);
  }
  if (filters.gender) {
    queryParams.append('gender', filters.gender);
  }
  if (filters.page) {
    queryParams.append('page', filters.page.toString());
  }
  const queryString = queryParams.toString();
  const url = `${API_BASE_URL}/character${queryString ? `?${queryString}` : ''}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}
