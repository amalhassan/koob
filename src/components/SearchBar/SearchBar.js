import React, {useState} from 'react'
import { Flex, Input, Button } from '@chakra-ui/react'
const SearchBar = ({setQuery, setType}) => {
  const [search, setSearch] = useState("");
  const handleSubmit = () => {
    setType("search")
    setQuery(search);
  }
  return (
    <Flex w={'100%'} justifyContent={{base:'center', sm:'flex-start'}} alignItems={'center'} mt={'2rem'} columnGap={'10px'}>
        <Input onChange={(e) => setSearch(e.target.value)} type='text' placeholder={"Explore"} w={{base: '65%', sm:'33%'}} borderColor={'koobBlack'} p={2} h={{base: '1.8rem', sm: '2rem'}} focusBorderColor='koobAccentGold'/>
        <Button type='submit' onClick={handleSubmit} h={{base: '1.8rem', sm: '2rem'}} color={'koobWhite'} bgColor={'koobBlack'} _hover={{bg: 'koobAccentGold' }}>Search</Button>
    </Flex>
  )
}

export default SearchBar