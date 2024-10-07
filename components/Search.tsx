"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface ISearch {
  onSearch: (value: string) => void;
}

export const Search: React.FC<ISearch> = ({ onSearch }) => {
  const searchParams = useSearchParams();
  const initialSearchInput = searchParams.get('title') || '';
  const [searchInput, setSearchInput] = useState(initialSearchInput);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(searchInput);
    }
  };

  useEffect(() => {
    setSearchInput(initialSearchInput);
  }, [initialSearchInput]);

  return (
    <div className="my-5 text-center">
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        className="border py-1 px-2 rounded-md w-[300px]"
        placeholder="Search..."
      />
    </div>
  );
};
