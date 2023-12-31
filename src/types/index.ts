interface IMovie {
  id: number;
  title: string;
  poster_path: string;
}

export interface Review {
  author: string;
  author_details: AuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface AuthorDetails {
  name: string;
  username: string;
  avatar_path: string;
  rating: number;
}

export interface IApiReviewsByMovieResult {
  page: number;
  results: Review[];
  total_pages: number;
  total_results: number;
}

export type MovieGroupingType = 'categories' | 'genres';