import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import robot1 from '../assets/robot1.png';

const HeroSection = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" h="100vh">
      <Box maxW="600px" mx="auto" px="4" display="flex" alignItems="center" order="2">
        <Image src={robot1} w="90%" mr="200"/>
      </Box>
      <Text order="1" w="30%" ml="4" fontSize="3xl" ml="200">
        Hello, Human! Welcome to the world of modern robots. 
        Here you can learn about the latest models, interact 
        with our friendly AI, and maybe even take one home with you.
      </Text>
    </Box>
  );
};

export default HeroSection;
