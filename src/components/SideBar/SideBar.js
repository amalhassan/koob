import React from 'react'
import { Flex } from '@chakra-ui/react';
const SideBar = () => {
  return (
    <Flex borderTopWidth={{base:'2px', sm:0}} borderBottomWidth={{base:'2px', sm:0}} borderRightWidth={{base:0, sm:'2px'}} borderColor={'koobBlack'} w={{sm:'20%'}} mt={{sm: '10px'}}>Sidebar</Flex>
  )
}

export default SideBar