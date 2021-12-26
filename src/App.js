import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChakraProvider, theme, useDisclosure, Box } from '@chakra-ui/react';
import { useInfiniteQuery } from 'react-query';
import './App.css';
import Header from './Header';
import Filters from './Filters';
import FiltersCollapsed from './FiltersCollapsed';
import GlassesMenu from './Glasses';

function App() {
  //
  // The states for the filters:
  //
  const [square, setSquare] = useState({
    name: 'square',
    checked: false,
    url: '',
  });

  const [round, setRound] = useState({
    name: 'round',
    checked: false,
    url: '',
  });

  const [rectangle, setRectangle] = useState({
    name: 'rectangle',
    checked: false,
    url: '',
  });

  const [cateye, setCateye] = useState({
    name: 'cat-eye',
    checked: false,
    url: '',
  });

  const [black, setBlack] = useState({
    name: 'black',
    checked: false,
    url: '',
  });

  const [tortoise, setTortoise] = useState({
    name: 'tortoise',
    checked: false,
    url: '',
  });

  const [coloured, setColoured] = useState({
    name: 'coloured',
    checked: false,
    url: '',
  });

  const [crystal, setCrystal] = useState({
    name: 'crystal',
    checked: false,
    url: '',
  });

  const [dark, setDark] = useState({
    name: 'dark',
    checked: false,
    url: '',
  });

  const [bright, setBright] = useState({
    name: 'bright',
    checked: false,
    url: '',
  });
  //
  //
  //
  // States for collapsing filters:
  //
  const { isOpen, onToggle } = useDisclosure();
  const [open, setOpen] = useState(false);
  //
  //

  //
  // Infinite Scroll (Query), updates when near end of list
  //
  const { data, isSuccess, fetchNextPage } = useInfiniteQuery(
    [
      'glasses' /* 'glasses' prop so it updates on load, the rest of the props are so it updates when the filters change. */,
      square.url,
      rectangle.url,
      round.url,
      cateye.url,
      black.url,
      tortoise.url,
      crystal.url,
      coloured.url,
      dark.url,
      bright.url,
    ],
    async ({ pageParam = 1 }) => {
      /* pageParam is the current page of the API call */
      const res = await axios.get(
        `https://api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-women/glasses?sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]=12&page[number]=${pageParam}${square.url}${rectangle.url}${round.url}${cateye.url}${black.url}${tortoise.url}${crystal.url}${coloured.url}${dark.url}${bright.url}&filters[frame_variant_home_trial_available]=false`
      );
      return res.data;
    },
    {
      getNextPageParam: (lastPage, pages) => {
        /*  check if there is a next page */
        const maxPages = Math.ceil(
          lastPage.meta.total_count / 12
        ); /* ceil to make sure we get all the pages, 12 is the number of glasses per page */
        const nextPage = pages.length + 1;
        return nextPage <= maxPages
          ? nextPage
          : undefined; /* return undefined if no pages remaining, which stops the calling of the api */
      },
    }
  );
  //
  //
  // event listener to make see where we are in the page when we scroll:
  //
  useEffect(() => {
    let fetching = false;
    const onScroll = async event => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.55) {
        fetching = true;
        await fetchNextPage();
        fetching = false;
      }
    };

    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);
  //
  //
  //
  return (
    <ChakraProvider theme={theme}>
      {/* Header (with menu) */}
      <Header />
      {/*  */}
      {/*  */}
      {/* Renders the filters buttons, and checks passes if user clicks on Colour/Shape */}
      <Box>
        <Filters
          isOpen={isOpen}
          setOpen={setOpen}
          open={open}
          onToggle={onToggle}
        />
        {/*  */}
        {/*  */}
        {/* Renders the filters menu, and checks if the menu is currently opened or not to collapse */}
        <FiltersCollapsed
          open={open}
          isOpen={isOpen}
          square={square}
          setSquare={setSquare}
          rectangle={rectangle}
          setRectangle={setRectangle}
          round={round}
          setRound={setRound}
          cateye={cateye}
          setCateye={setCateye}
          black={black}
          setBlack={setBlack}
          tortoise={tortoise}
          setTortoise={setTortoise}
          coloured={coloured}
          setColoured={setColoured}
          crystal={crystal}
          setCrystal={setCrystal}
          dark={dark}
          setDark={setDark}
          bright={bright}
          setBright={setBright}
        />
      </Box>
      {/*  */}
      {/*  */}
      {/* Renders the glasses menu depending on the filter */}
      <GlassesMenu isSuccess={isSuccess} data={data} />
    </ChakraProvider>
  );
}

export default App;
