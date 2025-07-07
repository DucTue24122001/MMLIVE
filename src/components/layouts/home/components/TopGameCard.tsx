import React from 'react';
import { Box, Text, Image, Flex } from '@chakra-ui/react';

interface TopGameCardProps {
  rank: number;
  name: string;
  img: string;
  bgGradient: string;
}

const TopGameCard: React.FC<TopGameCardProps> = ({ rank, name, img, bgGradient }) => (
  <Box
    position="relative"
    bgGradient={bgGradient}
    borderRadius="lg"
    minW="180px"
    h="120px"
    overflow="visible"
    px={4}
    py={3}
    display="flex"
    alignItems="center"
    mr={"10px"}
  >
    <Box zIndex={2}>
      <Text fontSize="32px" fontWeight={700} lineHeight="1">{rank}</Text>
      <Text fontWeight="bold" fontSize="20px" lineHeight="1">{name}</Text>
    </Box>
    <Image
      src={img}
      alt={name}
      position="absolute"
      right={2}
      top="50%"
      transform="translateY(-50%)"
      w="120px"
      h="140px"
      borderRadius="md"
      objectFit="cover"
      zIndex={1}
      boxShadow="lg"
    />
  </Box>
);

export default TopGameCard; 