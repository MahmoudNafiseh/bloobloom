import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';

//
//
// The buttons for the Colour filter
// THE API IS DIFFERENT FOR COLOUR/SHAPE FILTERS
function ColourButton({ name, setName }) {
  const source = `&filters[glass_variant_frame_variant_colour_tag_configuration_names][]=${name.name}`; /* Source is the API filter for the colour */

  //
  //
  // changes the filter to true/false if the user clicks on a filter
  const handleClick = () => {
    if (name.url.length === 0) {
      setName({
        ...name,
        url: source,
        checked: true,
      });
    } else {
      setName({ ...name, url: '', checked: false });
    }
  };
  return (
    <Flex
      bg={'white'}
      justifyContent={'center'}
      alignItems={'center'}
      flex={1}
      className="border buttonBorderContainer"
      h={'64px'}
      mb={'1px'}
      w={'16.66667vw'}
      maxW={'16.66667%'}
    >
      <Button
        bg={'red'}
        maxW={'70%'}
        w={'64'}
        boxShadow={'none'}
        rounded={'none'}
        className={name.checked ? 'buttonBorder' : 'buttonNone'}
        onClick={handleClick}
      >
        <Text className="fontCustom2" fontWeight={200} fontSize={'md'}>
          {name.name}
        </Text>
      </Button>
    </Flex>
  );
}

export default ColourButton;
