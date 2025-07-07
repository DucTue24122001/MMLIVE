import React, { useState } from 'react';
import { Box, Flex, Text, Table, Thead, Tbody, Tr, Th, Td, Skeleton, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import WithSkeleton from '@/components/utils/WithSkeleton';
import { colors } from 'configs/theme/colors';

// Fake data for demo
const DEMO_DATA = [
  { game: 'Labubu', player: 'capybara', multiplier: '0.00x', profit: '-37.9739', flag: '🇩🇪' },
  { game: 'Labubu', player: 'Hidden', multiplier: '0.00x', profit: '-37.9739', flag: '🇩🇪' },
  { game: 'Labubu', player: 'capybara', multiplier: '0.00x', profit: '-37.9739', flag: '🇩🇪' },
  { game: 'Labubu', player: 'capybara', multiplier: '0.00x', profit: '-37.9739', flag: '🇩🇪' },
  { game: 'Labubu', player: 'capybara', multiplier: '0.00x', profit: '-37.9739', flag: '🇩🇪' },
];
const HIGH_ROLLER_DATA = [
  { game: 'Olympus', player: 'lion', multiplier: '1.23x', profit: '1000.00', flag: '🇺🇸' },
  { game: 'Olympus', player: 'tiger', multiplier: '2.00x', profit: '800.00', flag: '🇺🇸' },
];
const WAGER_CONTEST_DATA = [
  { game: 'Mandan', player: 'rabbit', multiplier: '0.50x', profit: '500.00', flag: '🇫🇷' },
  { game: 'Mandan', player: 'fox', multiplier: '0.75x', profit: '300.00', flag: '🇫🇷' },
];

type TableRow = {
  game: string;
  player: string;
  multiplier: string;
  profit: string;
  flag: string;
};

const TableContent = ({ isLoading, data }: { isLoading: boolean; data: TableRow[] }) => (
  <Box overflowX="auto" minH={"200px"} borderRadius={"8px"}>
    <Table variant="simple" colorScheme="gray">
      <Thead>
        <Tr bg="#353535" h={"40px"}>
          <Th color="#B2B2B2" textTransform={"capitalize"} fontSize={"14px"} fontWeight={500}>Game</Th>
          <Th color="#B2B2B2" textTransform={"capitalize"} fontSize={"14px"} fontWeight={500}>Player</Th>
          <Th color="#B2B2B2" textTransform={"capitalize"} fontSize={"14px"} fontWeight={500}>Multiplier</Th>
          <Th color="#B2B2B2" textTransform={"capitalize"} fontSize={"14px"} fontWeight={500}>Profit</Th>
        </Tr>
      </Thead>
      <Tbody>
        {isLoading ? (
          Array(5).fill(0).map((_, idx: number) => (
            <Tr key={idx}>
              <Td><Skeleton height="20px" /></Td>
              <Td><Skeleton height="20px" /></Td>
              <Td><Skeleton height="20px" /></Td>
              <Td><Skeleton height="20px" /></Td>
            </Tr>
          ))
        ) : (
          data.map((row: TableRow, idx: number) => (
            <Tr key={idx} bg={idx % 2 === 0 ? '#444' : '#353535'} h={"40px"} >
              <Td color="#fff">{row.game}</Td>
              <Td color="#fff">{row.player}</Td>
              <Td color="#fff">{row.multiplier}</Td>
              <Td color="#fff">{row.profit} <span style={{ marginLeft: 8 }}>{row.flag}</span></Td>
            </Tr>
          ))
        )}
      </Tbody>
    </Table>
  </Box>
);

const RecentRoundsTable = ({ isLoading = false }) => {
  return (
    <Box bg="#232323" borderRadius="md" mb={8} w="100%">
      <Flex align="center" justify="space-between" mb={4}>
        <Text fontSize="18px" fontWeight="bold">Lastest round & Race</Text>
      </Flex>
      <Tabs variant="unstyled" colorScheme="gray">
        <TabList mb={4} justifyContent={"flex-end"} >
          <Flex bg={"#333"} borderRadius={"8px"} p={"8px"}>
            <Tab _selected={{ bg: '#444', color: '#fff', fontWeight: 'bold', borderRadius: '8px' }} color="#fff">Lastest Bet</Tab>
            <Tab _selected={{ bg: '#444', color: '#fff', fontWeight: 'bold', borderRadius: '8px' }} color="#fff">High Roller</Tab>
            <Tab _selected={{ bg: '#444', color: '#fff', fontWeight: 'bold', borderRadius: '8px' }} color="#fff">Wager Contest</Tab>
          </Flex>
        </TabList>
        <TabPanels borderRadius="8px">
          <TabPanel px={0}>
            <TableContent isLoading={isLoading} data={DEMO_DATA} />
          </TabPanel>
          <TabPanel px={0}>
            <TableContent isLoading={isLoading} data={HIGH_ROLLER_DATA} />
          </TabPanel>
          <TabPanel px={0}>
            <TableContent isLoading={isLoading} data={WAGER_CONTEST_DATA} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default RecentRoundsTable; 