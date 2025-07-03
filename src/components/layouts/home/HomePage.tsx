"use client"
import React from 'react';
import {
  Box,
  Flex,
  Grid,
  Text,
  Image,
  Badge,
  Icon,
  Button,
  HStack,
  VStack,
  SimpleGrid,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaCrown, FaFutbol, FaTicketAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import casinoTop from '../../../../public/img/casino-top.png';
import sportTop from '../../../../public/img/sport-top.png';
import lotteryTop from '../../../../public/img/lottery-top.png';
import gameTop from '../../../../public/img/game-top.png';
import fishingTop from '../../../../public/img/fishing-top.png';
import liveTop from '../../../../public/img/live-top.png';
import candyTop from '../../../../public/img/candy.png';
import BigWinItem from './components/BigWinItem';
import CategoryCard from './components/CategoryCard';
import TopGameCard from './components/TopGameCard';
import SlotGameCard from './components/SlotGameCard';

const bigWins = Array(12).fill({
  img: candyTop.src,
  user: 'userID',
  amount: '150.00 USDT',
  game: 'Candy Boom',
});

const categories = [
  { label: 'Casino', icon: <FaCrown size={40} />, img: casinoTop.src },
  { label: 'Sport', icon: <FaFutbol size={40} />, img: sportTop.src },
  { label: 'Lottery', icon: <FaTicketAlt size={40} />, img: lotteryTop.src },
  { label: 'Game', icon: <FaTicketAlt size={40} />, img: gameTop.src },
  { label: 'Fishing', icon: <FaTicketAlt size={40} />, img: fishingTop.src },
  { label: 'Live', icon: <FaTicketAlt size={40} />, img: liveTop.src },
];

const topGames = [
  { rank: 1, name: 'Buffalo King', img: '/public/banner1.png' },
  { rank: 2, name: 'Buffalo King', img: '/public/banner1.png' },
  { rank: 3, name: 'Buffalo King', img: '/public/banner1.png' },
  { rank: 4, name: 'Buffalo King', img: '/public/banner1.png' },
];

const slotGames = Array(10).fill({
  name: 'Bombing Fish',
  img: '/public/banner2.jpg',
  tag: 'MIMI +30',
});

const HomePage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box className='layout-center' minH="100vh" color="white" px={{ base: 2, md: 0 }} py={4}>
      {/* Recent Big Wins */}
      <Box mb={6}>
        <Flex align="center" mb={2}>
          <Box w={2} h={2} bg="teal.300" borderRadius="full" mr={2} />
          <Text fontWeight="bold">Recent Big Wins</Text>
        </Flex>
        <Flex overflowX="auto" gap={2} pb={2}>
          {bigWins.map((win, idx) => (
            <BigWinItem key={idx} img={win.img} user={win.user} amount={win.amount} />
          ))}
        </Flex>
      </Box>

      {/* Categories */}
      <Flex gap={4} mb={8} flexDir={["column", "column", "row"]}>
        <Grid templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)"]} gap={4} flex="2">
          {[categories[0], categories[1]].map((cat, idx) => (
            <CategoryCard
              key={idx}
              label={cat.label}
              icon={cat.icon}
              img={cat.img}
              variant="large"
            />
          ))}
        </Grid>
        <Grid
          templateColumns={{ base: 'repeat(4, 1fr)', md: 'repeat(2, 1fr)' }}
          templateRows={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          gap={4}
          flex="2"
        >
          {categories.slice(2, 6).map((cat, idx) => (
            <CategoryCard
              key={idx}
              label={cat.label}
              icon={cat.icon}
              img={cat.img}
              variant="small"
            />
          ))}
        </Grid>
      </Flex>

      {/* Top Games */}
      <Box mb={6}>
        <Flex align="center" justify="space-between" mb={2}>
          <Text fontWeight="bold">Top Games</Text>
          <Button size="sm" variant="ghost" colorScheme="gray">All</Button>
        </Flex>
        <Grid templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]} gap={4}>
          {topGames.map((game, idx) => (
            <TopGameCard key={idx} rank={game.rank} name={game.name} img={game.img} />
          ))}
        </Grid>
      </Box>

      {/* Slot */}
      <Box mb={6}>
        <Flex align="center" justify="space-between" mb={2}>
          <Text fontWeight="bold">Slot</Text>
          <Button size="sm" variant="ghost" colorScheme="gray">All</Button>
        </Flex>
        <Flex overflowX="auto" gap={3} pb={2}>
          {slotGames.map((game, idx) => (
            <SlotGameCard key={idx} name={game.name} img={game.img} tag={game.tag} />
          ))}
        </Flex>
      </Box>

      {/* Sport (placeholder) */}
      <Box>
        <Text fontWeight="bold">Sport</Text>
      </Box>
    </Box>
  );
};

export default HomePage;