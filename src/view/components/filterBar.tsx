'use client';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useCharacterQueryParams } from '@/hooks/useQueryParams';
import { useFilterStore } from '@/store/store';
import { CharacterGender, CharacterStatus } from '@/models/global';

export function FilterBar() {
  const { status, setStatus, gender, setGender } = useCharacterQueryParams();
  const filterStore = useFilterStore();

  useEffect(() => {
    if (filterStore.status !== status) {
      filterStore.setStatus(status as CharacterStatus);
    }
    if (filterStore.gender !== gender) {
      filterStore.setGender(gender as CharacterGender);
    }
  }, [status, gender, filterStore]);

  const handleStatusChange = (value: string) => {
    const newStatus = value === 'all' ? null : (value as CharacterStatus);
    setStatus(newStatus);
    filterStore.setStatus(newStatus as CharacterStatus);
  };

  const handleGenderChange = (value: string) => {
    const newGender = value === 'all' ? null : (value as CharacterGender);
    setGender(newGender);
    filterStore.setGender(newGender as CharacterGender);
  };

  const handleReset = () => {
    setStatus(null);
    setGender(null);
    filterStore.setStatus(null as unknown as CharacterStatus);
    filterStore.setGender(null as unknown as CharacterGender);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 mb-6 p-4 bg-slate-50 rounded-lg">
      <div className="flex gap-1.5 items-center w-full sm:w-64 cursor-pointer">
        <label htmlFor="status-filter" className="text-sm font-medium">
          Status
        </label>
        <Select value={status || 'all'} onValueChange={handleStatusChange}>
          <SelectTrigger id="status-filter">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="alive">Alive</SelectItem>
            <SelectItem value="dead">Dead</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-1.5 items-center w-full sm:w-64 cursor-pointer">
        <label htmlFor="gender-filter" className="text-sm font-medium">
          Gender
        </label>
        <Select value={gender || 'all'} onValueChange={handleGenderChange}>
          <SelectTrigger id="gender-filter">
            <SelectValue placeholder="Filter by gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Genders</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="genderless">Genderless</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-end">
        <Button
          variant="outline"
          onClick={handleReset}
          className="w-full sm:w-auto cursor-pointer"
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
}
