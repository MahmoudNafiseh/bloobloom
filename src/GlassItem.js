import React, { useState } from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import './App.css';

// This is the content of a glass item (what goes in the glasses menu)
const GlassItem = React.memo(({ url, name }) => {
  const [loaded, setLoaded] = useState(false);
  name = name.toUpperCase();
  return (
    <Box className="border glassesItem" w="100%" borderRight={0}>
      <Text
        visibility={loaded}
        position={'absolute'}
        w={'33.333%'}
        textAlign={'center'}
        fontSize={22}
        mt={'0.75em'}
      >
        {name}
      </Text>
      <Image
        src={url}
        loading="lazy"
        fallback={<Box w={'full'} h={'full'} bg={'blue'} />}
        onLoad={() => setLoaded(!loaded)}
      />
    </Box>
  );
});
export default GlassItem;
