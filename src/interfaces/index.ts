//Auth interfaces
export interface StoreState {
  loading: boolean;
  status: 'authenticated' | 'unauthenticated';
  authenticatedUser: (token: string) => void;
  getAuthenticatedUser: () => void;
  notAuthenticatedUser: () => void;
  logOut: () => void;
}

export interface LoginSchemas {
  email: string;
  password: string;
}
export interface LoginResponse {
  token: string;
}

//Movie interfaces

export interface MovieDBMoviesResponse {
  dates?: Dates;
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}
export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum OriginalLanguage {
  En = 'en',
  Es = 'es',
  Ja = 'ja',
}

//Color interfaces

export interface ImageColors {
  primary: string;
  secondary: string;
}

export interface ColorsStoreState {
  colors: ImageColors;
  prevColors: ImageColors;
  setMainColors: (colors: ImageColors) => void;
  setPrevMainColors: (colors: ImageColors) => void;
}
