import React from "react";
import AuthModal from "../utils/AuthModal";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import DefaultInput from "../utils/DefaultInput";
import DefaultInputPassword from "../utils/DefaultInputPassword";
import DefaultButton from "../utils/DefaultButton";
import LoginContactByCommon from "./utils/LoginContactByCommon";
import { RootState } from "configs/redux/store";
import { clientAction } from "configs/redux/client-slice";
import { colors } from "configs/theme/colors";

const LoginModal = () => {
  const { isOpenLoginModal } = useSelector((state: RootState) => state.client);
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(clientAction.setIsOpenLoginModal(false));
  };
  const onSwitchToSignUp = () => {
    dispatch(clientAction.setIsOpenLoginModal(false));
    dispatch(clientAction.setIsOpenSignupModal(true));
  }
  return (
    <AuthModal isOpen={isOpenLoginModal} onClose={handleCloseModal}>
      <Flex h={"100%"} direction={"column"} justifyContent={"space-between"}>
        <Flex direction={"column"}>
          <Text
            fontWeight={600}
            fontStyle={"normal"}
            fontSize={"24px"}
            lineHeight={"32px"}
            letterSpacing={"-0.5px"}
          >
            Log In
          </Text>
          <form>
            <Flex gap={5} mt={5} direction={"column"}>
              <Box>
                <DefaultInput placeholder={"Email / Phone Number"} />
              </Box>
              <Box>
                <DefaultInputPassword placeholder={"Password"} />
              </Box>
              <Flex justifyContent={"flex-end"}>
                <Text color={colors.primary.text}>Forgot your password?</Text>
              </Flex>
              <Flex>
                <DefaultButton
                  bg={"linear-gradient(100deg, #5C77FF 1.46%, #B4F1F6 95.52%)"}
                >
                  Log In
                </DefaultButton>
              </Flex>
              <Flex gap={5}>
                <Text
                  fontWeight={600}
                  fontStyle={"normal"}
                  fontSize={16}
                  lineHeight={"24px"}
                >
                  Don't have an account?
                </Text>
                <Link
                  fontWeight={600}
                  fontStyle={"normal"}
                  fontSize={16}
                  lineHeight={"24px"}
                  color={colors.primary.blue}
                  onClick={onSwitchToSignUp}
                >
                  Create account?
                </Link>
              </Flex>
            </Flex>
          </form>
          <Flex />
        </Flex>
        <Flex pt={[5,0]}>
          <LoginContactByCommon />
        </Flex>
      </Flex>
    </AuthModal>
  );
};

export default LoginModal;
