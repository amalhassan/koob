import React, {useState} from 'react'
import { Flex, FormLabel, Input, Button} from '@chakra-ui/react'
const SearchBar = ({setQuery, setType}) => {
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("search", search);
    setType("search")
    setQuery(search);
    e.target.reset();
  }
  return (
    <Flex w={'100%'} justifyContent={{base:'center', sm:'space-between'}} alignItems={'center'} mt={'2rem'} columnGap={'10px'}>
      <form id="explore-form" onSubmit={handleSubmit} w={'50%'}>
        <FormLabel hidden={true} htmlFor={search}>Search</FormLabel>
        <Input type='text' placeholder={"Explore"} w={{base: '65%', sm:'33%'}} pr={2} borderColor={'koobBlack'} p={2} h={{base: '1.8rem', sm: '2rem'}} focusBorderColor='koobAccentGold' name="search" id='search' onChange={(e) => setSearch(e.currentTarget.value)}/>
        <Button type='submit' h={{base: '1.8rem', sm: '2rem'}} color={'koobWhite'} bgColor={'koobBlack'} _hover={{bg: 'koobAccentGold' }}>Search</Button>
      </form>
    </Flex>
  )
}

export default SearchBar