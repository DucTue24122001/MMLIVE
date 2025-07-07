"use client"
import React, { useRef, useState } from 'react';
import {
  Box,
  Flex,
  Grid,
  Text,
  Button,
} from '@chakra-ui/react';
import { FaCrown, FaFutbol, FaTicketAlt } from 'react-icons/fa';
import Slider from 'react-slick';

// Components
import BigWinItem from './components/BigWinItem';
import CategoryCard from './components/CategoryCard';
import TopGameCard from './components/TopGameCard';
import SlotGameCard from './components/SlotGameCard';
import SportMatchCard from './components/SportMatchCard';
import SliderWrapper from './components/SliderWrapper';
import WithSkeleton from '@/components/utils/WithSkeleton';
import RecentRoundsTable from './components/RecentRoundsTable';

// Images
import casinoTop from '../../../../public/img/casino-top.png';
import sportTop from '../../../../public/img/sport-top.png';
import lotteryTop from '../../../../public/img/lottery-top.png';
import gameTop from '../../../../public/img/game-top.png';
import fishingTop from '../../../../public/img/fishing-top.png';
import liveTop from '../../../../public/img/live-top.png';
import candyTop from '../../../../public/img/candy.png';
import BuffaloKing from '../../../../public/img/Buffalo_King.png';
import Olympus from '../../../../public/img/Olympus.png';
import mandan from '../../../../public/img/mandan.png';
import mc from '../../../../public/img/mc.png';

// Slider settings
const SLIDER_SETTINGS = {
  topGame: {
    dots: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  },
  sportMatch: {
    dots: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  }
};

// Data
const BIG_WINS_DATA = Array(12).fill({
  img: candyTop.src,
  user: 'userID',
  amount: '150.00 USDT',
  game: 'Candy Boom',
});

const CATEGORIES_DATA = [
  { label: 'Casino', icon: <FaCrown size={40} />, img: casinoTop.src },
  { label: 'Sport', icon: <FaFutbol size={40} />, img: sportTop.src },
  { label: 'Lottery', icon: <FaTicketAlt size={40} />, img: lotteryTop.src },
  { label: 'Game', icon: <FaTicketAlt size={40} />, img: gameTop.src },
  { label: 'Fishing', icon: <FaTicketAlt size={40} />, img: fishingTop.src },
  { label: 'Live', icon: <FaTicketAlt size={40} />, img: liveTop.src },
];

const TOP_GAME_GRADIENTS = [
  "linear(135deg, #B24592 0%, #F15F79 100%)",
  "linear(135deg, #F7971E 0%, #FFD200 100%)",
  "linear(135deg, #56ab2f 0%, #a8e063 100%)",
  "linear(135deg, #43cea2 0%, #185a9d 100%)",
];

const TOP_GAMES_DATA = Array(16).fill(null).map((_, index) => ({
  rank: (index % 4) + 1,
  name: 'Buffalo King',
  img: BuffaloKing.src,
  bgGradient: TOP_GAME_GRADIENTS[index % TOP_GAME_GRADIENTS.length]
}));

const SLOT_GAMES_DATA = Array(10).fill({
  name: 'Bombing Fish',
  img: Olympus.src,
  tag: 'MIMI',
  user: '1.5k'
});

const SPORT_MATCHES_DATA = Array(10).fill({
  homeLogo: mandan.src,
  awayLogo: mc.src,
  homeName: "Soccer",
  awayName: "Villarreal FC",
  score: "1 : 0",
  status: "Halftime",
  league: "Soccer • Liaa 4",
  isLive: true,
  odds: [
    { label: "1", value: "1.14", color: "#F8BBD0" },
    { label: "draw", value: "1.14", color: "#F8BBD0" },
    { label: "2", value: "13.4", color: "#F8BBD0" },
  ],
  moreOdds: "+4",
});

// Custom hooks
const useSliderNavigation = (totalItems: number, slidesToShow: number = 4) => {
  const [startIndex, setStartIndex] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
    setStartIndex((prev) => Math.min(totalItems - slidesToShow, prev + 1));
  };

  const canPrev = startIndex > 0;
  const canNext = startIndex + slidesToShow < totalItems;

  return {
    sliderRef,
    handlePrev,
    handleNext,
    canPrev,
    canNext
  };
};

// Section components
const RecentBigWins = () => (
  <Box mb={6}>
    <Flex align="center" mb={2}>
      <Box w={2} h={2} bg="teal.300" borderRadius="full" mr={2} />
      <Text fontSize="14px" fontWeight="600">Recent Big Wins</Text>
    </Flex>
    <WithSkeleton skeletonType="list" skeletonCount={6}>
      <Flex overflowX="auto" gap={2} pb={2}>
        {BIG_WINS_DATA.map((win, idx) => (
          <BigWinItem
            key={idx}
            img={win.img}
            user={win.user}
            amount={win.amount}
          />
        ))}
      </Flex>
    </WithSkeleton>
  </Box>
);

