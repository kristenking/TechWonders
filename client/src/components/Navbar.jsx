// import {
//   Box,
//   Flex,
//   HStack,
//   Link,
//   IconButton,
//   Icon,
//   Text,
//   useDisclosure,
//   Button,
//   Stack,
//   useColorModeValue,
//   useColorMode,
// } from "@chakra-ui/react";
// import { Link as ReactLink } from "react-router-dom";
// import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
// import { GiRobotLeg } from "react-icons/gi";

// const Navbar = () => {
//   const { isOpen, onClose, onOpen } = useDisclosure()
//   const { colorMode, toggleColorMode } = useColorMode()
//   return (
//     <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
//       <Flex h={16} alignItems="center" justifyContent="space-between">
//         <IconButton
//           size="md"
//           icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//           display={{ md: "none" }}
//           onClick={isOpen ? onClose : onOpen}
//         />
//         <HStack>
//           <Link as={ReactLink} to="/">
//             <Flex alignItems='center'>
// <Icon as={GiRobotLeg} h={6} width={6} color='green.400'/>
// <Text fontWeight='extrabold'>Tech Wonders</Text>

//             </Flex>
//           </Link>
//         </HStack>
//       </Flex>
//     </Box>
//   );
// };

// export default Navbar;
import React from "react";
import { Box, Image, Input, Link, useColorMode, Icon, Text} from "@chakra-ui/react";
import { GiRobotLeg } from "react-icons/gi";

const Navbar = () => {
  const { colorMode } = useColorMode();
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
      <Icon as={GiRobotLeg} h={10} width={10} mr={2} color='green.400'/>
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
        <Box mr={2}>
        <Input placeholder="Search products..." />
      </Box>
        <Link to="/cart">
          <Box
            as="span"
            px={2}
            py={1}
            bg="gray.200"
            rounded="md"
            color={color[colorMode]}
          >
            Cart
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
