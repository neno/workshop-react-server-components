'use client';

import { MovieType } from "@/db/schema";

export function MyButton({ movie}: { movie: MovieType }) {
  return (
    <button className='px-4 py-2 rounded bg-blue-500 text-white' onClick={() => alert(movie.title)}>Click Me!</button>
  );
}
