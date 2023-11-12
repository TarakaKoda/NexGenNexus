import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres.ts";
import getCroppedImageUrl from "../services/image-url.ts";
import GenreListSkeleton from "./GenreListSkeleton.tsx";
  
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GenreListSkeleton key={skeleton}></GenreListSkeleton>
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="40px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}></Image>
            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} fontSize="lg" variant="link" onClick={() => onSelectGenre(genre)}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
