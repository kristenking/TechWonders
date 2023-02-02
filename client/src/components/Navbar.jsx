import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Icon,
  Text,
  useDisclosure,
  Button,
  Stack,
  useColorModeValue,
  useColorMode,
  Image,
  Input
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import React from "react";
import { GiRobotLeg } from "react-icons/gi";

const Navbar = () => {

  const { isOpen, onClose, onOpen } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: "teal.900", dark: "teal.200" };
  const color = { light: "white", dark: "gray.800" };

  return (
    <Box
      display="flex"
      alignItems="center"
      py={4}
      px={8}
      bg={bgColor[colorMode]}
      color={color[colorMode]}
    >
      <Box display="flex" flex={1} alignItems="center">
        <Icon as={GiRobotLeg} h={10} width={10} mr={2} color='green.400' />
        <Text fontWeight='extrabold'>Tech Wonders</Text>
      </Box>

      <Box display="flex" alignItems='center'>
        <Link to="/" mx={2}>
          Home
        </Link>
        <Link to="/products" mx={2}>
          Products
        </Link>
        <Link to="/about" mx={2}>
          About
        </Link>
        <Box mr={3}>
          <Input placeholder="Search products..." />
        </Box>
        <Link to="/cart">
          <Box
            as="span"
            px={2}
            py={1}
            bg="#53B8BB"
            rounded="md"
            color={color[colorMode]}
          >
            Cart
          </Box>
        </Link>
        <Link >
          <Box px={3} display="flex" alignSelf="center">
            <Icon as={colorMode === 'light' ? MoonIcon : SunIcon}
              onClick={() => toggleColorMode()} />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
