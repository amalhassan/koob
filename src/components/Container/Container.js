import React, {useState} from 'react';
import {Flex} from '@chakra-ui/react';
import Main from '../Main/Main';
import SideBar from '../SideBar/SideBar';
const Container = () => {
  const [type, setType] = useState("personal");
  const [page, setPage] = useState("explore");
  const [existingNote, setExistingNote] = useState({});
  const [noteExists, setNoteExists] = useState(false);
  return (
    <Flex direction={{base: 'column', md: 'row'}}>
      <SideBar setType={setType} page={page} setPage={setPage} />
      <Main type={type} setType={setType} page={page} setPage={setPage} existingNote={existingNote} setExistingNote={setExistingNote} noteExists={noteExists} setNoteExists={setNoteExists}/>
    </Flex>
  )
}

export default Container