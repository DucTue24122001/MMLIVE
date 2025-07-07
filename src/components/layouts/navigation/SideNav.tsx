import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import game from "../../../../public/img/play-game.png";
import casino from "../../../../public/img/casino.png";
import sport from "../../../../public/img/sport.png";
import menu from "../../../../public/img/menu.png";
import chat from "../../../../public/img/chat.png";
import language from "../../../../public/img/language.png";
import { MdOutlineNavigateNext } from "react-icons/md";
import WithSkeleton from "@/components/utils/WithSkeleton";

const menuDummy = [
  {
    name: "Game",
    src: game.src,
    items: [
      { name: "Mimi", src: game.src },
      { name: "FaChai", src: game.src },
      { name: "JiLi", src: game.src },
      { name: "Joker", src: game.src },
      { name: "Spade", src: game.src },
    ],
  },
  {
    name: "Casino",
    src: casino.src,
    items: [],
  },
  {
    name: "Sport",
    src: sport.src,
    items: [],
  },
  {
    name: "Menu",
    src: menu.src,
    items: [
      { name: "Mimi", src: game.src },
      { name: "FaChai", src: game.src },
    ],
  },
  {
    name: "Chat",
    src: chat.src,
    items: [],
  },
  {
    name: "Language",
    src: language.src,
    items: [],
  },
];

const SideNav = () => {
  return (
    <WithSkeleton skeletonType="sidenav">
      <Flex
        mt="70px"
        w="240px"
        h="800px"
        pos="fixed"
        left={0}
        top={0}
        bg="#242424"
        p="16px"
        direction="column"
        display={["none", "none", "none", "none", "flex"]}
      >
        <Accordion allowMultiple width="full">
          {menuDummy.map((menu, i) => (
            <AccordionItem
              key={i}
              border="none"
              padding={0}
              _notLast={{ mb: "5px" }}
            >
              {({ isExpanded }) => (
                <Flex
                  direction="column"
                  bg="#333"
                  borderRadius="8px"
                  overflow="hidden"
                >
                  <AccordionButton
                    as={Flex}
                    px="8px"
                    py="8px"
                    alignItems="center"
                    justifyContent="space-between"
                    p={"10px"}
                    _hover={{ bg: "#3d3d3d" }}
                  >
                    <Flex gap={5} alignItems="center">
                      <Image
                        boxSize="24px"
                        src={menu.src}
                        alt={menu.name}
                        objectFit="contain"
                      />
                      <Text fontWeight={600} lineHeight="24px">
                        {menu.name}
                      </Text>
                    </Flex>
                    {menu.items.length > 0 && (
                      <Box
                        minW="28px"
                        justifyContent="center"
                        alignItems="center"
                        p="4px"
                        bg="#4D4D4D"
                        borderRadius="8px"
                        display="flex"
                      >
                        <Text
                          transform={isExpanded ? "rotate(90deg)" : "skewX(0deg)"}
                          transition="transform 0.2s ease"
                        >
                          <MdOutlineNavigateNext fontSize={18} />
                        </Text>
                      </Box>
                    )}
                  </AccordionButton>
                    {menu.items.length > 0 && (
                      <AccordionPanel pb="8px" pt="0" px="8px" bg="#333" w="full">
                        <Flex direction="column" gap="4px">
                          {menu.items.map((item, idx) => (
                            <Flex key={idx} gap={5} alignItems="center" p="8px" cursor={"pointer"} _hover={{ bg: "#3d3d3d" }}>
                              <Image
                                boxSize="24px"
                                src={item.src}
                                alt={item.name}
                                objectFit="contain"
                              />
                              <Text fontWeight={600} lineHeight="24px">
                                {item.name}
                              </Text>
                            </Flex>
                          ))}
                        </Flex>
                      </AccordionPanel>
                    )}
                </Flex>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Flex>
    </WithSkeleton>
  );
};

export default SideNav;
