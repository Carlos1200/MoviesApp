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
