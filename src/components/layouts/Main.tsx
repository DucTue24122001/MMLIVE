"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import Navbar from "./Navbar";
import LoginModal from "../auth/LoginModal";
import SignupModal from "../auth/SignupModal";
import { store } from "configs/redux/store";
import baseTheme from "configs/theme/base-theme";
import SideNav from "./navigation/SideNav";
import BottomNavBar from "./navigation/BottomNavBar";
import ClientOnly from "../utils/ClientOnly";
import { LoadingProvider } from "../utils/LoadingProvider";
import GlobalLoading from "../utils/GlobalLoading";

type TMain = {
  children: React.ReactNode;
};

const Main = ({ children }: TMain) => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={baseTheme}>
        <LoadingProvider>
          {/* <GlobalLoading /> */}
          {/* <Navbar /> */}
          <ClientOnly>
            <SideNav/>
          </ClientOnly>
          {children}
          <ClientOnly>
            <LoginModal />
          </ClientOnly>
          <ClientOnly>
            <SignupModal />
          </ClientOnly>
          <ClientOnly>
            <BottomNavBar />
          </ClientOnly>
        </LoadingProvider>
      </ChakraProvider>
    </Provider>
  );
};

export default Main;
