"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  globalLoading: boolean;
  setGlobalLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within LoadingProvider');
  }
  return context;
};

interface LoadingProviderProps {
  children: React.ReactNode;
  initialLoading?: boolean;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ 
  children, 
  initialLoading = true 
}) => {
  const [isLoading, setIsLoading] = useState(initialLoading);
  const [globalLoading, setGlobalLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setGlobalLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const value = {
    isLoading,
    setIsLoading,
    globalLoading,
    setGlobalLoading
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
}; 