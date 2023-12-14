import { SimpleGrid } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import { GameCard } from "./GameCard"
import { GameCardSkelton } from "./GameCardSkelton"
import { GameCardContainer } from "./GameCardContainer"
import { GameQuery } from "../App"
import { Text } from "@chakra-ui/react"
interface Props {
  gamequery: GameQuery
}
export const GameGrid = ({ gamequery }: Props ) => {
    const {data, error , isLoading} = useGames(gamequery)
    const skeltons = [ 1, 2, 3, 4, 5 , 6]
    if (error) return <Text>{error}</Text>
  return (
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding={10} spacing={3}>
        {isLoading && skeltons.map(skelton => <GameCardContainer key={skelton}><GameCardSkelton  /></GameCardContainer> )}
        {error && <li>{error}</li>}
        {data.map(game => <GameCardContainer key={game.id}> <GameCard  game={game} /> </GameCardContainer>)}
    </SimpleGrid>
  )
}
