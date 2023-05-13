import React, {useState} from 'react'
import { Card, Image, Stack, Box, CardBody, HStack, Heading, Flex, Icon, Text, Link} from '@chakra-ui/react';
import {MdOutlineBookmark} from 'react-icons/md';
const ArticleCard = ({id, title, image, url, date, publisher, description}) => {
    const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "2-digit",
      };
    const formatDate = new Date(date).toLocaleDateString('en-CA', options);
    const [readLater, setReadLater] = useState(false);
    const handleReadLater = () => {
        setReadLater(!readLater);
    }
  return (
    <Card display={'flex'} flexDirection={{base:'column', sm: 'row'}} borderWidth={'1px'} borderColor={'koobBlack'} w={{base:'90%', sm:'100%'}} id={id} my={'20px'} _hover={{borderColor: 'koobAccentGold', borderWidth: '2px'}}>
        <Image aspectRatio={1} objectFit='cover' w={{base: '100%', sm:'13vw'}} src={image} alt={'image for article'} borderRadius={2}/>
        <Stack>
            <CardBody fontSize={'2xm'}>
                <HStack w='100%' justify={'space-between'}>
                    <Link href={url} target="_blank">
                        <Heading as='h2' fontSize={'2xl'}>{title}</Heading>
                    </Link>
                    <Icon as={MdOutlineBookmark} onClick={() => handleReadLater()} boxSize={7} color = {!readLater ? "koobBlack" : "koobAccentGold"}/>
                </HStack>
                <HStack w='90%' justify={'start'} fontSize={'2xm'}>
                    <Text>{formatDate}</Text>
                    <Text as='h4'>{publisher ? publisher : null}</Text>
                </HStack>
                <HStack>
                    <Text mt={2}>{description}</Text>
                </HStack>
            </CardBody>
        </Stack>
    </Card>
  )
}

export default ArticleCard