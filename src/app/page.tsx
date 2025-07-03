import HomeSlider from "@/components/layouts/home/HomeSlider";
import { Center, Flex, Image } from "@chakra-ui/react";


export default function Home() {
  return (
    <Flex className="layout-center" fontSize={28} margin={"auto"}>
      <HomeSlider />
    </Flex>
  );
}
