import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Directions = () => {
  return (
    <div>
      {/* ------------------------------------------ FIRST SECTION ---------------------------------------- */}
      <Stack style={{ textAlign: "Center", fontFamily: "Montserrat, sans-serif", margin: "0px 0px 20px 60px" }}>
        <Heading fontSize="5xl">We Bring The Safer Vehicals in the  World</Heading>
    
        <Text style={{ fontSize: "21px" }}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse explicabo impedit cumque fuga eaque, qui ab eveniet molestias ex quidem.
        </Text>
      </Stack>
      <Grid
  width="90%"
  margin="auto"
  marginTop={50}
  paddingLeft={10}
  paddingTop={10}
  paddingRight={10}
  paddingBottom={10}
  borderRadius={25}
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(3, 1fr)'
  bgColor="#40E0D0"
  gap={10}
>
  <GridItem>
    <Box
      borderRadius="20px"
      height="100%"
      bg="white"
      padding="20px"
      textAlign="center"
    >
      <Image
        src="https://images.hindustantimes.com/auto/img/2021/12/02/1600x900/WagonR-Celerio_1637821030484_1638428407858.jpg"
        alt='Family Car'
        style={{
          borderRadius: "20px",
          position: "relative",
          width: "100%",
          height: "200px", // Adjust the desired height
          objectFit: "cover",
        }}
      />
      <Text
        style={{
          fontWeight: "700",
          fontSize: "24px",
          color: "#52524f",
          marginTop: "10px",
        }}
      >
        Small Family Car
      </Text>
    </Box>
  </GridItem>
  <GridItem>
    <Box
      borderRadius="20px"
      height="100%"
      bg="white"
      padding="20px"
      textAlign="center"
    >
      <Image
        src="https://stimg2.cardekho.com/images/carNewsEditorImages/userimages/20180129_154222/21316/maruti0.jpg?impolicy=resize&imwidth=420"
        alt='design'
        style={{
          borderRadius: "20px",
          position: "relative",
          width: "100%",
          height: "200px", // Adjust the desired height
          objectFit: "cover",
        }}
      />
      <Text
        style={{
          fontWeight: "700",
          fontSize: "24px",
          color: "#52524f",
          marginTop: "10px",
        }}
      >
        Premium MidRange Car
      </Text>
    </Box>
  </GridItem>
  <GridItem>
    <Box
      borderRadius="20px"
      height="100%"
      bg="white"
      padding="20px"
      textAlign="center"
    >
      <Image
        src="https://d2m3nfprmhqjvd.cloudfront.net/blog/20221104133235/Baleno-SUV-1160x653.jpg"
        alt='marketing'
        style={{
          borderRadius: "20px",
          position: "relative",
          width: "100%",
          height: "200px", // Adjust the desired height
          objectFit: "cover",
        }}
      />
      <Text
        style={{
          fontWeight: "700",
          fontSize: "24px",
          color: "#52524f",
          marginTop: "10px",
        }}
      >
        SUV's
      </Text>
    </Box>
  </GridItem>
  <GridItem>
    <Box
      borderRadius="20px"
      height="100%"
      bg="white"
      padding="20px"
      textAlign="center"
    >
      <Image
        src="https://i.ytimg.com/vi/Latz8Eq10B0/maxresdefault.jpg"
        alt='control'
        style={{
          borderRadius: "20px",
          position: "relative",
          width: "100%",
          height: "200px", // Adjust the desired height
          objectFit: "cover",
        }}
      />
      <Text
        style={{
          fontWeight: "700",
          fontSize: "24px",
          color: "#52524f",
          marginTop: "10px",
        }}
      >
        Premium Category
      </Text>
    </Box>
  </GridItem>
  <GridItem>
    <Box
      borderRadius="20px"
      height="100%"
      bg="white"
      padding="20px"
      textAlign="center"
    >
      <Image
        src="https://www.cartoq.com/wp-content/uploads/2021/05/6.-Maruti-Suzuki-Kizashi.jpg"
        alt='analytics'
        style={{
          borderRadius: "20px",
          position: "relative",
          width: "100%",
          height: "200px", // Adjust the desired height
          objectFit: "cover",
        }}
      />
      <Text
        style={{
          fontWeight: "700",
          fontSize: "24px",
          color: "#52524f",
          marginTop: "10px",
        }}
      >
        Luxury Sedan
      </Text>
    </Box>
  </GridItem>
  <GridItem>
    <Box
      borderRadius="20px"
      height="100%"
      bg="white"
      padding="20px"
      textAlign="center"
    >
      <Image
        src="https://media.zigcdn.com/media/content/2020/Feb/ignis-zw-2020-fl-1-1.jpg"
        alt='hi-tech'
        style={{
          borderRadius: "20px",
          position: "relative",
          width: "100%",
          height: "200px", // Adjust the desired height
          objectFit: "cover",
        }}
      />
      <Text
        style={{
          fontWeight: "700",
          fontSize: "24px",
          color: "#52524f",
          marginTop: "10px",
        }}
      >
        HetchBack
      </Text>
    </Box>
  </GridItem>
</Grid>



      
    </div>
  )
}

export default Directions