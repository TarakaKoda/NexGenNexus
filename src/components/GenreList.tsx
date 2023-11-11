import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres.ts";
import getCroppedImageUrl from "../services/image-url.ts";
import GenreListSkeleton from "./GenreListSkeleton.tsx";

const GenreList = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  const { data, error, isLoading } = useGenres();
  
  if(error) return null;
 
  return ( 
    <List>
      {isLoading &&  skeletons.map(skeleton => <GenreListSkeleton key={skeleton}></GenreListSkeleton>)}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              boxSize="40px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}></Image>
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
