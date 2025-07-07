"use client"
import React from 'react';
import useLoadingState from '@/hooks/useLoadingState';
import SkeletonLoader from './SkeletonLoader';

interface WithSkeletonProps {
  children: React.ReactNode;
  skeletonType: 'card' | 'list' | 'grid' | 'slider' | 'banner' | 'category' | 'game' | 'match' | 'sidenav';
  skeletonCount?: number;
  delay?: number;
  minLoadingTime?: number;
  fallback?: React.ReactNode;
}

const WithSkeleton: React.FC<WithSkeletonProps> = ({
  children,
  skeletonType,
  skeletonCount = 4,
  delay = 0,
  minLoadingTime = 500,
  fallback
}) => {
  const { isLoading, isMounted } = useLoadingState({ delay, minLoadingTime });

  // Nếu chưa mount, hiển thị skeleton
  if (!isMounted) {
    return fallback || <SkeletonLoader type={skeletonType} count={skeletonCount} />;
  }

  // Nếu đang loading, hiển thị skeleton
  if (isLoading) {
    return <SkeletonLoader type={skeletonType} count={skeletonCount} />;
  }

  // Nếu đã load xong, hiển thị content
  return <>{children}</>;
};

export default WithSkeleton; 