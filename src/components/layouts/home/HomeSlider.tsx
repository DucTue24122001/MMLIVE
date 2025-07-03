"use client";
import React from "react";
import banner1 from "../../../../public/img/banner1.png";
import banner2 from "../../../../public/img/banner2.jpg";
import banner3 from "../../../../public/img/banner3.jpg";
import { Box, Flex, Image } from "@chakra-ui/react";
import Slider from "react-slick";

const HomeSlider = () => {
  const settings = {
    dots: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Flex mt={[2,2,5,5]}>
      <Box
        w={["calc(100vw - 32px)", "calc(100vw - 64px)", "calc(100vw - 32px)", "calc(100vw - 192px)", "900px", "1120px"]}
        // minH="200px"
        className="home-slider"
        mx="auto"
      >
        <Slider {...settings}>
          {bannerDummy.map((ban, i) => (
            <Flex key={i} borderRadius={"10px"} overflow={"hidden"}>
              <Image w={"100%"} minH={"100px"} src={ban.src} alt="gift" objectFit={"contain"} />
            </Flex>
          ))}
        </Slider>
      </Box>
    </Flex>
  );
};

export default HomeSlider;

const bannerDummy = [
  {
    src: banner1.src,
  },
  {
    src: banner2.src,
  },
  {
    src: banner3.src,
  },
];
