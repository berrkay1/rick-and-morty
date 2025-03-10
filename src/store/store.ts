import {
  CharacterFilters,
  CharacterGender,
  CharacterStatus,
} from '@/models/global';
import { create } from 'zustand';

interface FilterState extends CharacterFilters {
  setStatus: (status: CharacterStatus | undefined) => void;
  setGender: (gender: CharacterGender | undefined) => void;
  setPage: (page: number) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  status: undefined,
  gender: undefined,
  page: 1,

  setStatus: (status) => set({ status, page: 1 }),
  setGender: (gender) => set({ gender, page: 1 }),
  setPage: (page) => set({ page }),
  resetFilters: () => set({ status: undefined, gender: undefined, page: 1 }),
}));
