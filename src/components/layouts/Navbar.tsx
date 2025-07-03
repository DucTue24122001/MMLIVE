"use client"
import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import mm_logo from "../../../public/img/mm-logo.png";
import mm_logo_mobile from "../../../public/img/mm-logo-mobile.png";
import DefaultButton from "../utils/DefaultButton";
import { clientAction } from "configs/redux/client-slice";
import { colors } from "configs/theme/colors";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleOpenLogin = () => {
    dispatch(clientAction.setIsOpenLoginModal(true));
  };
  const handleOpenSignup = () => {
    dispatch(clientAction.setIsOpenSignupModal(true));
  };
  return (
    <>
      <Flex
        w={"100%"}
        minH={"30px"}
        bg={colors.primary.bg}
        p={["8px", "8px", "8px", "8px", "8px 391px 8px 16px"]}
        pos={"sticky"}
        zIndex={2}
        top={0}
      >
        <Flex w={"100%"} justifyContent={"space-between"} alignItems={"center"}>
          <Flex>
            <Image
              display={["none", "none", "block", "block"]}
              h={["34px", "54px"]}
              objectFit={"contain"}
              src={mm_logo.src}
            />
            <Image
              display={["block", "block", "none", "none"]}
              h={["34px", "54px"]}
              objectFit={"contain"}
              src={mm_logo_mobile.src}
            />
          </Flex>
          <Flex gap={5}>
            <Button
              sx={styleBtnNav}
              bg={colors.primary.bg}
              _hover={{ bg: colors.primary.bg }}
              onClick={handleOpenLogin}
            >
              Log In
            </Button>
            <DefaultButton
              sx={styleBtnNav}
              bg={"linear-gradient(100deg, #5C77FF 1.46%, #B4F1F6 95.52%)"}
              onClick={handleOpenSignup}
            >
              Sign Up
            </DefaultButton>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;

const styleBtnNav = {
  w: ["auto", "120px"],
  h: ["34px", "44px"],
  border: "solid 1px #666",
  p: ["4px 16px", "8px 16px"],
  color: colors.primary.text_white,
  boxShadow: "0px 0px 12px 0px rgba(4, 5, 8, 0.2)",
  fontSize: ["13px", "16px"],
  fontWeight: 600,
};
