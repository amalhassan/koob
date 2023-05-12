import React from 'react'
import { Flex, List, ListItem, ListIcon, Divider, Text } from '@chakra-ui/react'
import {MdOutlineExplore, MdOutlineAccountCircle} from 'react-icons/md';
const Main = () => {
  return (
    <Flex w={{sm:'80%'}}>
        <Flex w='100%' fontSize = {{base: '1.4rem', sm: '1.2rem'}}>
            <List display={'flex'} flexDirection={{base: 'column-reverse', sm:'row'}} w='100%'>
                <ListItem alignSelf={'center'}>
                    <ListIcon as={MdOutlineExplore} boxSize={{base: 7, sm: 5}}/>
                    <Text display={'inline'}>Explore</Text>
                </ListItem>
                <Divider borderWidth={'1px'} borderColor={'koobAccentGold'} orientation={{md: 'vertical'}} h='auto' mx='10px' my='2px'/>
                <ListItem alignSelf={'center'}>
                    <ListIcon as={MdOutlineAccountCircle} boxSize={{base: 7, sm: 5}}/>
                    <Text display={'inline'} mr='7px'>Profile</Text>
                </ListItem>
            </List>
        </Flex>
    </Flex>
  )
}

export default Main
