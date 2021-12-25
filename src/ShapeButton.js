import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';

// THE API IS DIFFERENT FOR COLOUR/SHAPE FILTERS
const ShapeButton = React.memo(({ name, setName }) => {
  /* Pass the Name and SetName function for the button's filter */

  const source = `&filters[glass_variant_frame_variant_frame_tag_configuration_names][]=${name.name}`; /* Source is the API filter for the shape */

  //
  //
  // this is the click handler, if the user clicks a filter, it sets the filter 'Checked' prop to true or false
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
      maxW={'25%'}
    >
      <Button
        w={'md'}
        maxW={'70%'}
        boxShadow={'none'}
        rounded={'none'}
        mb={1}
        className={name.checked ? 'buttonBorder' : 'buttonNone'}
        onClick={handleClick}
      >
        <Text className="fontCustom2" fontWeight={200} fontSize={'md'}>
          {name.name}
        </Text>
      </Button>
    </Flex>
  );
});

export default ShapeButton;
