import React from 'react';
import { Grid, Box, Text } from '@chakra-ui/react';
import GlassItem from './GlassItem';
const GlassesMenu = React.memo(({ isSuccess, data }) => {
  //
  //
  // This component is for rendering the fetched glasses
  // Renders a GlassItem into the Glasses menu
  //
  //
  return (
    <Box bg={'white'} w={'100%'}>
      <Grid
        templateColumns="repeat(3, 1fr)"
        className="border glassesItem"
        borderY={0}
      >
        {isSuccess ? (
          data.pages.map(page =>
            page.glasses.map(item => (
              <GlassItem
                key={item.id}
                url={item.glass_variants[0].media[0].url}
                name={item.name}
              />
            ))
          )
        ) : (
          <Box>
            <Text>Loading...</Text>
          </Box>
        )}
      </Grid>
    </Box>
  );
});
export default GlassesMenu;
