import { SimpleGrid } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import { GameCard } from "./GameCard"
import { GameCardSkelton } from "./GameCardSkelton"
export const GameGrid = () => {
    const {games, error , isLoading} = useGames()
    const skeltons = [ 1, 2, 3, 4, 5 , 6]
  return (
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding={10} spacing={10}>
        {isLoading && skeltons.map(skelton => <GameCardSkelton key={skelton} />)}
        {error && <li>{error}</li>}
        {games.map(game => <GameCard key={game.id} game={game} />)}
    </SimpleGrid>
  )
}
