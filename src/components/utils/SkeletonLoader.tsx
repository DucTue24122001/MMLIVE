"use client"
import React from 'react';
import { Box, Flex, Skeleton, SkeletonText, Grid } from '@chakra-ui/react';

interface SkeletonLoaderProps {
  type: 'card' | 'list' | 'grid' | 'slider' | 'banner' | 'category' | 'game' | 'match' | 'sidenav';
  count?: number;
  variant?: 'default' | 'compact';
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  type, 
  count = 4, 
  variant = 'default' 
}) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <Box
            minW="100px"
            h="150px"
            bg="#333"
            borderRadius="md"
            p={2}
            position="relative"
            overflow="hidden"
          >
            <Skeleton height="100px" mb={1} />
            <SkeletonText noOfLines={1} skeletonHeight="12px" />
            <SkeletonText noOfLines={1} skeletonHeight="12px" mt={1} />
          </Box>
        );

      case 'list':
        return (
          <Flex gap={2} overflowX="auto" pb={2}>
            {Array(count).fill(null).map((_, idx) => (
              <Box
                key={idx}
                minW="100px"
                h="150px"
                bg="#333"
                borderRadius="md"
                p={2}
                flexShrink={0}
              >
                <Skeleton height="100px" mb={1} />
                <SkeletonText noOfLines={1} skeletonHeight="12px" />
                <SkeletonText noOfLines={1} skeletonHeight="12px" mt={1} />
              </Box>
            ))}
          </Flex>
        );

      case 'grid':
        return (
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {Array(count).fill(null).map((_, idx) => (
              <Box
                key={idx}
                bg="#333"
                borderRadius="xl"
                p={3}
                minH="120px"
                position="relative"
                overflow="hidden"
              >
                <Skeleton height="20px" mb={2} />
                <Skeleton height="80px" />
              </Box>
            ))}
          </Grid>
        );

      case 'slider':
        return (
          <Flex gap={2} overflow="hidden">
            {Array(count).fill(null).map((_, idx) => (
              <Box
                key={idx}
                minW="180px"
                h="120px"
                bg="#333"
                borderRadius="lg"
                flexShrink={0}
                position="relative"
                overflow="hidden"
              >
                <Skeleton height="100%" />
              </Box>
            ))}
          </Flex>
        );

      case 'banner':
        return (
          <Box
            w="100%"
            h="100px"
            bg="#333"
            borderRadius="10px"
            overflow="hidden"
          >
            <Skeleton height="100%" />
          </Box>
        );

      case 'category':
        return (
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {Array(6).fill(null).map((_, idx) => (
              <Box
                key={idx}
                bg="#333"
                borderRadius="xl"
                p={3}
                minH={idx < 2 ? "270px" : "120px"}
                position="relative"
                overflow="hidden"
              >
                <Skeleton height="24px" mb={2} />
                <Skeleton height="80%" />
              </Box>
            ))}
          </Grid>
        );

      case 'game':
        return (
          <Flex gap={3} overflowX="auto" pb={2}>
            {Array(count).fill(null).map((_, idx) => (
              <Flex key={idx} h="150px" minW="110px" flexDir="column">
                <Box
                  w="100%"
                  h="100%"
                  bg="#333"
                  borderRadius="10px"
                  position="relative"
                  overflow="hidden"
                >
                  <Skeleton height="100%" />
                </Box>
                <Skeleton height="14px" mt={1} />
              </Flex>
            ))}
          </Flex>
        );

      case 'match':
        return (
          <Flex gap={2} overflow="hidden">
            {Array(count).fill(null).map((_, idx) => (
              <Flex
                key={idx}
                flexDir="column"
                bg="#333"
                borderRadius="lg"
                p={4}
                minW="360px"
                h="182px"
                flexShrink={0}
              >
                <Flex justify="space-between" mb={2}>
                  <Skeleton height="14px" width="60%" />
                  <Skeleton height="20px" width="40px" />
                </Flex>
                <Flex justify="space-between" mb={2}>
                  <Skeleton height="32px" width="60px" />
                  <Skeleton height="32px" width="60px" />
                  <Skeleton height="32px" width="60px" />
                </Flex>
                <Grid templateColumns="repeat(3, 1fr)" gap={2} mt={5}>
                  {Array(3).fill(null).map((_, btnIdx) => (
                    <Skeleton key={btnIdx} height="32px" />
                  ))}
                </Grid>
              </Flex>
            ))}
          </Flex>
        );

      case 'sidenav':
        return (
          <Flex
            mt="70px"
            w="240px"
            h="800px"
            pos="fixed"
            left={0}
            top={0}
            bg="#242424"
            p="16px"
            direction="column"
            display={["none", "none", "none", "none", "flex"]}
          >
            <Flex direction="column" gap="5px">
              {Array(6).fill(null).map((_, idx) => (
                <Flex
                  key={idx}
                  direction="column"
                  bg="#333"
                  borderRadius="8px"
                  overflow="hidden"
                >
                  <Flex
                    px="8px"
                    py="8px"
                    alignItems="center"
                    justifyContent="space-between"
                    p="10px"
                  >
                    <Flex gap={5} alignItems="center">
                      <Skeleton boxSize="24px" borderRadius="md" />
                      <Skeleton height="16px" width="60px" />
                    </Flex>
                    {idx < 3 && (
                      <Skeleton
                        minW="28px"
                        h="28px"
                        borderRadius="8px"
                      />
                    )}
                  </Flex>
                  {idx < 3 && (
                    <Box pb="8px" pt="0" px="8px" bg="#333" w="full">
                      <Flex direction="column" gap="4px">
                        {Array(idx === 0 ? 5 : 2).fill(null).map((_, itemIdx) => (
                          <Flex key={itemIdx} gap={5} alignItems="center" p="8px">
                            <Skeleton boxSize="24px" borderRadius="md" />
                            <Skeleton height="16px" width="40px" />
                          </Flex>
                        ))}
                      </Flex>
                    </Box>
                  )}
                </Flex>
              ))}
            </Flex>
          </Flex>
        );

      default:
        return <Skeleton height="100px" />;
    }
  };

  return renderSkeleton();
};

export default SkeletonLoader; 