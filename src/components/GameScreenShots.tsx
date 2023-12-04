import { SimpleGrid } from "@chakra-ui/layout";
import useScreenShots from "../hooks/useScreenShots";
import { Image } from "@chakra-ui/image";

interface Props {
  gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
  const { data: screenShots, error, isLoading } = useScreenShots(gameId);
  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {screenShots?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
