import React from 'react';
import { Box, Image, Text, Badge, Flex } from '@chakra-ui/react';
import { FaUserLarge } from "react-icons/fa6";

interface SlotGameCardProps {
  name: string;
  img: string;
  tag: string;
  user: string;
}

const SlotGameCard: React.FC<SlotGameCardProps> = ({ name, img, tag, user }) => (
  <Flex h={"150px"} minW={"110px"} borderRadius={"10px"} overflow={"hidden"} flexDir={"column"}>
    <Box
      w={"100%"}
      h={"100%"}
      textAlign="center"
      position="relative"
      bgImage={img}
      bgPos={"center"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      borderRadius={"10px"}
      pos={"relative"}
    >
      <Text
        pos="absolute"
        bottom={0}
        left="50%"
        transform="translateX(-50%)"
        fontSize="14px"
        mt={1}
        color="#fff"
        fontWeight="600"
        textAlign="center"
      >
        {tag}
      </Text>
      <Flex pos={"absolute"} top={0} right={0} bg={"rgba(0, 0, 0, 0.50)"} p={1} borderRadius={"10px"} color={"#fff"} justifyContent={"center"} alignItems={"center"}>
        <FaUserLarge fontSize={"12px"} />
        <Text fontSize="12px" color={"#fff"} ml={1}>{user}</Text>
      </Flex>
    </Box>
    <Text fontSize="14px" noOfLines={1} mt={1}>{name}</Text>
  </Flex>
);

export default SlotGameCard; 