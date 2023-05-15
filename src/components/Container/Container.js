import React, {useState} from 'react';
import {Flex} from '@chakra-ui/react';
import Main from '../Main/Main';
import SideBar from '../SideBar/SideBar';
const Container = () => {
  const [type, setType] = useState("personal");
  const [page, setPage] = useState("explore");
  return (
    <Flex direction={{base: 'column', md: 'row'}}>
      <SideBar setType={setType} page={page} setPage={setPage} />
      <Main type={type} setType={setType} page={page} setPage={setPage}/>
    </Flex>
  )
}

export default Container