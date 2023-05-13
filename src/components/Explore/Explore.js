import React, {useState} from 'react';
import { Box } from '@chakra-ui/react';
import SearchBar from '../SearchBar/SearchBar';
const Explore = () => {
  const [search, setSearch] = useState('');
  return (
    <SearchBar search={search} setSearch={setSearch}/>
  )
}

export default Explore