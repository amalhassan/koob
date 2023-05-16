import React from 'react'
import Articles from '../../components/Articles/Articles'
const ArticlesPage = ({type, setType, query, setQuery, existingNote, setExistingNote, noteExists, setNoteExists}) => {
  return (
    <Articles type={type} setType={setType} query={query} setQuery={setQuery} existingNote={existingNote} setExistingNote={setExistingNote} noteExists={noteExists} setNoteExists={setNoteExists}/>
  )
}

export default ArticlesPage