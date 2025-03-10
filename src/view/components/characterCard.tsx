'use client';

import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Character } from '@/models/global';
import Image from 'next/image';

type CharacterCardProps = {
  character: Character;
};

export function CharacterCard({ character }: CharacterCardProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'alive':
        return 'bg-green-500';
      case 'dead':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden">
        <Image
          src={character.image}
          alt={character.name}
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-lg truncate">{character.name}</CardTitle>
        <div className="flex items-center gap-2 mt-1">
          <span
            className={`w-3 h-3 rounded-full ${getStatusColor(character.status)}`}
          ></span>
          <span className="text-sm text-gray-700">
            {character.status} - {character.gender}
          </span>
        </div>
      </CardHeader>
    </Card>
  );
}
