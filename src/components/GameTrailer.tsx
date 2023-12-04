import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: game, error, isLoading } = useTrailers(gameId);

  const first = game?.results[0];
  if (isLoading) return null;
  if (error) throw error;
  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
