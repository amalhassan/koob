import React from 'react'
import Profile from '../../components/Profile/Profile'
const ProfilePage = (existingNote, setExistingNote, noteExists, setNoteExists) => {
  return (
    <Profile existingNote={existingNote} setExistingNote={setExistingNote} noteExists={noteExists} setNoteExists={setNoteExists}/>
  )
}

export default ProfilePage