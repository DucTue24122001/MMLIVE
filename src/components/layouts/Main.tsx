"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import Navbar from "./Navbar";
import LoginModal from "../auth/LoginModal";
import SignupModal from "../auth/SignupModal";
import { store } from "configs/redux/store";
import baseTheme from "configs/theme/base-theme";
import SideNav from "./navigation/SideNav";

type TMain = {
  children: React.ReactNode;
};

const Main = ({ children }: TMain) => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={baseTheme}>
        <Navbar />
        <SideNav/>
        {children}
        <LoginModal />
        <SignupModal />
      </ChakraProvider>
    </Provider>
  );
};

export default Main;
