import React from "react";
import AuthModal from "../utils/AuthModal";
import { Box, Checkbox, Flex, Link, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import DefaultInput from "../utils/DefaultInput";
import DefaultInputPassword from "../utils/DefaultInputPassword";
import DefaultButton from "../utils/DefaultButton";
import LoginContactByCommon from "./utils/LoginContactByCommon";
import { RootState } from "configs/redux/store";
import { clientAction } from "configs/redux/client-slice";
import { colors } from "configs/theme/colors";

const SignupModal = () => {
  const { isOpenSignupModal } = useSelector((state: RootState) => state.client);
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(clientAction.setIsOpenSignupModal(false));
  };

  const onSwitchToLogin = () => {
    dispatch(clientAction.setIsOpenSignupModal(false));
    dispatch(clientAction.setIsOpenLoginModal(true));
  }
  return (
    <AuthModal isOpen={isOpenSignupModal} onClose={handleCloseModal}>
      <Flex h={"100%"} direction={"column"} justifyContent={"space-between"}>
        <Flex direction={"column"}>
          <Text
            fontWeight={600}
            fontStyle={"normal"}
            fontSize={"24px"}
            lineHeight={"32px"} 
            letterSpacing={"-0.5px"}
          >
            Sign Up
          </Text>
          <form>
            <Flex gap={5} mt={5} direction={"column"}>
              <Box>
                <DefaultInput placeholder={"Email / Phone Number"} />
              </Box>
              <Box>
                <DefaultInputPassword placeholder={"Password"} />
              </Box>
              <Box>
                <Text>Enter Referral / Promo Code</Text>
                <DefaultInput placeholder={"Enter Referral / Promo Code"} />
              </Box>
              <Flex direction={"column"}>
                <Flex gap={5}>
                  <Checkbox/>
                  <Text color={colors.primary.text}>I agree to the User Agreement & confirm I am at least 18 years old</Text>
                </Flex>
                <Flex gap={5}>
                  <Checkbox/>
                  <Text color={colors.primary.text}>I agree to receive marketing promotions from MIMI+</Text>
                </Flex>
              </Flex>
              <Flex>
                <DefaultButton
                  bg={"linear-gradient(100deg, #5C77FF 1.46%, #B4F1F6 95.52%)"}
                >
                  Sign Up
                </DefaultButton>
              </Flex>
              <Flex gap={5}>
                <Text
                  fontWeight={600}
                  fontStyle={"normal"}
                  fontSize={16}
                  lineHeight={"24px"}
                >
                  Already have an account?
                </Text>
                <Link
                  fontWeight={600}
                  fontStyle={"normal"}
                  fontSize={16}
                  lineHeight={"24px"}
                  color={colors.primary.blue}
                  onClick={onSwitchToLogin}
                >
                  Log In
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

export default SignupModal;
