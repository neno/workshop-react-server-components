import {HandThumbUpIcon, PlusIcon} from "@heroicons/react/24/outline";
import {clsx} from "clsx";

interface IButtonGroupProps {
  className?: string
}

export const ButtonGroup = ({ className }: IButtonGroupProps) => {
  return (
    <div className={clsx("flex flex-row gap-x-2", className)}>
      <button
        type="button"
        className="rounded-full bg-transparent text-primary border opacity-70 hover:opacity-90 p-2 md:p-4"

      >
        <span className="sr-only">Close panel</span>
        <PlusIcon className="h-6 w-6" aria-hidden="true" />
      </button>
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