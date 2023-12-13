import { SimpleGrid } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import { GameCard } from "./GameCard"
export const GameGrid = () => {
    const {games, error} = useGames()
  return (
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding={10} spacing={10}>
        {error && <li>{error}</li>}
        {games.map(game => <GameCard key={game.id} game={game} />)}
    </SimpleGrid>
  )
}
