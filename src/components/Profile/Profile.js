import React from 'react'
import { Card, Heading } from '@chakra-ui/react'
import ShowBookmarked from '../ShowBookmarked/ShowBookmarked'
import ShowNotes from '../ShowNotes/ShowNotes'
const Profile = (existingNote, setExistingNote, noteExists, setNoteExists) => {
  return (
    <>
    <Card variant="unstyled" ml={{base: 3}} pt={5}>
      <Heading as='h3' borderBottomColor={'koobBlack'} borderBottomWidth={'2px'} fontSize={'1.5rem'} mr={{base: 3}}>Favorites</Heading>
      <ShowBookmarked existingNote={existingNote} 
      setExistingNote={setExistingNote} 
      noteExists={noteExists} 
      setNoteExists={setNoteExists} />
    </Card>
    <Card variant="unstyled" ml={{base: 3}} pt={5}>
      <Heading as='h3' borderBottomColor={'koobBlack'} borderBottomWidth={'2px'} fontSize={'1.5rem'} mr={{base: 3}}>Notes</Heading>
      <ShowNotes existingNote={existingNote} 
      setExistingNote={setExistingNote} 
      noteExists={noteExists} 
      setNoteExists={setNoteExists} />
    </Card>
    </>
  )
}

export default Profile