import { Box, Flex, Text, Image } from "@chakra-ui/react";

const navItems = [
  { label: "Menu", icon: "/img/menu.png" },
  { label: "Game", icon: "/img/play-game.png" },
  { label: "Casino", icon: "/img/casino.png" },
  { label: "Sport", icon: "/img/sport.png" },
  { label: "Chat", icon: "/img/chat.png" },
];

const BottomNavBar = () => {
  return (
    <Flex
      position="fixed"
      bottom={0}
      left={0}
      w="100vw"
      bg="#232323"
      py={2}
      px={2}
      zIndex={10}
      borderTopLeftRadius="16px"
      borderTopRightRadius="16px"
      justifyContent="space-around"
      alignItems="center"
      display={["flex", "flex", "none"]} // Ẩn trên tablet trở lên
      boxShadow="0px -2px 16px 0px rgba(0,0,0,0.15)"
    >
      {navItems.map((item) => (
        <Flex key={item.label} direction="column" align="center" flex={1}>
          <Image src={item.icon} alt={item.label} boxSize="28px" mb={1} />
          <Text fontSize="12px" color="#B4F1F6" fontWeight={500}>
            {item.label}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default BottomNavBar; 