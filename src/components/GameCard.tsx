import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../Entites/Game";
import { PlatformIconList } from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from "../services/img-url";
import { Emoji } from "./Emoji";
import { Link } from "react-router-dom";

interface GameCardProps {
  game: Game;
}
export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card
      _hover={{
        transform: "scale(1.05)",
        transition: "all 0.3s",
        boxShadow: "2xl",
      }}
    >
      <Image
        src={getCroppedImageUrl(game.background_image)}
        objectFit={"cover"}
        w={"100%"}
        h={"170px"}
        alt={game.name}
      />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>
          <Link to={"/games/" + game.slug}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};
