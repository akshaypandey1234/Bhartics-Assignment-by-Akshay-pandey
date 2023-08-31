// import { Box, Flex, Grid, GridItem, Heading, Input, Select, Spacer, Text, Image } from '@chakra-ui/react';
import { Box, Flex, Grid, GridItem, Heading, Input, Select, Spacer, Text, Image, Stack } from '@chakra-ui/react';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const NewArrivals = () => {
  const [itData, setITData] = useState([]);
  const [query, setQuery] = useState('');
  const [spec, setSpec] = useState('');
  const [level, setLevel] = useState('');
  const [colorFilter, setColorFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  const fetchProgramsBySearch = (query) => {
    return `https://carsmotor.onrender.com/Products?q=${query}`;
  };

  const fetchPrograms = (spec, level) => {
    if (spec === '' && level === '') {
      return `https://carsmotor.onrender.com/Products`;
    } else if (spec !== '' && level === '') {
      return `https://carsmotor.onrender.com/Products${spec}`;
    } else if (spec === '' && level !== 'all') {
      return `https://carsmotor.onrender.com/Products?level=${level}`;
    } else {
      return `https://carsmotor.onrender.com/Products?specialization=${spec}&level=${level}`;
    }
  };

  useEffect(() => {
    let fetchURL;
    if (query !== '') {
      fetchURL = fetchProgramsBySearch(query);
    } else {
      fetchURL = fetchPrograms(spec, level);
    }

    axios({
      url: fetchURL,
      method: 'get',
    })
      .then((res) => {
        setITData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query, spec, level]);

  const levelOptions = ['All', 'Advanced', 'Intermediate', 'Beginner'];

  const applyColorFilter = (color) => {
    setColorFilter(color);
  };

  const applyPriceFilter = (priceRange) => {
    setPriceFilter(priceRange);
  };

  const clearFilters = () => {
    setColorFilter('');
    setPriceFilter('');
  };

  const applyFilters = (data) => {
    let filteredData = data;

    if (colorFilter) {
      filteredData = filteredData.filter((program) => program.color.includes(colorFilter));
    }

    if (priceFilter) {
      filteredData = filteredData.filter((program) => program.price <= parseInt(priceFilter));
    }

    return filteredData;
  };

  const filteredData = applyFilters(itData);

  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <Navbar />
      <Heading style={{ textAlign: 'left', padding: '30px 30px' }}>New Arrivals</Heading>
      <Flex bg="gray.100" p="30px">
        <Box w="50%" borderRadius="25px" bg="white" p="20px">
          <Text fontWeight="700" fontSize="20px" pb="15px">
           Search Your Car here
          </Text>
          <Input type="text" placeholder="Enter the name of the Car ..." onChange={(e) => setQuery(e.target.value)} />
        </Box>
        <Spacer />
      </Flex>
      <Flex bg="gray.100" p="30px" gap={250}>
        <Box w="30%" borderRadius="25px" bg="white" p="20px">
          <Text fontWeight="700" fontSize="20px" pb="15px">
            Color
          </Text>
          <Select value={colorFilter} onChange={(e) => applyColorFilter(e.target.value)}>
            <option value="">All Colors</option>
            <option value="Red">Red</option>
            <option value="White">White</option>
            <option value="Blue">Blue</option>
            <option value="Grey">Grey</option>
            
          </Select>
        </Box>
        <Box w="30%" borderRadius="25px" bg="white" p="20px">
          <Text fontWeight="700" fontSize="20px" pb="15px">
            Price Range
          </Text>
          <Select value={priceFilter} onChange={(e) => applyPriceFilter(e.target.value)}>
            <option value="">All Prices</option>
            <option value="1000000">Up to 15,00,000</option>
            <option value="500000">Up to 10,00,000</option>
            <option value="500000">Up to 5,00,000</option>
            
          </Select>
        </Box>
        <Box w="10%" borderRadius="25px" bg="transparent" p="20px" display="flex" alignItems="center" color={'chakra-body-bg._light'}>
          <button onClick={clearFilters} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            Clear
          </button>
        </Box>
      </Flex>
      <Grid
        w="90%"
        margin="auto"
        templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gap={20}
        pt="20px"
      >
        {filteredData.map((program) => (
          <Link key={program.id} to={`/newArrivals/${program.id}`} style={{ textDecoration: 'none' }}>
            <GridItem
              style={{
                borderRadius: '25px',
                padding: '20px',
                backgroundColor: 'white',
                textAlign: 'left',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                overflow: 'hidden',
                transition: 'transform 0.2s',
              }}
            >
              <Box>
                <Image src={program.images[0]} alt={`Image for ${program.name}`} h="200px" objectFit="cover" />
              </Box>
              <Heading style={{ textAlign: 'center', color: '#002D62' }}>{program.name}</Heading>
              <Box my={6}>
                <Stack spacing={2}>
                  {program.description.map((desc, index) => (
                    <p key={index} style={{ textAlign: 'left' }}>
                      {desc}
                    </p>
                  ))}
                </Stack>
              </Box>
              <Box>
                <p>
                  <span style={{ fontWeight: '600' }}>Brand: </span>
                  {program.brand}
                </p>
                <p>
                  <span style={{ fontWeight: '600' }}>Price: </span>
                  {program.price}
                </p>
                <p>
                  <span style={{ fontWeight: '600' }}>Color: </span>
                  {program.color}
                </p>
              </Box>
            </GridItem>
          </Link>
        ))}
      </Grid>
      <Footer />
    </div>
  );
};

export default NewArrivals;
