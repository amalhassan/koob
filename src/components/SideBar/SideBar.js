import React from 'react'
import { Flex, List, ListItem, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const SideBar = ({setType, setPage, page}) => {
  const handleLink = () => {
    setType("sidebar");
    if (page === "profile") {
        setPage("explore");
        setType("sidebar");
    }
  }
  return (
    <Flex borderTopWidth={{base:'2px', sm:0}} borderBottomWidth={{base:'2px', sm:0}} borderRightWidth={{base:0, md:'2px'}} borderColor={'koobBlack'} w={{sm:'100%', md: "20%"}} mt={{sm: '10px'}} justifyContent={{base: 'center', md:'start'}} alignItems={{base: 'center', md: 'start'}} pt={{base: '2rem', md:'5rem'}} pl={{base: '5', md:'8'}} pb={{base: '2rem', md:'0'}}>
        <List fontFamily={'Courier Prime'} fontSize={'1.4rem'} display={'flex'} flexDirection={'column'} rowGap={'15px'} pl={{base:'4rem', md:'0'}}>
            <Link to="/explore/business">
            <ListItem >
                <Text onClick={() =>  handleLink()} cursor={'pointer'} _hover={{color: 'koobAccentGold', borderColor: 'koobAccentGold', borderWidth: '2px', textAlign:'center'}} >
                    business
                </Text>
            </ListItem>
            </Link>
            <Link to="/explore/entertainment">
                <ListItem>
                    <Text onClick={() => handleLink()} cursor={'pointer'} _hover={{color: 'koobAccentGold', borderColor: 'koobAccentGold', borderWidth: '2px', textAlign:'center', p: '5px'}}>
                        entertainment
                    </Text>
                </ListItem>
            </Link>
            <Link to="/explore/general">
                <ListItem>
                    <Text onClick={() => handleLink()} cursor={'pointer'} _hover={{color: 'koobAccentGold', borderColor: 'koobAccentGold', borderWidth: '2px', textAlign:'center'}}>
                        general
                    </Text>
                </ListItem>
            </Link>
            <Link to="/explore/health">
                <ListItem>
                    <Text onClick={() => handleLink()} cursor={'pointer'} _hover={{color: 'koobAccentGold', borderColor: 'koobAccentGold', borderWidth: '2px', textAlign:'center'}}>
                        health
                    </Text>
                </ListItem>
            </Link>
            <Link to="/explore/science">
                <ListItem>
                    <Text onClick={() => handleLink()} cursor={'pointer'} _hover={{color: 'koobAccentGold', borderColor: 'koobAccentGold', borderWidth: '2px', textAlign:'center'}}>
                        science
                    </Text>
                </ListItem>
            </Link>
            <Link to="/explore/sports">
                <ListItem>
                    <Text onClick={() => handleLink()} cursor={'pointer'} _hover={{color: 'koobAccentGold', borderColor: 'koobAccentGold', borderWidth: '2px', textAlign:'center'}}>
                        sports
                    </Text>
                </ListItem>
            </Link>
            <Link to="/explore/technology">
                <ListItem>
                    <Text onClick={() => handleLink("technology")} cursor={'pointer'} _hover={{color: 'koobAccentGold', borderColor: 'koobAccentGold', borderWidth: '2px', textAlign:'center'}}>
                        technology
                    </Text>
                </ListItem>
            </Link>
        </List>
    </Flex>
  )
}

export default SideBar