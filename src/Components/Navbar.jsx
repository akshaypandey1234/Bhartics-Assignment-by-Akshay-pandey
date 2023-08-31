import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, Image, Spacer, Stack, Text, useDisclosure, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverArrow } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';


const Navbar = () => {
  const { isAuth, user, logout } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif', margin: 0, position: 'sticky', top: 0, zIndex: 999 , backgroundColor: "white"}}>
      <Flex minWidth="max-content" alignItems="center" gap="7" px={5} paddingBottom="10px" paddingTop="10px">
        <HStack>
          <Link to="/">
            <Image
              src="data:image/png;base64,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"
              alt="geek-brains-logo"
              width={120}
              height="90px"
            />
          </Link>
        </HStack>
        <Text fontSize="xl" fontWeight={700} _hover={{ color: '#9d9b9e' }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            Home
          </Link>
        </Text>
        {isAuth ? (
          <Link to={`/users/${user.id}`}>
            <Text fontSize="xl" fontWeight={700} _hover={{ color: '#9d9b9e' }}>
              Selected Models
            </Text>
          </Link>
        ) : null}
        <Text fontSize="xl" fontWeight={700} _hover={{ color: '#9d9b9e' }}>
          About Us
        </Text>
        <Text fontSize="xl" fontWeight={700} _hover={{ color: '#9d9b9e' }}>
          Test Drive
        </Text>
        <Text fontSize="xl" fontWeight={700} _hover={{ color: '#9d9b9e' }}>
          Comparision
        </Text>
        <Popover>
          <PopoverTrigger>
            <Button
              variant="ghost"
              colorScheme="gray"
              p={0}
              _hover={{ backgroundColor: 'transparent' }}
              _focus={{ boxShadow: 'none' }}
              onClick={onOpen}
            >
              <Text fontSize="xl" fontWeight={700} _hover={{ color: '#9d9b9e' }}>
                Vehicals
              </Text>
              <ChevronDownIcon w={6} h={6} />
            </Button>
          </PopoverTrigger>
          <PopoverContent bg="white" shadow="lg" zIndex={999}>
            <PopoverArrow />
            <Stack spacing="24px" p={4}>
              <Text fontSize="xl" _hover={{ color: '#9d9b9e' }}>
                <Link to="/newArrivals">New Arraivals</Link>
              </Text>
              <Text fontSize="xl" _hover={{ color: '#9d9b9e' }}>
                <Link to="/newArrivals">Offers On Vehicals</Link>
              </Text>
              <Text fontSize="xl" _hover={{ color: '#9d9b9e' }}>
                <Link to="/newArrivals">Most Tranding</Link>
              </Text>
              <Text fontSize="xl" _hover={{ color: '#9d9b9e' }}>
                <Link to="/newArrivals">Testing</Link>
              </Text>
              
              <Text fontSize="xl" _hover={{ color: '#9d9b9e' }}>
                <Link to="/newArrivals">About Engines</Link>
              </Text>
            
            </Stack>
          </PopoverContent>
        </Popover>
        <Spacer />
        {isAuth ? (
          <HStack>
            <Text>Hi, {user.name}</Text>
            <Spacer />
            <Button
              colorScheme="gray"
              _hover={{ backgroundColor: 'black', color: 'white' }}
              onClick={logout}
            >
              Logout
            </Button>
          </HStack>
        ) : (
          <HStack>
            <Button colorScheme="gray" _hover={{ backgroundColor: 'black', color: 'white' }}>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                SignIn
              </Link>
            </Button>
            <Spacer />
            <Button colorScheme="gray" _hover={{ backgroundColor: 'black', color: 'white' }}>
              <Link to="/register" style={{ textDecoration: 'none' }}>
                SignUp
              </Link>
            </Button>
          </HStack>
        )}
      </Flex>
    </div>
  );
};

export default Navbar;
