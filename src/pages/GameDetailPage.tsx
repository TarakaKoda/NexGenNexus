import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Spinner } from "@chakra-ui/spinner";
import { Heading, Text } from "@chakra-ui/layout";
import { useState } from "react";
import { Button } from "@chakra-ui/button";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
