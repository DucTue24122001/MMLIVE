import React from 'react';
import { Box, Badge, Image, Text } from '@chakra-ui/react';

interface TopGameCardProps {
  rank: number;
  name: string;
  img: string;
}

const TopGameCard: React.FC<TopGameCardProps> = ({ rank, name, img }) => (
  <Box
    bgGradient="linear(135deg, #A770EF 0%, #FDB99B 100%)"
    borderRadius="lg"
    p={3}
    textAlign="center"
    color="white"
    position="relative"
  >
    <Badge
      position="absolute"
      top={2}
      left={2}
      colorScheme="pink"
      borderRadius="full"
      px={2}
      fontSize="sm"
    >
      {rank}
    </Badge>
    <Image src={img} alt={name} boxSize="48px" mx="auto" mb={2} borderRadius="md" />
    <Text fontWeight="bold" fontSize="sm">{name}</Text>
  </Box>
);

export default TopGameCard; 