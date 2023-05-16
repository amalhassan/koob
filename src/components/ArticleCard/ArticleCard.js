import React, {useState, useEffect} from 'react'
import { Card, Image, Stack, CardBody, HStack, VStack, Heading, Icon, Text, Link, Button } from '@chakra-ui/react';
import {MdOutlineBookmarkBorder, MdBookmark} from 'react-icons/md';
import BookmarkSolid from '../../assets/icons/bookmark_solid.svg';
import BookmarkOutline from '../../assets/icons/bookmark_outline.svg';
import ArrowDown from '../../assets/icons/arrow_drop_down.svg';
import ArrowUp from '../../assets/icons/arrow_drop_up.svg';
import PlaceholderImg from '../../assets/images/27163.jpg'
import axios from 'axios';
import {baseURL} from "../../constant.js"
import NoteForm from '../NoteForm/NoteForm';
const ArticleCard = ({title, image, url, date, publisher, description, existingNote, setExistingNote, noteExists, setNoteExists, notesArray, setNotesArray}) => {
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
    const [bookmarksExist, setBookmarksExist] = useState(false);
    const handleReadLater = () => {
        setReadLater(!readLater);
        setBookmarksExist(true);
    }
    const [note, setNote] = useState("");
    const handleToggle = () => {
        setHide(!hide)
    }
    title = "article title";
    image = PlaceholderImg;
    date = "Friday May 23, 2023";
    publisher = "Abc";
    description = "djfdf";
    let article_url="www.yahoo.com"
    useEffect(() => {
        if (readLater) {
            (async function () {
                try {
                const res = await axios.post(`${baseURL}user/645d0a9b892e3f58c6b04385/articles`, {
                    article_title: title,
                    article_url: article_url,
                    publisher: publisher,
                    img_url: image,
                    date: date,
                    summary: description
                  })
                console.log("posted bookmark", res.data);
                // setBookMarkId(res.data_id)
                } catch (error) {
                  console.log(error)
                }
              } ())
        } else if (bookmarksExist) {
                (async function () {
                    try {
                    const res = await axios.get(`${baseURL}/user/645d0a9b892e3f58c6b04385/articles`)
                    const articlesBookmarked = res.data;
                    // console.log(articleBookmarked);
                    const findArticle = articlesBookmarked.find(((r) => title == r.article_title));
                    const bookmarkToRemoveId = findArticle._id;
                    // console.log(bookmarkToRemoveId);
                    const res2 = await axios.delete(`${baseURL}user/645d0a9b892e3f58c6b04385/articles/${bookmarkToRemoveId}`)
                    console.log("deleted bookmark", res2.data);
                    } catch (error) {
                      console.log(error)
                    }
                  } ())
            }
    }, [readLater])
  return (
    <Card display={'flex'} flexDirection={{base:'column', md: 'row'}} borderWidth={'1px'} borderColor={'koobBlack'} w={{base:'90%', sm:'100%'}} my={'20px'} _hover={{borderColor: 'koobAccentGold', borderWidth: '2px'}}>
        <Image aspectRatio={1} objectFit='cover' w={{base: '100%', sm:'25vw', md: '20vw'}} src={PlaceholderImg} alt={'image for article'} borderRadius={2}/>
        <Stack w={{md: '100%'}}>
            <CardBody fontSize={'2xm'}>
                <HStack w='100%' justify={'space-between'}>
                    <Link href={url} target="_blank">
                        <Heading as='h2' fontSize={'2xl'}>{title}</Heading>
                    </Link>
                    {!readLater ?  <Image as={MdOutlineBookmarkBorder} onClick={() => handleReadLater()} boxSize={8} /> :
                     <Image as={MdBookmark} onClick={() => handleReadLater()} boxSize={8} color={'koobAccentGold'}/>} 
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
                     {hide ? null : <NoteForm 
                                    formType={formType} 
                                    note={note} 
                                    setNote={setNote} 
                                    setFormType={setFormType} 
                                    title={title}
                                    image={image}
                                    article_url={article_url}
                                    date={date}
                                    publisher={publisher}
                                    description={description} 
                                    notesArray={notesArray}
                                    hide={hide}
                                    existingNote={existingNote} 
                                    setExistingNote={setExistingNote} 
                                    noteExists={noteExists} 
                                    setNoteExists={setNoteExists}
                                    setNotesArray={setNotesArray}
                                    /> }
                </VStack>
            </CardBody>
        </Stack>
        
    </Card>
  )
}

export default ArticleCard