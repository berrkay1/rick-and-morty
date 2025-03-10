import { Suspense } from 'react';
import { getCharacters } from '@/api/global';
import { FilterBar } from '@/view/components/filterBar';
import { CharacterGrid } from '@/view/components/characterGrid';
import { Pagination } from '@/view/components/pagination';
import {
  CharacterFilters,
  CharacterGender,
  CharacterStatus,
} from '@/models/global';

interface HomePageProps {
  searchParams: Promise<{
    status?: string;
    gender?: string;
    page?: string;
  }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const result = await searchParams;

  const filters: CharacterFilters = {
    status: (result?.status as CharacterStatus) || undefined,
    gender: (result?.gender as CharacterGender) || undefined,
    page: result?.page ? parseInt(result.page, 10) : 1,
  };

  const { results: characters, info } = await getCharacters(filters);

  return (
    <main className="container mx-auto py-8 px-4">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="text-4xl font-bold mb-8 text-center">
          Rick and Morty Characters
        </div>
        <FilterBar />
        <CharacterGrid characters={characters} />
        <Pagination currentPage={filters.page || 1} totalPages={info.pages} />
      </Suspense>
    </main>
  );
}
