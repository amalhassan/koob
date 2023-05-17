import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {baseURL} from '../../constant';
import ArticleCard from '../ArticleCard/ArticleCard';
const ShowNotes = () => {
    const [notesToShow, setNotesToShow] = useState([]);
    useEffect(() => {
        (async function () {
            try {
                const res = await axios.get(`${baseURL}user/645d0a9b892e3f58c6b04385/notes`)
                setNotesToShow(res.data)
            } catch (error) {
              console.log(error)
            }
          } ())
    }, [])
  return (
    <div w='100%'>
    {notesToShow.map((article, i) => (
                <ArticleCard
                key={i}
                title={article.article_title}
                image={article.img_url}
                url={article.article_url}
                date={article.date}
                publisher={article.publisher}
                description={article.summary}
                noteRetrieved={article.note}
                notesArray={notesToShow} 
                setNotesArray={setNotesToShow}
                />
                 ))}
   </div>
  )
}

export default ShowNotes