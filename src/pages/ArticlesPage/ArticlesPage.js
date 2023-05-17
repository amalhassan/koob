import React from 'react'
import Articles from '../../components/Articles/Articles'
const ArticlesPage = ({type, setType, query, setQuery}) => {
  return (
    <Articles type={type} setType={setType} query={query} setQuery={setQuery} />
  )
}

export default ArticlesPage