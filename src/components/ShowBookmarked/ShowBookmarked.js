import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {baseURL} from '../../constant';
import ArticleCard from '../ArticleCard/ArticleCard';
const ShowBookmarked = () => {
    const [bookmarkedArticleList, setBookmarkedArticleList] = useState([])
    const [notesWithBookmark, setNotesWithBookmark] = useState([]);
    useEffect(() => {
        (async function () {
            try {
                const res = await axios.get(`${baseURL}user/645d0a9b892e3f58c6b04385/articles`)
                console.log("articles from showbookmarked comp", res.data)
                setBookmarkedArticleList(res.data)
                const res2 = await axios.get(`${baseURL}user/645d0a9b892e3f58c6b04385/notes`)
                console.log("notes array from showbokmarked component", res2.data)
                setNotesWithBookmark(res2.data)
            } catch (error) {
                console.log(error)
            }
          } ())

    }, [])
  return (
   <div w='100%'>
    {bookmarkedArticleList.map((article, i) => (
                <ArticleCard
                key={i}
                title={article.article_title}
                image={article.img_url}
                url={article.article_url}
                date={article.date}
                publisher={article.publisher}
                description={article.summary}
                notesArray={notesWithBookmark} 
                setNotesArray={setNotesWithBookmark}
                />
                 ))}
   </div>
  )
}

export default ShowBookmarked