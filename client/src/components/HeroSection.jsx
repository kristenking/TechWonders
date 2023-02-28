import React from 'react';
import { Box, Text, Heading, Image, Button } from '@chakra-ui/react';
import robot1 from '../assets/robot1.png';

const HeroSection = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" h="100vh">
      <Box mx="auto" px="4" display="flex" alignItems="center" order="2" mr="100px" w="300vh">
        <Image src={robot1} w="100%" />
      </Box>
      <Box ml="200" mt="-100" color="#ededed" mr="100">
        <Heading as="h1" fontSize="3xl" mb="10">Hello, Human!</Heading>
        <Text fontSize="25px">
          Welcome to the world of modern robots. Here you can learn about the latest models, interact 
          with our friendly AI, and maybe even take one home with you.
        </Text>
        <Box display="flex" justifyContent="flex-end" >
          <Button bgColor="#53B8BB" size="lg" mt={5} borderRadius={14}>Explore</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
