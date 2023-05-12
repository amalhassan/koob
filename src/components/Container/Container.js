import React from 'react';
import {Flex} from '@chakra-ui/react';
import Main from '../Main/Main';
import SideBar from '../SideBar/SideBar';
const Container = () => {
  return (
    <Flex direction={{base: 'column', sm: 'row'}}>
      <SideBar/>
      <Main/>
    </Flex>
  )
}

export default Container