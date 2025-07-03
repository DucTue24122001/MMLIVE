import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';

interface CategoryCardProps {
  label: string;
  icon: React.ReactNode;
  img: string;
  variant: 'large' | 'small';
}

const CategoryCard: React.FC<CategoryCardProps> = ({ label, icon, img, variant }) => {
  if (variant === 'large') {
    return (
      <Box
        bg="#333"
        borderRadius="xl"
        p={[3,3,6,6,6,6]}
        minH={["196px", "196px", "270px", "270px", "270px", "270px"]}
        w="100%"
        position="relative"
        overflow="hidden"
      >
        <Text fontSize={["14px", "14px", "24px", "24px", "24px", "24px"]} fontWeight="bold" mb={2} display="flex" alignItems="center" gap={2}>
          {icon} {label}
        </Text>
        <Image
          src={img}
          alt={label}
          position="absolute"
          right={[-5,-5,0,0]}
          bottom={4}
          h={["146px", "146px", "166px", "166px", "166px", "166px"]}
          opacity={0.9}
          objectFit={"contain"}
        />
      </Box>
    );
  }
  return (
    <Box
      bg="#333"
      borderRadius="xl"
      p={[2,2,4,4,4,4]}
      minH={["120px", "120px", "120px", "120px", "120px", "60px"]}
      position="relative"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      alignItems={{ base: "center", md: "flex-start" }}
      justifyContent={{ base: "flex-start", md: "flex-start" }}
      textAlign={{ base: "center", md: "left" }}
    >
      <Image
        src={img}
        alt={label}
        position={{ base: "static", md: "absolute" }}
        right={{ base: "auto", md: 0 }}
        top={{ base: 0, md: "auto" }}
        bottom={{ base: "auto", md: 0 }}
        mx={{ base: "auto", md: 0 }}
        mb={{ base: 2, md: 0 }}
        h={["82px", "82px", "116px", "116px", "116px", "116px"]}
        objectFit="contain"
        opacity={0.9}
      />
      <Text
        fontSize={["14px", "14px", "20px", "20px", "20px", "20px"]}
        fontWeight="bold"
        mt={{ base: 2, md: 0 }}
        display="flex"
        alignItems="center"
        gap={2}
      >
        <Box display={{ base: "none", md: "inline-flex" }}>{icon}</Box> {label}
      </Text>
    </Box>
  );
};

export default CategoryCard; 