
import {  SimpleGrid, Text } from "@chakra-ui/react";

import { GameAttributes } from "../components/GameAttributes";
import { CriticScore } from "../components/CriticScore";
import { Game } from "../Entites/Game";

interface Props {
    game: Game
}


export const Attributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} padding={10}>
        <GameAttributes term="Platforms" >
          {game.parent_platforms?.map((p) => (
            <Text key={p.platform.id}>{p.platform.name}</Text>
          ))}
        </GameAttributes>
        <GameAttributes term="Metascore">
          <CriticScore score={game.metacritic} />
        </GameAttributes>
        <GameAttributes term="Genres">
          {game.genres.map((g) => (
            <Text key={g.id}>{g.name}</Text>
          ))}
        </GameAttributes>
        <GameAttributes term="Publishers">
          {game.publishers.map((p) => (
            <Text key={p.id}>{p.name}</Text>
          ))}
        </GameAttributes>
      </SimpleGrid>
  )
}
