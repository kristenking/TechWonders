import React from 'react';
import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import ProductsScreen from './screens/ProductsScreen';
import HeroSection from './components/HeroSection';
import { Box } from '@chakra-ui/react';

function App() {
  return (
  <ChakraProvider>
    <Router>
      <Box  bgImage={require('../src/assets/background.jpg')} bgSize="cover" bgPosition="center">
      <Navbar />
      <main>
        <Routes>
        <Route path='/products' element={<ProductsScreen />} ></Route>
        </Routes>
      </main>
      <HeroSection />
      </Box>
    </Router>
  </ChakraProvider>
  );
}

export default App;
