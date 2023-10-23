'use client'

import {HandThumbUpIcon, PlusIcon} from "@heroicons/react/24/outline";
import {clsx} from "clsx";
import {addMovieIdToWatchlist} from "src/app/actions";

interface IButtonGroupProps {
  movieId: number
  className?: string
}

export const ButtonGroup = ({ className, movieId }: IButtonGroupProps) => {

  const handleAddToWatchlistButtonClick = async () => {
    const res = await addMovieIdToWatchlist(movieId)
  }

  return (
    <div className={clsx("flex flex-row gap-x-2", className)}>
      <form action={handleAddToWatchlistButtonClick}>

      <button
        type="submit"
        className="rounded-full bg-transparent text-primary border opacity-70 hover:opacity-90 p-2 md:p-4"
        title="Add to Watchlist"
        
      >
        <span className="sr-only">Add to Watchlist</span>
        <PlusIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      </form>
      <button
        type="button"
        className="rounded-full bg-transparent text-primary border opacity-70 hover:opacity-90 p-2 md:p-4"
      >
        <span className="sr-only">Close panel</span>
        <HandThumbUpIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )
}