import HomePage from "@/components/layouts/home/HomePage";
import HomeSlider from "@/components/layouts/home/HomeSlider";
import Navbar from "@/components/layouts/Navbar";
import BottomNavBar from "@/components/layouts/navigation/BottomNavBar";
import { Box, Flex } from "@chakra-ui/react";
import { colors } from "configs/theme/colors";

export default function Home() {
  return (
    <Box minH="100vh">
      <Navbar />
      <Flex
        direction="column"
        align="center"
        justify="flex-start"
        minH="calc(100vh - 60px)"
        pt={[3, 5, 8]}
        pb={[16, 8, 8]} // chừa chỗ cho bottom nav trên mobile
      >
        <HomeSlider />
        <HomePage />
      </Flex>
      <BottomNavBar />
    </Box>
  );
}
