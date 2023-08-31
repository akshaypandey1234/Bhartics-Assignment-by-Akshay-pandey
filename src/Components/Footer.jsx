import { Box, Button, ButtonGroup, HStack, Image, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (
        <div style={{ fontFamily: "Montserrat, sans-serif"}}>
            <Box style={{ padding: "10px 30px 50px 30px", marginTop: "100px" }}>
                <HStack spacing="28px" fontWeight={600}>
                    
                    <p>+7 499 922-47-10</p>
                    <p>8 800 700-68-41</p>
                    <p>support@suzuki.in</p>
                    <Spacer />
                    <ButtonGroup>
                        <Button>
                            <Image src='https://frontend-scripts.hb.bizmrg.com/unique-hf/svg/youtube-icon.svg' alt='youtube-icon' />
                        </Button>
                        <Button>
                            <Image src='https://frontend-scripts.hb.bizmrg.com/unique-hf/svg/tg-icon.svg' alt='telegram-icon' />
                        </Button>
                    </ButtonGroup>
                </HStack>
                <hr></hr>
                <HStack spacing="120px" marginLeft="100px">
                    <Stack>
                        <Text style={{ fontWeight: "700", fontSize: "18px", padding: "10px 0px" }}>Suzuki Update</Text>
                        <HStack spacing="100px">
                            <VStack spacing="20px">
                                <p>Cars Collection</p>
                                <p>Upcoming Launches</p>
                                <p>Analytics</p>
                                <p>Testing</p>
                                <p>Discounts</p>
                                <p>Futuristic Cars</p>
                            </VStack>
                            <VStack spacing="20px">
                                <p>Information Security</p>
                                <p>Marketing</p>
                                <p>Design</p>
                                <p>Digital Professions</p>
                            </VStack>
                        </HStack>
                    </Stack>
                    <Stack spacing="24px">
                        <Stack textAlign="top">
                            <Text style={{ fontWeight: "700", fontSize: "18px", padding: "10px 0px" }}>Testing</Text>
                            <VStack>
                                <p>Help And Information</p>
                                <p>FAQ</p>
                                <p>Carrers</p>
                            </VStack>
                        </Stack>
                        <Stack>
                            <Text style={{ fontWeight: "700", fontSize: "18px", padding: "10px 0px" }}>Job Search</Text>
                            <VStack>
                                <p>Companies</p>
                                <p>Jobs</p>
                                <p>Work at Suzuki</p>
                            </VStack>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Box>
                            <Text style={{ fontWeight: "700", fontSize: "18px", padding: "10px 0px" }}>Magazine</Text>
                            <VStack>
                                <p>Materials</p>
                                <p>Forum</p>
                                <p>Success stories</p>
                                <p>Safty</p>
                                <p>Blog</p>
                                <p>Life at Suzuki</p>
                            </VStack>
                        </Box>
                    </Stack>
                    <Stack>
                        <Text style={{ fontWeight: "700", fontSize: "18px", padding: "10px 0px" }}>About Suzuki</Text>
                        <VStack>
                            <p>License</p>
                            <p>Jobs</p>
                            <p>Reviews</p>
                            <p>Referrals</p>
                            <p>Contacts</p>
                            <p>Help</p>
                        </VStack>
                    </Stack>
                </HStack>

                <Stack style={{marginTop: "70px", color: "#80807c", textAlign: "left"}}>
                    <p>Privacy Policy</p>
                    <p>Suzuki, 125167, Bhopal, MP Nagar, 39, building 79</p>
                </Stack>
            </Box>
        </div>
    )
}

export default Footer