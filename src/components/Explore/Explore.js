import React, {useState, useEffect} from 'react';
import { Box, Flex, Text} from '@chakra-ui/react';
import SearchBar from '../SearchBar/SearchBar';
import ArticleCard from '../ArticleCard/ArticleCard';
import axios from 'axios';
const Explore = () => {
  const [search, setSearch] = useState('');
  const [articles, setArticles] = useState([]);
  const [resultTotal, setResultsTotal] = useState(0);
    useEffect(() => {
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();
        (async function() {
            try {
                const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_URL}&pageSize=60`, {cancelToken: source.token})
                console.log(res.data);
                setArticles(res.data.articles);
                setResultsTotal(res.data.totalResults)
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('aborted2');
                  } else {
                    console.log(error)
                  }
            }
        } ())
        return () => {
            source.cancel();
          }
        }, [])
  return (
    <Box>
        <SearchBar search={search} setSearch={setSearch}/>
        <Flex direction={'column'} columnGap={'20px'} my={'20px'} justifyContent={'start'} alignItems={'center'}>
            <Text alignSelf={'end'} fontSize={'1.5rem'} mr={'0.8rem'}>{resultTotal}</Text>
            {articles.map((article, i) => (
                <ArticleCard 
                key={i}
                id={i}
                title={article.title}
                image={article.urlToImage}
                url={article.url}
                date={article.publishedAt}
                publisher={article.source.name}
                description={article.description}
                />
            ))}
        </Flex>
    </Box>
  )
}

export default Explore