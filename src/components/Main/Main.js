import React, {useState, useEffect} from 'react'
import {useNavigate, useParams, useLocation } from 'react-router-dom';
import { Flex, List, ListItem, ListIcon, Divider, Text } from '@chakra-ui/react'
import {MdOutlineExplore, MdOutlineAccountCircle} from 'react-icons/md';
import ArticlesPage from '../../pages/ArticlesPage/ArticlesPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
const Main = ({type, setType, page, setPage}) => {
    const [current, setCurrent] = useState(true);
    const navigate = useNavigate();
    const handleClick = (e) => {
        navigate(`/${e}`);
        setPage(e);
        setCurrent(!current);
        if (page === "explore") {
            setType('personal');
        }
    }
    const {param} = useParams();
    const location = useLocation();
    const [query, setQuery] = useState("");
    const favorites = ["technology", "design", "marketing", "photgrapghy"];
    const cate = favorites.join('&');
    useEffect(() => {
        if (type === "personal" || location.pathname === "/") {
            setQuery(cate);
        } else if (type === "sidebar") {
            setQuery(param);
        } 
    }, [setQuery, cate, param, type, location.pathname, page])
  return (
    <Flex w={{md:'80%'}} direction={{base: 'column'}} px={{sm:'2rem'}} pt={{sm:'0.5rem'}}>
        <Flex w='100%' fontSize = {{base: '1.4rem', sm: '1.2rem'}} mt={{base: '1rem', sm:'2rem'}}>
            <List display={'flex'} flexDirection={{base: 'column-reverse', sm:'row'}} w='100%' borderBottomWidth={{base:0, sm:'2px'}} borderColor={'koobBlack'} pb={{sm:'0.5rem'}} mb={{sm:'0.5rem'}}>
                <ListItem alignSelf={'center'} onClick={() => handleClick("")} cursor={'pointer'} _hover={{color: 'koobAccentGold' }}>
                    <ListIcon as={MdOutlineExplore} boxSize={{base: 7, sm: 5}}/>
                    <Text display={'inline'} color = {page === "explore" ? "koobAccentGold" : "koobBlack"}>Explore</Text>
                </ListItem>
                <Divider borderWidth={'1px'} borderColor={'koobAccentGold'} orientation={{md: 'vertical'}} h='auto' mx='10px' my='2px'/>
                <ListItem alignSelf={'center'}  onClick={() => handleClick('profile')} cursor='pointer' _hover={{color: 'koobAccentGold' }}>
                    <ListIcon as={MdOutlineAccountCircle} boxSize={{base: 7, sm: 5}}/>
                    <Text display={'inline'} mr='7px' color = {page === "profile" ? "koobAccentGold" : "koobBlack"}>Profile</Text>
                </ListItem>
            </List>
        </Flex>
        {page === "explore" && <ArticlesPage setType={setType} type={type} query={query} setQuery={setQuery} />}
        {page === "profile" && <ProfilePage />}
    </Flex>
  )
}

export default Main
