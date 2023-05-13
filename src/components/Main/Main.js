import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { Flex, List, ListItem, ListIcon, Divider, Text, Link } from '@chakra-ui/react'
import {MdOutlineExplore, MdOutlineAccountCircle} from 'react-icons/md';
import ExplorePage from '../../pages/ExplorePage/ExplorePage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
const Main = () => {
    const [page, setPage] = useState("explore");
    const [current, setCurrent] = useState(false);
    const navigate = useNavigate();
    const handleClick = (e) => {
        navigate(`/${e}`, {replace: true});
        setCurrent(!current);
        setPage(e);
    }
  return (
    <Flex w={{sm:'80%'}} direction={{base: 'column'}} px={{sm:'2rem'}} pt={{sm:'0.5rem'}}>
        <Flex w='100%' fontSize = {{base: '1.4rem', sm: '1.2rem'}}>
            <List display={'flex'} flexDirection={{base: 'column-reverse', sm:'row'}} w='100%' borderBottomWidth={{base:0, sm:'2px'}} borderColor={'koobBlack'} pb={{sm:'0.5rem'}} mb={{sm:'0.5rem'}} color = {current ? "koobAccentGold" : "koobBlack"}>
                <ListItem alignSelf={'center'} onClick={() => handleClick("explore")} cursor={'pointer'}>
                    <ListIcon as={MdOutlineExplore} boxSize={{base: 7, sm: 5}}/>
                    <Text display={'inline'}>Explore</Text>
                </ListItem>
                <Divider borderWidth={'1px'} borderColor={'koobAccentGold'} orientation={{md: 'vertical'}} h='auto' mx='10px' my='2px'/>
                <ListItem alignSelf={'center'} onClick={() => handleClick("profile")} cursor='pointer' color = {current ? "koobBlack" : "koobAccentGold"}>
                    <ListIcon as={MdOutlineAccountCircle} boxSize={{base: 7, sm: 5}}/>
                    <Text display={'inline'} mr='7px'>Profile</Text>
                </ListItem>
            </List>
        </Flex>
        {page === "explore" && <ExplorePage/>}
        {page === "profile" && <ProfilePage/>}
    </Flex>
  )
}

export default Main
