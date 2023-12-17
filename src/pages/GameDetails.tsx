import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { ExpandableText } from "../components/ExpandableText";
import { Attributes } from "../components/Attributes";
import { GameTrailer } from "../components/GameTrailer";
import { GameScreenshots } from "../components/GameScreenshots";

export const GameDetails = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading)
    return (
      <Spinner
        color="teal.500"
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        speed="0.65s"
        emptyColor="gray.200"
        size="xl"
      >
        {" "}
      </Spinner>
    );
  if (error || !game) throw error;
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} padding={5}>
        <GridItem>
          <Heading as="h1" fontSize="5xl" margin={5}>
            {game.name}
          </Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <Attributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id} />
          <GameScreenshots gamepk={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};
