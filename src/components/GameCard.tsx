import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { PlatformIconList } from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from '../services/img-url';
import { Emoji } from "./Emoji";

interface GameCardProps {
  game: Game;
}
export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card  >
      <Image src={getCroppedImageUrl(game.background_image)} objectFit={"cover"} w={"100%"} h={"170px"} alt={game.name} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3} >
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
        <CriticScore score={game.metacritic} />

            </HStack>
      <Heading  fontSize={"2xl"} >{game.name}<Emoji rating={game.rating_top} /></Heading>
      </CardBody>
    </Card>
  );
};
