import { Button, SimpleGrid } from "@chakra-ui/react";
import useGames, { Game } from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkelton } from "./GameCardSkelton";
import { GameCardContainer } from "./GameCardContainer";
import { GameQuery } from "../App";
import { Text } from "@chakra-ui/react";
import React from "react";
interface Props {
  gamequery: GameQuery;
}
export const GameGrid = ({ gamequery }: Props) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGames(gamequery);
  const skeltons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error.message}</Text>;
  return (
    <>
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={10}
      spacing={3}
    >
      {isLoading &&
        skeltons.map((skelton) => (
          <GameCardContainer key={skelton}>
            <GameCardSkelton />
          </GameCardContainer>
        ))}
      {error && <li>{error}</li>}
      {data?.pages.map((page: any, index) => (
        <React.Fragment key={index}>
          {page.results.map((game: Game) => (
            <GameCardContainer key={game.id}>
              {" "}
              <GameCard game={game} />{" "}
            </GameCardContainer>
          ))}
        </React.Fragment>
      ))}
      <React.Fragment></React.Fragment>
    </SimpleGrid>
    <Button mt={5} mb={5} w={"100%"} onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
      {isFetchingNextPage ? "Loading..." : hasNextPage ? "Load More" : ""}
    </Button>
    </>
  );
};
