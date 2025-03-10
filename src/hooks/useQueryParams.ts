import { CharacterGender, CharacterStatus } from '@/models/global';
import { useQueryState } from 'nuqs';

export function useCharacterQueryParams() {
  const [status, setStatus] = useQueryState('status', {
    defaultValue: undefined as CharacterStatus | undefined,
    parse: (value) => value as CharacterStatus,
    shallow: false,
  });

  const [gender, setGender] = useQueryState('gender', {
    defaultValue: undefined as CharacterGender | undefined,
    parse: (value) => value as CharacterGender,
    shallow: false,
  });

  const [page, setPage] = useQueryState('page', {
    defaultValue: 1,
    parse: (value) => parseInt(value, 10),
    shallow: false,
  });

  return {
    status,
    setStatus,
    gender,
    setGender,
    page,
    setPage,
  };
}
