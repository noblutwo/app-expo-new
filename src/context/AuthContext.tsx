
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { postData } from '@/api/api';

type AuthContextType = {
  isLoggedIn: boolean;
  authUser: any;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  updateActivity: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [authUser, setAuthUser] = useState<any>(null);
    const [lastActivity, setLastActivity] = useState(Date.now());
  
    const TIMEOUT_DURATION = 4 * 60 * 1000; 
  
    useEffect(() => {
      checkLoginStatus();
      const intervalId = setInterval(checkInactivity, 60000);
      return () => clearInterval(intervalId);
    }, []);
  
    const checkLoginStatus = async () => {
      try {
        const userString = await AsyncStorage.getItem('user');
        if (userString) {
          const user = JSON.parse(userString);
          setAuthUser(user);
          // setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };
  
    const checkInactivity = useCallback(() => {
      const currentTime = Date.now();
      if (isLoggedIn && currentTime - lastActivity > TIMEOUT_DURATION) {
        logout();
      }
    }, [isLoggedIn, lastActivity]);
  
    const login = async (username: string, password: string) => {
      try {
        const {data} = await postData(username, password);
        if (data.user) {
          setAuthUser(data.user);
          setIsLoggedIn(true);
          await AsyncStorage.setItem('user', JSON.stringify(data.user));
          updateActivity();
        }
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      }
    };
  
    const logout = async () => {
      try {
        await AsyncStorage.removeItem('user');
        setAuthUser(null);
        setIsLoggedIn(false);
        router.push('/');
      } catch (error) {
        console.error('Logout error:', error);
      }
    };
  
    const updateActivity = () => {
      setLastActivity(Date.now());
    };
    const value = {
      isLoggedIn,
      authUser,
      login,
      logout,
      updateActivity,
    };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  };