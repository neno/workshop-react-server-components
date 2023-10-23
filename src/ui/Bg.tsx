'use client';

type BgProps = {
  handleClose: () => void;
};

export const Bg = ({ handleClose }: BgProps) => (
  <div
    onClick={handleClose}
    className='fixed inset-0 bg-neutral-900 opacity-80'
  ></div>
);
