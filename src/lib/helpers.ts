export const snakeToCamel = (str: string): string => {
  return str.toLowerCase().replace(/(_\w)/g, m => m.toUpperCase().substring(1));
};

export const getImageUrl = (path: string | null, size: string = 'original'): string => {
  if (!path) return 'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=';

  return `https://image.tmdb.org/t/p/${size}/${path}`;
}
