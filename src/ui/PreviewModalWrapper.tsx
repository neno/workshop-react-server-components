"use client"

import {PreviewModal} from "@/ui/PreviewModal";
import {useState} from "react";
import {MovieType} from "@/db/schema";

interface IPreviewModalWrapperProps {
  movie: Pick<MovieType, 'id' | 'backdropPath' | 'title'>
}
export const PreviewModalWrapper = ({ movie } : IPreviewModalWrapperProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button type="button" className="absolute inset-0 w-full opacity-0" onClick={handleClick}>Open</button>
      {isOpen && <PreviewModal movie={movie} isOpen={isOpen} handleClose={() => setIsOpen(false)} />}
    </>
  )
};