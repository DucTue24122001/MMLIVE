"use client"
import React from 'react';
import { Box, Spinner, Center, Text } from '@chakra-ui/react';
import { useLoading } from './LoadingProvider';

const GlobalLoading: React.FC = () => {
  const { globalLoading } = useLoading();

  if (!globalLoading) {
    return null;
  }

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg="rgba(0, 0, 0, 0.8)"
      zIndex={9999}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Center flexDir="column" gap={4}>
        <Spinner size="xl" color="teal.300" thickness="4px" />
        <Text color="white" fontSize="lg" fontWeight="medium">
          Loading...
        </Text>
      </Center>
    </Box>
  );
};

export default GlobalLoading; 