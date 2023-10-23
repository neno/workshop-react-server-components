import { ReactNode } from 'react';

interface ICategorySectionProps {
  title: string;
  children: ReactNode;
}

export const Section = ({ title, children }: ICategorySectionProps) => {
  return (
    <section className='mt-16'>
      <h2 className='text-4xl font-bold'>{title}</h2>
      {children}
    </section>
  );
};
