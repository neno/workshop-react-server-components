export function FlexPlaceholder({ cols, diff}: { cols: number, diff: number}) {
  return (
    diff ? <div className={`flex-0 basis-1/${cols - diff}`} /> : null
  );
}