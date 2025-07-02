import {
  Flex,
  Grid,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import bgmodal from "../../../public/img/bgmodal.png"
import logo from "../../../public/img/mm-logo.png"
import { colors } from "configs/theme/colors";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  isLoading?: boolean;
  size?: string | string[];
  minW?: string | string[];
  p?: string;
  isCentered?: boolean;
  customCloseButton?: ReactNode;
  hideCloseButton?: boolean;
}

const AuthModal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <Modal variant={colors.primary.bg} size={["full","5xl"]} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent bg={colors.primary.bg} minH={["100%","600px"]} borderRadius={"10px"} overflow={"hidden"}>
      <ModalCloseButton zIndex={2} bg={"#4D4D4D"} borderRadius={"8px"} />
        <Grid templateColumns={["repeat(1,1fr)", "repeat(2,1fr)"]} minH={["100%","600px"]}>
          <Flex direction={"column"}>
            <Flex className="image-fade" bgImage={bgmodal.src} bgSize={"100% 100%"} minH={["300px","350px"]} bgRepeat={"no-repeat"}>
                <Image m={"20px 0 0 10px"} h={"35px"} src={logo.src} objectFit={"contain"} />
            </Flex>
            <Flex display={["none","none","flex","flex"]} direction={"column"} justifyContent={"center"} alignItems={"center"}>
                <Text fontWeight={600} fontSize={"40px"} fontStyle={"normal"}>Stay Untamed</Text>
                <Text fontSize={"20px"}fontWeight={600} lineHeight={"24px"} letterSpacing={"-0.5px"} >Sign Up & Get Welcome Bonus</Text>
            </Flex>
          </Flex>
          <Flex mt={["-50px","-50px","0px","0px"]} p={"25px"} h={"100%"} flexDir="column">    
            {children}
          </Flex>
        </Grid>
      </ModalContent>
    </Modal>
  );
};

export default AuthModal;
