import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface GameCardProps {
  game: Game;
}
export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow={"hidden"} >
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading  fontSize={"2xl"} >{game.name}</Heading>
      </CardBody>
    </Card>
  );
};
