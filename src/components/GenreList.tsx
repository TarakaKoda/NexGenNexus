import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres.ts";
import getCroppedImageUrl from "../services/image-url.ts";
import useGameQueryStore from "../store.ts";
import GenreListSkeleton from "./GenreListSkeleton.tsx";

const GenreList = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GenreListSkeleton key={skeleton}></GenreListSkeleton>
          ))}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="40px"
                objectFit="cover"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}></Image>
              <Button
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
                onClick={() => setSelectedGenreId(genre.id)}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
