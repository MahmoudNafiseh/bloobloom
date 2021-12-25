import React from 'react';
import { VStack, Flex, Box } from '@chakra-ui/react';
import HoverMenu from './HoverMenu';
import './Menu.css';
//
// The header ('menu container')
//
const Header = React.memo(() => {
  return (
    <VStack>
      <Flex
        as="header"
        position="fixed"
        w="100%"
        className="border "
        pl={'20px'}
        zIndex={1000}
        h={'64px'}
        alignItems={'center'}
        bg={'white'}
      >
        <Box h="full" w={100} d="flex" alignItems={'center'} className="menu">
          <span className="fontCustom2 ">
            <ul
              className="ulistAnim"
              style={{ listStyleType: 'none', height: '100%' }}
            >
              <li className="listItemAnim">
                <a className="menuTextAnim" href="#0">
                  MENU
                </a>
              </li>
            </ul>
          </span>
          <HoverMenu />
        </Box>
      </Flex>
    </VStack>
  );
});
export default Header;
