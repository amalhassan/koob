import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { Box, Flex} from '@chakra-ui/react';
import SearchBar from '../SearchBar/SearchBar';
import ArticleCard from '../ArticleCard/ArticleCard';
import PlaceholderImg from '../../assets/images/27163.jpg'
import axios from 'axios';
import { baseURL } from '../../constant';
const Articles = ({type, setType, query, setQuery, existingNote, setExistingNote, noteExists, setNoteExists}) => {
    const navigate = useNavigate();
    const [articleList, setArticleList] = useState([]);
    const [notesArray, setNotesArray] = useState([]);
    useEffect(() => {
        console.log("q from params", query, type);
    }, [ query, type])
    useEffect(() => {
      const cancelToken = axios.CancelToken;
      const source = cancelToken.source();
      (async function () {
        try {
        const res = await axios.get(`${baseURL}/user/645d0a9b892e3f58c6b04385/notes`, {cancelToken: source.token})
        console.log(res.data);
        setNotesArray(res.data);
        } catch (error) {
          if (axios.isCancel(error)) {
            console.log('acticles comp aborted');
          } else {
            console.log(error)
          }
        }
      } ())
      return () => {
        source.cancel();
      }
    }, [])
    useEffect(() => { 
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();
        (async function() {
            try {
                // const res = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_API_URL}&pageSize=60`, {cancelToken: source.token})
                // console.log(res.data);
                // setArticleList(res.data.articles);
                // 
                console.log("axios", query)
            } catch (error) {
                // if (axios.isCancel(error)) {
                //     console.log('aborted2');
                //   } else {
                    console.log(error)
                //   }
            }
    } ())
    return () => {
        source.cancel();
        }
    }, [query])
  return (
    <Box>
        <SearchBar setQuery={setQuery} setType={setType}/>
        <Flex direction={'column'} columnGap={'20px'} my={'20px'} justifyContent={'start'} alignItems={'center'}>
            {/* {articleList.map((article, i) => (
                <>
                <ArticleCard
                onClick={onToggle} 
                key={i}
                title={article.title}
                image={{article.urlToImage ? article.urlToImage : PlaceholderImg}}
                url={article.url}
                date={article.publishedAt}
                publisher={article.source.name}
                description={article.description}
                />s
                 ))}
                </> */}
                <ArticleCard existingNote={existingNote} setExistingNote={setExistingNote} noteExists={noteExists} setNoteExists={setNoteExists} notesArray={notesArray} setNotesArray={setNotesArray}/>
                <ArticleCard existingNote={existingNote} setExistingNote={setExistingNote} noteExists={noteExists} setNoteExists={setNoteExists} notesArray={notesArray} setNotesArray={setNotesArray}/>
        </Flex>
    </Box>
  )
}

export default Articles