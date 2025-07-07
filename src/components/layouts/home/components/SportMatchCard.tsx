import React from 'react';
import { Box, Flex, Text, Badge, Button, Grid, Image } from '@chakra-ui/react';

interface SportMatchCardProps {
  homeLogo: string;
  awayLogo: string;
  homeName: string;
  awayName: string;
  score: string;
  status: string;
  league: string;
  isLive: boolean;
  odds: { label: string; value: string; color: string }[];
  moreOdds?: string;
}

const SportMatchCard: React.FC<SportMatchCardProps> = ({
  homeLogo,
  awayLogo,
  homeName,
  awayName,
  score,
  status,
  league,
  isLive,
  odds,
  moreOdds,
}) => (
  <Flex
    flexDir={"column"}
    justifyContent={"space-between"}
    bg="#333"
    borderRadius="lg"
    p={4}
    minW="360px"
    h={"182px"}
    color="white"
    boxShadow="md"
    mx="auto"
    mr={1}
  >
    <Flex align="center" justify="space-between" mb={2}>
      <Text fontSize="sm" color="gray.200">{league}</Text>
      {isLive && (
        <Badge bg={"#71EB92"} borderRadius="md" px={2} py={0.5} fontSize="xs">
          &#9654; Live
        </Badge>
      )}
    </Flex>
    <Flex align="center" justify="space-between" mb={2}>
      <Flex flexDir="column" align="center" minW="60px">
        <Image src={homeLogo} alt="homeLogo" w={"32px"} h={"32px"} borderRadius={"50%"} objectFit={"contain"} />
        <Text fontSize="sm" mt={1}>{homeName}</Text>
      </Flex>
      <Flex flexDir="column" align="center" mx={2}>
        <Text fontSize="2xl" fontWeight="bold">{score}</Text>
        <Text fontSize="sm" color="gray.300">{status}</Text>
      </Flex>
      <Flex flexDir="column" align="center" minW="60px">
        <Image src={awayLogo} alt="awayLogo" w={"32px"} h={"32px"} borderRadius={"50%"} objectFit={"contain"} />
        <Text fontSize="sm" mt={1}>{awayName}</Text>
      </Flex>
    </Flex>
    <Grid mt={5} templateColumns={["repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={2}>
      {odds.map((odd, idx) => (
        <Button
          key={idx}
          size="sm"
          bg={odd.color}
          color={odd.color === "#B24592" ? "#fff" : "#232323"}
          borderRadius="md"
          fontWeight="600"
          _hover={{ opacity: 0.9 }}
          gap={3}
        >
          {odd.label} <Text as="span" ml={1} fontWeight="400" color={"red"}>{odd.value}</Text>
        </Button>
      ))}
      {moreOdds && (
        <Button size="sm" bg="#B2EBF2" color="#232323" borderRadius="md" fontWeight="600">
          {moreOdds}
        </Button>
      )}
    </Grid>
  </Flex>
);

export default SportMatchCard; 