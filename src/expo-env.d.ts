/// <reference types="expo-router/types" />

// Khai báo các module
declare module "*.png" {
    const value: any;
    export = value;
  }
  
  declare module "*.jpg" {
    const value: any;
    export = value;
  }
  
  declare module "*.json" {
    const value: any;
    export default value;
  }
  
  // Khai báo các biến môi trường
  declare module "@env" {
    export const API_URL: string;
    // Thêm các biến môi trường khác nếu cần
  }
// types/expo-router.d.ts
declare module 'expo-router' {
  export const useSegments: () => string[];
  export const useRootNavigationState: () => any;
  export const useRouter: () => {
    push: (path: string) => void;
    replace: (path: string) => void;
    back: () => void;
    // Add other methods as needed
  };
  export function useSearchParams<T extends Record<string, string>>(): T;
  export function useLocalSearchParams<T extends Record<string, string>>(): T;
  export function useGlobalSearchParams<T extends Record<string, string>>(): T;
}
declare module 'expo-router/slot' {
  import { ComponentType } from 'react';
  export const Slot: ComponentType;
}