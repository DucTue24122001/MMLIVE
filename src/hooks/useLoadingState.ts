"use client"
import { useState, useEffect } from 'react';

interface UseLoadingStateOptions {
  delay?: number;
  minLoadingTime?: number;
}

const useLoadingState = (options: UseLoadingStateOptions = {}) => {
  const { delay = 0, minLoadingTime = 500 } = options;
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, delay);

    const minTimer = setTimeout(() => {
      setIsLoading(false);
    }, minLoadingTime);

    return () => {
      clearTimeout(timer);
      clearTimeout(minTimer);
    };
  }, [delay, minLoadingTime]);

  return {
    isLoading,
    isMounted,
    setIsLoading
  };
};

export default useLoadingState; 