const CategoriesSection = () => (
  <WithSkeleton skeletonType="category">
    <Flex gap={4} mb={8} flexDir={["column", "column", "row"]}>
      <Grid templateColumns={["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(2, 1fr)"]} gap={4} flex="2">
        {[CATEGORIES_DATA[0], CATEGORIES_DATA[1]].map((cat, idx) => (
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
        {CATEGORIES_DATA.slice(2, 6).map((cat, idx) => (
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
  </WithSkeleton>
);

const TopGamesSection = () => {
  const { sliderRef, handlePrev, handleNext, canPrev, canNext } = useSliderNavigation(TOP_GAMES_DATA.length, 6);

  return (
    <Box mb={6}>
      <Box w="100%" overflow="hidden">
        <Flex align="center" justify="space-between" mb={2}>
          <Text fontSize="14px" fontWeight="600">Top Games</Text>
          <Flex align="center" gap={2}>
            <Button
              size="md"
              _hover={{ bg: "#4D4D4D", textDecoration: "underline" }}
              bgColor="#4D4D4D"
              color="#fff"
            >
              All
            </Button>
            <Button
              size="md"
              onClick={handlePrev}
              _hover={{ bg: "#4D4D4D" }}
              isDisabled={!canPrev}
              bgColor="#4D4D4D"
              color="#fff"
            >
              {'<'}
            </Button>
            <Button
              size="md"
              onClick={handleNext}
              _hover={{ bg: "#4D4D4D" }}
              isDisabled={!canNext}
              bgColor="#4D4D4D"
              color="#fff"
            >
              {'>'}
            </Button>
          </Flex>
        </Flex>
        <WithSkeleton skeletonType="slider" skeletonCount={6}>
          <Box>
            <SliderWrapper ref={sliderRef} settings={SLIDER_SETTINGS.topGame}>
              {TOP_GAMES_DATA.map((game, idx) => (
                <TopGameCard
                  key={idx}
                  rank={game.rank}
                  name={game.name}
                  img={game.img}
                  bgGradient={game.bgGradient}
                />
              ))}
            </SliderWrapper>
          </Box>
        </WithSkeleton>
      </Box>
    </Box>
  );
};

const SlotSection = () => (
  <Box mb={6}>
    <Flex align="center" justify="space-between" mb={2}>
      <Text fontSize="14px" fontWeight="600">Slot</Text>
      <Button size="sm" variant="ghost" colorScheme="gray">All</Button>
    </Flex>
    <WithSkeleton skeletonType="game" skeletonCount={10}>
      <Flex overflowX="auto" gap={3} pb={2}>
        {SLOT_GAMES_DATA.map((game, idx) => (
          <SlotGameCard
            key={idx}
            name={game.name}
            img={game.img}
            tag={game.tag}
            user={game.user}
          />
        ))}
      </Flex>
    </WithSkeleton>
  </Box>
);

const SportSection = () => {
  const { sliderRef, handlePrev, handleNext, canPrev, canNext } = useSliderNavigation(SPORT_MATCHES_DATA.length, 6);

  return (
    <Box pb={6}>
      <Flex align="center" justify="space-between" mb={2}>
        <Text fontSize="14px" fontWeight="600">Sport</Text>
        <Flex align="center" gap={2}>
          <Button
            size="md"
            _hover={{ bg: "#4D4D4D", textDecoration: "underline" }}
            bgColor="#4D4D4D"
            color="#fff"
          >
            All
          </Button>
          <Button
            size="md"
            onClick={handlePrev}
            _hover={{ bg: "#4D4D4D" }}
            isDisabled={!canPrev}
            bgColor="#4D4D4D"
            color="#fff"
          >
            {'<'}
          </Button>
          <Button
            size="md"
            onClick={handleNext}
            _hover={{ bg: "#4D4D4D" }}
            isDisabled={!canNext}
            bgColor="#4D4D4D"
            color="#fff"
          >
            {'>'}
          </Button>
        </Flex>
      </Flex>
      <WithSkeleton skeletonType="slider" skeletonCount={6}>
        <Box overflow="hidden">
          <SliderWrapper ref={sliderRef} settings={SLIDER_SETTINGS.sportMatch}>
            {SPORT_MATCHES_DATA.map((match, idx) => (
              <SportMatchCard key={idx} {...match} />
            ))}
          </SliderWrapper>
        </Box>
      </WithSkeleton>
    </Box>
  );
};


// Main component
const HomePage = () => {

  return (
    <Box className='layout-center' minH="100vh" color="white" px={{ base: 2, md: 0 }} py={4}>
      <RecentBigWins />
      <CategoriesSection />
      <TopGamesSection />
      <SlotSection />
      <SportSection />
      <RecentRoundsTable isLoading={false} />
    </Box>
  );
};

export default HomePage;