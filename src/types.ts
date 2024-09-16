export interface LoginState {
    username: string;
    password: string;
    isLoading: boolean;
    error: string | null;
  }
  
  export type LoginAction =
    | { type: 'SET_USERNAME'; payload: string }
    | { type: 'SET_PASSWORD'; payload: string }
    | { type: 'SET_LOADING'; payload: boolean }
    | { type: 'SET_ERROR'; payload: string | null };