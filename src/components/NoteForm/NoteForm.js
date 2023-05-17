import React, {useState, useEffect} from 'react';
import { Card, FormControl, FormErrorMessage, FormLabel, Textarea, Button, HStack, ButtonGroup, Image, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody,
ModalCloseButton} from '@chakra-ui/react';
import DeleteIcon from '../../assets/icons/delete_outline.svg';
import axios from 'axios';
import {baseURL} from "../../constant.js"
import { findNote } from '../../utils';
const NoteForm = ({noteRetrieved, formType, setFormType, title, image, article_url, date, publisher, description, notesArray, hide, setNotesArray}) => {
  const [toggleForm, setToggleForm] = useState(false);
  const [error, setError] = useState("");
  const[buttonClicked, setButtonClicked] = useState(false);
  const [savedNote, setSavedNote] = useState("");
  const [id, setId] = useState("");
  const [existingNote, setExistingNote] = useState({});
  const [noteExists, setNoteExists] = useState(false);
  const [note, setNote] = useState("");
   useEffect(() => {
      if (!hide) {
        console.log("noteform", notesArray)
        const res = findNote(notesArray, title);
        if(Object.keys(res).length !== 0) {
          console.log("this is existing note", existingNote);
          setExistingNote(res);
          setNoteExists(true);
        }
        console.log("object does not exist", noteExists)
      }
    }, [notesArray, title, hide, existingNote, setNoteExists, noteExists])
    useEffect(() => {
      if(noteExists) {
        setId(existingNote._id);
        setFormType('Edit');
      }
    }, [existingNote, noteExists, setFormType])
  const cancelledNote = (e) => {
    if (e.target.id === 'cancelled') {
      setNote("");
    }
  }
  const submitted = (text) => {
    setError("");
    setNote(text)
    setToggleForm(true);
    setButtonClicked(true);
    console.log("complete submitted", note)
  }
  const validateInput = (text) => {
    if(text === "" || text === undefined) {
      setError("This field is required");
    } else {
      submitted(text);
    }
  }
  const handleText = (e) => {
    e.preventDefault();
    console.log("initial", e.target.note.value);
    validateInput(e.target.note.value);
  }
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (error === "" && note !== "") {
        const info = {
          note: note,
          article_title: title,
          article_url: article_url,
          publisher: publisher,
          img_url: image,
          date: date,
          summary: description
        }
        console.log("info note", info.note)
        let url;
        let method;
        if (buttonClicked) {
        if (formType === 'Add' && !info.note !== "") {
          url = `${baseURL}user/645d0a9b892e3f58c6b04385/notes`;
          method = "POST";
        } else if (formType === 'Edit'){
          url = `${baseURL}user/645d0a9b892e3f58c6b04385/notes/${id}`;
          method = "PUT"
      }
      axios.request({url, method, data: {...info}, headers: {'Content-Type': 'application/json' }}).then((res) => {
        setButtonClicked(false);
        console.log(formType);
         if (formType === 'Add') {
          setFormType('Edit');
        } else {
          setFormType("Add")
        }
        setNote("");
        const n = findNote(notesArray, title);
        setExistingNote(n);
        setNoteExists(true);
        setSavedNote(res.data.note)
        return console.log(res.data)
        
    }).then((res) => {
      (async function () {
        try {
        const res = await axios.get(`${baseURL}user/645d0a9b892e3f58c6b04385/notes`)
        setNotesArray(res.data);
        } catch (error) {
          console.log(error)
        }
      } ())
    })
      .catch((error) => {
        return console.log(error)
      })
    }
  } 
  }, [title, image, article_url, date, description, formType, note, publisher, buttonClicked, error, id, notesArray, setFormType, setNotesArray])
  const handleDelete = () => {
      axios.delete(`${baseURL}user/645d0a9b892e3f58c6b04385/notes/${id}`).then((res) => {
      console.log("deleted", res.data);
      setFormType('Add');
      setNoteExists(false);
      }).catch ((error) => {
        console.log(error)
      })
  } 
  return (
    <>
    {toggleForm  ? <Card variant="unstyled" borderWidth={'1px'} borderColor={'koobBlack'} w={'100%'} p={2}>Note: <Text>{savedNote} </Text></Card> :
    <Card display={'flex'} w={'100%'} my={'20px'} shadow={'none'}>
        <form w={"100%"} display={'flex'} id="form" onSubmit={(e) => handleText(e)}>
            <FormControl isInvalid={error}>
              <FormLabel hidden={true} htmlFor={note}>Note</FormLabel>
              <Textarea type="text" placeholder='Thoughts?' borderWidth={'1px'} borderColor={'koobBlack'} name="note" id= "note" />
              <FormErrorMessage color={'red'} pt={0} mt={1}>
				          <Text fontSize={{ base: 'nonMobSm' }} pl={'0.2rem'}>{error}</Text>
			        </FormErrorMessage>
            </FormControl>
            <ButtonGroup display = {'flex'} rowGap={'4px'} justifyContent={'end'}>
              <Button variant='unstyled' _hover={{color: 'koobAccentGold'}} id='cancelled' onClick={cancelledNote}>Cancel</Button>
              <Button type="submit" variant='unstyled' _hover={{color: 'koobAccentGold'}}>{formType === 'Add' ? 'Add' : 'Save'}</Button>
            </ButtonGroup>
            {formType === 'Edit' ? 
            <HStack mt={'5px'}>
              <Button variant="unstyled" _hover={{bg: 'red'}} display={'flex'} w={'100%'} justifyItems={'end'} onClick={onOpen}><Image src={DeleteIcon}/></Button>
            </HStack>
            : null}   
        </form>
    </Card>
    }
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Delete Note</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        Are you certain you would like to delete this note?
      </ModalBody>
      <ModalFooter>
        <Button variant="unstyled" _hover={{borderWidth: '2px', borderColor: 'koobAccentGold'}} mr={3} p={2} onClick={onClose}>
          Close
        </Button>
        <Button variant="unstyled" _hover={{bg: 'red', color: 'white'}}  p={2} onClick={handleDelete}>Yes</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  </>
  )
}

export default NoteForm