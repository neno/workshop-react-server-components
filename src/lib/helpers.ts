export const snakeToCamel = (str: string): string => {
  return str.toLowerCase().replace(/(_\w)/g, m => m.toUpperCase().substring(1));
};
