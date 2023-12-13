import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { PlatformIconList } from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from '../services/img-url';

interface GameCardProps {
  game: Game;
}
export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card  >
      <Image src={getCroppedImageUrl(game.background_image)} objectFit={"cover"} w={"100%"} h={"170px"} alt={game.name} />
      <CardBody>
        <Heading  fontSize={"2xl"} >{game.name}</Heading>
        <HStack justifyContent={"space-between"} >
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
        <CriticScore score={game.metacritic} />

            </HStack>
      </CardBody>
    </Card>
  );
};
