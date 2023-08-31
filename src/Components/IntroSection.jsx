import { Box, Flex, Grid, Image, Spacer, Stack, Text, Button } from '@chakra-ui/react';
import React from 'react';

const IntroSection = () => {
  return (
    <div style={{ fontFamily: "Montserrat, sans-serif" }}>
      <Flex margin="50px 50px 50px 50px" bg="#40E0D0" borderRadius="20px" p="50px">
        <Stack textAlign="left" spacing={5} color="white">
          <Box style={{ fontWeight: "bold", fontSize: "50px" }}>
            <Text _hover={{ color: "#9d9b9e" }}>Where we</Text>
            <Text _hover={{ color: "#9d9b9e" }}>believe you</Text>
            <Text _hover={{ color: "#9d9b9e" }}>are a priority.</Text>
          </Box>
          <p style={{ fontWeight: "500" }}>
            Suzuki is a global Car Manufacturing Company based in Japan that specializes <br /> in accredited and Powerful and Non Pollutive Vehicals.
          </p>
          <Stack direction="row" spacing={3}>
            <input type="text" placeholder='Put your email here' style={{ padding: "10px", borderRadius: "5px", border: "none" }} />
            <Button colorScheme="teal" variant="solid" borderRadius="5px">Start Your Ride</Button>
          </Stack>
        </Stack>
        <Spacer />
        <Image src='https://www.businessinsider.in/thumb.cms?msid=74316659&width=1200&height=900' alt='illustration-design' width="500px" borderRadius="20px" />
      </Flex>

      <Flex margin="100px 0px 100px 50px">
        <Image src="https://c.ndtvimg.com/2022-01/p1jemor_maruti-suzuki_625x300_10_January_22.jpg" alt='image1' width={600} height={400} borderRadius="20px" />
        <Spacer />
        <Stack textAlign="left">
          <Box paddingLeft={10}>
            <Text style={{ fontWeight: "bold", fontSize: "30px" }}>What kind of Vehicals does our Organisation offer?</Text>
            <p style={{ fontSize: "18px" }}>
              Our Oraganisation provides a wide range of cars and their parts for your journey with Safty. With us, you can access:
            </p>
            <Grid templateColumns="repeat(2, 1fr)" gap={5} mt={5}>
              <Box>
                <Button colorScheme="teal" variant="solid">700+ Cars</Button>
              </Box>
              <Box>
                <Button colorScheme="teal" variant="solid">150+ Colors Available</Button>
              </Box>
              <Box>
                <Button colorScheme="teal" variant="solid">150+ Modals</Button>
              </Box>
              <Box>
                <Button colorScheme="teal" variant="solid">Quality & Safty Assured</Button>
              </Box>
            </Grid>
          </Box>
        </Stack>
      </Flex>
    </div>
  )
}

export default IntroSection;
