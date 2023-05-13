import React from 'react'
import {Flex, Spacer, Box, Heading} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Nav = ({username}) => {
  return (
    <Flex  h={'10vh'} borderBottomWidth={'2px'} borderBottomColor='koobBlack'>
        <Box p='4' ml='5' w='max-content'>
            <Link to="/explore" >
                <Heading as="h1" color="koobBlack">Koob</Heading>
            </Link>
        </Box>
        <Spacer />
        <Flex alignItems={'center'} mr={{base: '30'}} w='max-content'>
            <Heading as='h3' fontSize='2xm' p={2} w='max-content' h='min-content'>Hi {username}!</Heading>
        </Flex>
    </Flex>
  )
}

export default Nav