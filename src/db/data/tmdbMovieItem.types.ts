import { z } from 'zod';

export const tmdbMovieItemSchema = z.object({
  id: z.number(),
  title: z.string(),
  release_date: z.string().nullish(),
  overview: z.string().nullish(),
  poster_path: z.string().nullish(),
  adult: z.boolean(),
  backdrop_path: z.string().nullish(),
  genre_ids: z.array(z.number()).nullish(),
  video: z.boolean(),
  original_language: z.string().nullish(),
  original_title: z.string().nullish(),
  popularity: z.number().nullish(),
  vote_average: z.number().nullish(),
  vote_count: z.number().nullish(),
});

export type TmdbMovieItem = z.infer<typeof tmdbMovieItemSchema>;
