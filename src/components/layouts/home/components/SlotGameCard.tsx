import React from 'react';
import { Box, Image, Text, Badge } from '@chakra-ui/react';

interface SlotGameCardProps {
  name: string;
  img: string;
  tag: string;
}

const SlotGameCard: React.FC<SlotGameCardProps> = ({ name, img, tag }) => (
  <Box
    minW="110px"
    bg="#333"
    borderRadius="md"
    p={2}
    textAlign="center"
    position="relative"
  >
    <Image src={img} alt={name} boxSize="60px" mx="auto" mb={1} borderRadius="md" />
    <Text fontSize="xs" noOfLines={1}>{name}</Text>
    <Badge colorScheme="green" fontSize="0.7em" mt={1}>{tag}</Badge>
  </Box>
);

export default SlotGameCard; 