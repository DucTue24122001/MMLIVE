"use client"
import React, { Suspense, lazy } from 'react';
import { Box, Spinner, Center } from '@chakra-ui/react';

interface DynamicImportProps {
  component: () => Promise<{ default: React.ComponentType<any> }>;
  fallback?: React.ReactNode;
  props?: any;
}

const DynamicImport: React.FC<DynamicImportProps> = ({ 
  component, 
  fallback = (
    <Center p={4}>
      <Spinner size="md" />
    </Center>
  ),
  props = {}
}) => {
  const LazyComponent = lazy(component);

  return (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default DynamicImport; 