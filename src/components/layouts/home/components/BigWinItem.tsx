import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

interface BigWinItemProps {
  img: string;
  user: string;
  amount: string;
}

const BigWinItem: React.FC<BigWinItemProps> = ({ img, user, amount }) => (
  <Box
    minW={["100px", "100px", "100px", "100px", "100px", "110px"]}
    h={"150px"}
    bg="#333"
    borderRadius="md"
    p={[2,2,2,2,2,2]}
    textAlign="center"
  >
    <Image src={img} alt="game" boxSize="100px" mx="auto" mb={1} objectFit={"contain"} />
    <Text fontSize="12px" noOfLines={1}>{user}</Text>
    <Text fontSize="12px" color="teal.200">{amount}</Text>
  </Box>
);

export default BigWinItem; 