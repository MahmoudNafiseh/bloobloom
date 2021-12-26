import React from 'react';
import { Box, Collapse, Flex } from '@chakra-ui/react';
import ShapeButton from './ShapeButton'; /* Shape Button Component for rendering the shape filters */
import ColourButton from './ColourButton'; /* Colour Button component for rendering the colour filters*/

//
//  For the filter buttons collapse/show animation
//
const FiltersCollapsed = ({
  isOpen /* Check if Colour Filters are collapsed */,
  open /* Check if Shape Filters are collapsed */,
  square /* Pass Square Filter  */,
  setSquare /* Set State of Square Filter {True for selected, False for not selected} */,
  rectangle /* Pass Rectangle Filter  */,
  setRectangle /* Set State of Rectangle Filter {True for selected, False for not selected} */,
  round /* Pass Round Filter  */,
  setRound /* Set State of Round Filter {True for selected, False for not selected} */,
  cateye /* Pass CATEYE Filter  */,
  setCateye /* Set State of CATEYE Filter {True for selected, False for not selected} */,
  black /* Pass BLACK Filter  */,
  setBlack /* Set State of BLACK Filter {True for selected, False for not selected} */,
  tortoise /* Pass TORTOISE Filter  */,
  setTortoise /* Set State of TORTOISE Filter {True for selected, False for not selected} */,
  coloured /* Pass COLOURED Filter  */,
  setColoured /* Set State of COLOURED Filter {True for selected, False for not selected} */,
  crystal /* Pass CRYSTAL Filter  */,
  setCrystal /* Set State of CRYSTAL Filter {True for selected, False for not selected} */,
  dark /* Pass DARK Filter  */,
  setDark /* Set State of DARK Filter {True for selected, False for not selected} */,
  bright /* Pass BRIGHT Filter  */,
  setBright /* Set State of BRIGHT Filter {True for selected, False for not selected} */,
}) => {
  return (
    <Box w={'100%'} flexDir={'row'}>
      <Collapse style={{ width: '100%' }} in={open} animateOpacity>
        <Flex
          h={'64px'}
          w={'100%'}
          justifyContent={'center'}
          alignItems={'center'}
          ml={0}
          borderWidth={1}
          borderColor={'black'}
        >
          <ShapeButton name={square} setName={setSquare} />
          <ShapeButton name={rectangle} setName={setRectangle} />
          <ShapeButton name={round} setName={setRound} />
          <ShapeButton name={cateye} setName={setCateye} />
        </Flex>
      </Collapse>
      <Collapse style={{ width: '100%' }} in={isOpen} animateOpacity>
        <Flex
          h={'64px'}
          minW={'100%'}
          justifyContent={'center'}
          alignItems={'center'}
          borderWidth={1}
          borderColor={'black'}
        >
          <ColourButton name={black} setName={setBlack} />
          <ColourButton name={tortoise} setName={setTortoise} />
          <ColourButton name={coloured} setName={setColoured} />
          <ColourButton name={crystal} setName={setCrystal} />
          <ColourButton name={dark} setName={setDark} />
          <ColourButton name={bright} setName={setBright} />
        </Flex>
      </Collapse>
    </Box>
  );
};
export default FiltersCollapsed;
