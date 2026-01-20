'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { useRouter } from 'next/navigation';

export interface User {
  id: number;
  name: string;
  email: string;
  points: number | null;
  subscription: string | null;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; error?: string }>;
  register: (
    name: string,
    email: string,
    password: string
  ) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    // Initialize from sessionStorage to prevent flash
    if (typeof window !== 'undefined') {
      const cached = sessionStorage.getItem('user');
      return cached ? JSON.parse(cached) : null;
    }
    return null;
  });
  const [isLoading, setIsLoading] = useState(true);
  const [hasInitialized, setHasInitialized] = useState(false);
  const router = useRouter();

  const refreshUser = useCallback(async () => {
    try {
      const response = await fetch('/api/auth/me');
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        sessionStorage.setItem('user', JSON.stringify(data.user));
      } else {
        setUser(null);
        sessionStorage.removeItem('user');
      }
    } catch (error) {
      console.error('Error refreshing user:', error);
      setUser(null);
      sessionStorage.removeItem('user');
    }
  }, []);

  useEffect(() => {
    const initAuth = async () => {
      if (!hasInitialized) {
        setIsLoading(true);
        await refreshUser();
        setIsLoading(false);
        setHasInitialized(true);
      }
    };
    initAuth();
  }, [refreshUser, hasInitialized]);

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        return { success: false, error: data.error };
      }

      setUser(data.user);
      sessionStorage.setItem('user', JSON.stringify(data.user));
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'An unexpected error occurred' };
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        return { success: false, error: data.error };
      }

      setUser(data.user);
      sessionStorage.setItem('user', JSON.stringify(data.user));
      return { success: true };
    } catch (error) {
      console.error('Register error:', error);
      return { success: false, error: 'An unexpected error occurred' };
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setUser(null);
      sessionStorage.removeItem('user');
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
