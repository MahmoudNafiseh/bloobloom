import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

// isOpen checks if Colour  menu is open
// open checks if shapes menu is open
// setOpen sets if shapes menu is open
// onToggle sets if colour menu is open
const Filters = ({ isOpen, onToggle, open, setOpen }) => {
  return (
    <Flex w="100%" mt="63px" h="64px">
      <Flex flex={1} className="border"></Flex>
      <Flex
        className="border"
        borderColor={'black'}
        flex={1}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Text fontSize={30} className="fontCustom">
          SPECTACLES WOMEN
        </Text>
      </Flex>
      <Flex
        flex={1}
        flexDir={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        className="border"
      >
        <Flex
          flex={1}
          h="100%"
          justifyContent={'center'}
          alignItems={'center'}
          className="border"
          borderY={0}
          onClick={() => {
            onToggle();
            if (open) {
              setOpen(!open);
            }
          }}
          cursor={'pointer'}
        >
          <Text className="fontCustom2" fontWeight={200} fontSize={'md'}>
            COLOUR
          </Text>
        </Flex>
        <Flex
          flex={1}
          h="100%"
          justifyContent={'center'}
          alignItems={'center'}
          className="border"
          borderY={0}
          onClick={() => {
            setOpen(!open);
            if (isOpen) {
              onToggle();
            }
          }}
          cursor={'pointer'}
        >
          <Text className="fontCustom2" fontWeight={200} fontSize={'md'}>
            SHAPE
          </Text>
        </Flex>
        <Flex flex={3} h="100%"></Flex>
      </Flex>
    </Flex>
  );
};
export default Filters;
