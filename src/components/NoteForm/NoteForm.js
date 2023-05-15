import React, {useState} from 'react';
import { Card, FormControl, FormErrorMessage, FormLabel, Textarea, Button, HStack, ButtonGroup, Image, Text, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody,
ModalCloseButton} from '@chakra-ui/react';
import DeleteIcon from '../../assets/icons/delete_outline.svg';
const NoteForm = ({formType, note, setNote, setFormType}) => {
  const [toggleForm, setToggleForm] = useState(false);
  const [error, setError] = useState("");
  const cancelledNote = (e) => {
    if (e.target.id === 'cancelled') {
      setNote("");
    }
  }
  const submitted = () => {
    setToggleForm(true);
    setFormType('Edit');
    setNote("");
  }
  const getInput = (e) => {
    setNote(e.currentTarget.value)
  }
  const validateInput = (note) => {
    if(note === "" || note === undefined) {
      setError("This field is required");
    } else {
      setError("");
      submitted();
    }
  }
  const handleText = (e) => {
    e.preventDefault();
    validateInput(note);
  }
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    {toggleForm ? <Card>Hi</Card> :
    <Card display={'flex'} w={'100%'} my={'20px'} shadow={'none'}>
        <form w={"100%"} display={'flex'} id="form" onSubmit={handleText}>
            <FormControl isInvalid={error}>
              <FormLabel hidden={true} htmlFor={note}>Note</FormLabel>
              <Textarea type="text" placeholder='Thoughts?' borderWidth={'1px'} borderColor={'koobBlack'} name="note" id= "note" value={note} onChange={getInput}/>
              <FormErrorMessage color={'red'} pt={0} mt={1}>
				          {/* <img src={ErrorIcon} alt='error icon' /> */}
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
        <Button variant="unstyled" _hover={{bg: 'red', color: 'white'}}  p={2}>Yes</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  </>
  )
}

export default NoteForm