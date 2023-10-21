"use client"

import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";
import {useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {useDebounce} from "use-debounce";

export const Search = ({ className }: { className?: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [value] = useDebounce(query, 500)

  useEffect(
    () => {
      router.push(`/search?q=${query}`)
    },
    [query, router]
  )

  return (
    <form className={className}>
      <fieldset>
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            id="search"
            className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </fieldset>
    </form>
  );
}