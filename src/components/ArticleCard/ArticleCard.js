import React, {useState} from 'react'
import { Card, Image, Stack, CardBody, HStack, VStack, Heading, Icon, Text, Link, Button } from '@chakra-ui/react';
import {MdOutlineBookmark} from 'react-icons/md';
import ArrowDown from '../../assets/icons/arrow_drop_down.svg';
import ArrowUp from '../../assets/icons/arrow_drop_up.svg';
import NoteForm from '../NoteForm/NoteForm';
const ArticleCard = ({id, title, image, url, date, publisher, description}) => {
    const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "2-digit",
      };
    const formatDate = new Date(date).toLocaleDateString('en-CA', options);
    const [readLater, setReadLater] = useState(false);
    const [formType, setFormType] = useState("Add");
    const [hide, setHide] = useState(true);
    const handleReadLater = () => {
        setReadLater(!readLater);
    }
    const [note, setNote] = useState("");
    const handleToggle = () => {
        setHide(!hide)
    }
  return (
    <Card display={'flex'} flexDirection={{base:'column', md: 'row'}} borderWidth={'1px'} borderColor={'koobBlack'} w={{base:'90%', sm:'100%'}} id={id} my={'20px'} _hover={{borderColor: 'koobAccentGold', borderWidth: '2px'}}>
        <Image aspectRatio={1} objectFit='cover' w={{base: '100%', sm:'25vw', md: '20vw'}} src={image} alt={'image for article'} borderRadius={2}/>
        <Stack w={{md: '100%'}}>
            <CardBody fontSize={'2xm'}>
                <HStack w='100%' justify={'space-between'}>
                    <Link href={url} target="_blank">
                        <Heading as='h2' fontSize={'2xl'}>{title}title</Heading>
                    </Link>
                    <Icon as={MdOutlineBookmark} onClick={() => handleReadLater()} boxSize={7} color = {!readLater ? "none" : "koobAccentGold"}/>
                </HStack>
                <HStack w='90%' justify={'start'} fontSize={'2xm'}>
                    <Text>{formatDate}date</Text>
                    <Text as='h4'>{publisher ? publisher : null}publisher</Text>
                </HStack>
                <VStack  w='100%' justify={'stretch'}>
                    <Stack align={'space-between'} justify={'space-between'} w='100%' direction={{base:'column', sm: 'row'}}>
                        <Text mt={2}>{description}descriptionjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjfffffffffffffffffffffffffffff</Text>
                        <Stack>
                            <Button variant='unstyled' h={'fit-content'} bg={'white'} onClick={handleToggle} w="fit-content">
                                <HStack borderWidth={'2px'} borderColor={'koobAccentGold'} p={'3px'} _hover={{color: 'koobAccentGold'}}>
                                    <Text fontSize={'0.8rem'} color= {hide ? "koobAccentGold" : "koobBlack"}>{`${formType} Note`}</Text>
                                    {hide ? <Image borderWidth={'2px'} borderColor={'red'} src={ArrowDown} boxSize={'1.5rem'} color="koobBlack" /> : <Image src={ArrowUp} boxSize={'1.5rem'} color="koobAccentGold" />}
                                </HStack>
                            </Button>
                        </Stack>
                     </Stack>
                     {hide ? null : <NoteForm formType={formType} note={note} setNote={setNote} setFormType={setFormType}/> }
                </VStack>
            </CardBody>
        </Stack>
        
    </Card>
  )
}

export default ArticleCard