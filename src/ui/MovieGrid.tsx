export function MovieGrid({children}: {children: React.ReactNode}) {
  return (
    <div className='grid grid-cols-6 gap-4 mt-8'>{children}</div>
  )
}