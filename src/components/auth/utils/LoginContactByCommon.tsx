import { Box, Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const LoginContactByCommon = () => {
  return (
    <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} gap={3}>
        <Flex alignItems={"center"} gap={5}>
          <Box h={"1px"} bg={"#666"} minW={["100px","124px"]} ></Box>
          <Text fontWeight={400} fontSize={"16px"}> Or Login By </Text>
          <Box h={"1px"} bg={"#666"} minW={["100px","124px"]}></Box>
        </Flex>
        <Flex gap={2}>
            {contactDummy.map((c, i) => (
                <Link href='#' key={i} p={"10px"} border={"1px solid #ccc"} borderRadius={10}>
                    {c.icon}
                </Link>
            ))}
        </Flex>
    </Flex>
  )
}

export default LoginContactByCommon

const contactDummy = [
    {
        icon: <FaGoogle/>
    },
    {
        icon: <FaTelegramPlane/>
    },
    {
        icon: <FaTwitter/>
    },
]

