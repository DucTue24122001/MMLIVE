"use client"
import React, { forwardRef } from 'react';
import useLoadingState from '@/hooks/useLoadingState';
import SkeletonLoader from './SkeletonLoader';
import Slider from 'react-slick';

interface WithSkeletonSliderProps {
  children: React.ReactNode;
  settings: any;
  skeletonCount?: number;
  delay?: number;
  minLoadingTime?: number;
  fallback?: React.ReactNode;
}

const WithSkeletonSlider = forwardRef<Slider, WithSkeletonSliderProps>(
  ({ children, settings, skeletonCount = 4, delay = 0, minLoadingTime = 500, fallback }, ref) => {
    const { isLoading, isMounted } = useLoadingState({ delay, minLoadingTime });

    // Nếu chưa mount hoặc đang loading, hiển thị skeleton
    if (!isMounted || isLoading) {
      return fallback || <SkeletonLoader type="slider" count={skeletonCount} />;
    }

    // Nếu đã load xong, hiển thị slider với ref
    return (
      <Slider {...settings} ref={ref}>
        {children}
      </Slider>
    );
  }
);

WithSkeletonSlider.displayName = 'WithSkeletonSlider';

export default WithSkeletonSlider; 