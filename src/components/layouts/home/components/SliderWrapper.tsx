"use client"
import React, { useState, useEffect, forwardRef } from 'react';
import { Box } from '@chakra-ui/react';
import Slider from 'react-slick';

interface SliderWrapperProps {
  children: React.ReactNode;
  settings: any;
  className?: string;
}

const SliderWrapper = forwardRef<Slider, SliderWrapperProps>(
  ({ children, settings, className }, ref) => {

    return (
      <Box className={className}>
        <Slider {...settings} ref={ref}>
          {children}
        </Slider>
      </Box>
    );
  }
);

SliderWrapper.displayName = 'SliderWrapper';

export default SliderWrapper; 